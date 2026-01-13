import { useContext, useReducer } from "react";
import LoginCom from "../components/LoginCom";
import { initalLogin, initalState, reducer } from "../moduls/member_red";
import { useNavigate } from "react-router-dom";
import { loginCheck } from "../service/member.js";
import { AuthContext } from "../store/AuthContext";

function LoginCon (){
  // const [state,dispatch] = useReducer(reducer, initalState);
  const [state, dispatch] = useReducer(reducer, initalState);
  const {login} = useContext(AuthContext);

  const onChange = (e) => {
    // console.log(e.target);
    // dispatch({type:"Change_Input", value:e.target.value, name: e.target.name, form:"login"});
    dispatch({
      // type: "Login_Input", 
      type: "Change_Input", 
      value : e.target.value, 
      name : e.target.name,
      form : "login"
    });
  }

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({type:"LOADING"})
    try{
      const result = loginCheck(state.login.id, state.login.pwd)
      if(result === 0){
        login(state.login.id)
        navigate("/list")
      }
    }catch(e){
      dispatch({type: "ERROR", error:e.toString()})
      return ;
    }
    dispatch({ type: "FINISHED" });
  }
    return (
      <>
        <LoginCom loading={state.loadding} error={state.error} onSubmit={onSubmit} onChange={onChange} state={state} />
      </>
    );
}
export default LoginCon;
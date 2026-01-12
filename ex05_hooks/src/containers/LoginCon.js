import { useReducer } from "react";
import LoginCom from "../components/LoginCom";
import { initalLogin, initalState, reducer } from "../moduls/member_red";

function LoginCon (){
  // const [state,dispatch] = useReducer(reducer, initalState);
  const [state, dispatch] = useReducer(reducer, initalState);
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
    return (
      <>
        <LoginCom onChange={onChange} state={state} />
      </>
    );
}
export default LoginCon;
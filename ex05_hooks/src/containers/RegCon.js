import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { initalState, initalReg, reducer } from "../moduls/member_red";
import { register } from "../service/member.js";
import {useNavigate} from "react-router-dom"
function RegCon (){
  // {login: {id :"",pwd:"", name:"",addr:""}}
  const [state, dispatch] = useReducer(reducer, initalState);
  const onChange = (e) => {
    console.log(e.target)
    const {value, name} = e.target
    dispatch({ type: "Change_Input", value, name, form:"register" });
  };
  // console.log("reg : ", state)
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(state)
    dispatch({type:"LOADING"})
    const result = register(state.register);
    if(result === 1){
      // alert("회원가입 성공");
      navigate("/list")
    }
    dispatch({type:"FINISHED"})
  }
  return (
    <>
      <RegCom onSubmit={onSubmit} onChange={onChange} username={state.id} pwd={state.pwd} name={state.name} addr={state.addr} />
    </>
  );
}
export default RegCon;
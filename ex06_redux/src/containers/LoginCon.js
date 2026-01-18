import { useDispatch, useSelector } from "react-redux";
import LoginCom from "../components/LoginCom";
import inputSlice from "../redux/inputSlice";
import { LoginThunk } from "../service/authThunk";
import {useNavigate} from "react-router-dom"
import { login } from "../redux/authSlice";

function LoginCon (){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 저장소에 저장되어 있는 state를 꺼내는 역할
  //변수.id 변수.pwd 이렇게 안쓰게 하기 위해 아래처럼
  const {id,pwd} = useSelector(state => {
    // console.log("logincon state : ", state);
    return state.input.login; //{id:"",pwd:""}
  })

  const {result,loading,error} = useSelector(state => state.input)
  
  const onChange = (e) => {
    const {name, value} = e.target
    // console.log(name)
    // console.log(value)
    dispatch(inputSlice.actions.changeinput({name,value, form:"login"}))
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    // const result = await dispatch(LoginThunk({id,pwd}))
    const resultThunk = await dispatch(LoginThunk({id,pwd}))
    console.log("resultThunk : ", resultThunk);
    if(resultThunk.payload === 0){
      dispatch(login({username:id}))
      navigate("/")
    }
  }

    return (
      <>
        <LoginCom
          username={id}
          pwd={pwd}
          onChange={onChange}
          onSubmit={onSubmit}
          result={result}
          loading={loading}
          error={error}
        />
      </>
    );
}
export default LoginCon;
import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import LoginCom from "../components/LoginCom";
import {changeInput} from "../redux/inputSlice"
import { loginThunk } from "../service/authThunk";
import { useNavigate } from "react-router-dom";
const LoginCon = () => {
    // slice에 있는 함수를 호출하기 위해 사용
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // store에 저장된 값을 가져오기 위해 useSelector사용
    const {username, password} = useSelector( state => {
        //console.log(state) // input : login {username:"",password:""} 가져옴
        return state.input.login;
    })
    const { isLoggedIn, result, loading, error } = useSelector((state) => {
    //   console.log("auth state", state); 
      return state.auth;
    });

    const onChange = (e) => {
        // console.log(e.target.name)

        const {name,value} = e.target
        // name과value는 입력값 가져옴 form은 inputSlice에 login을 가져온다고 선언
        dispatch(changeInput({name,value, form : "login"}));

    }
    const onSubmit = (e) => {
      e.preventDefault();
      // console.log("state username : ", username)
      // console.log("state password : ", password);
      // username,password 이것들이 loginthunk로 이동
      dispatch(loginThunk({ username, password }));
    }
    if( isLoggedIn ) {
        navigate("/")
    }
    return (
      <>
        <LoginCom
          loading={loading}
          error={error}
          result={result}
          onSubmit={onSubmit}
          onChange={onChange}
          username={username}
          password={password}
        />
      </>
    );
}
export default LoginCon;
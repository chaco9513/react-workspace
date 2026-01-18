import HeaderCom from "../components/common/HeaderCom";
import LoginCom from "../components/LoginCom";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginInput } from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";
import { useNavigate } from "react-router-dom";

const LoginCon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, pwd } = useSelector((state) => state.input.login);
  const { isLogin, error } = useSelector((state) => state.auth);

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeLoginInput({ name, value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const resultAction = await dispatch(
      loginThunk({ username: id, password: pwd })
    );

    if (resultAction.payload.result === 0) {
      alert("로그인 성공!");
      navigate("/"); // 홈으로 이동
    } else {
      alert("로그인 실패!");
    }
  };

  return (
    <>
      <HeaderCom />
      <LoginCom
        onSubmit={onSubmit}
        onChange={onChange}
        username={id}
        pwd={pwd}
      />
    </>
  );
};

export default LoginCon;

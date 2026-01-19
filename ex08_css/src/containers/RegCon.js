import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import { changeInput } from "../redux/inputSlice";
import RegCom from "../components/RegCom";
import { registerThunk } from "../service/authThunk";
import { useNavigate } from "react-router-dom";

const RegCon = () => {
  const { username, password, role } = useSelector(
    (state) => state.input.register,
  );
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeInput({ name, value, form: "register" }));
  };
  /* 
  const onSubmit = (e) => {
    e.preventDefault();
    // 나중에 사용할 것
    const formData = new FormData(e.target)
    // console.log("formData : ",formData)
    const userData = Object.fromEntries(formData.entries())
    // console.log("userData : ", userData)
    // dispatch(함수({username, password, role}))
    // dispatch(registerThunk(username,password, role));
    dispatch(registerThunk(userData));
  };
  */
 const navigate = useNavigate()
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const userData = Object.fromEntries( formData.entries() )
        const {payload} = await dispatch( registerThunk(userData) )
        console.log(payload)
        if( payload.result === 0 )
            navigate("/login")
    }
  return (
    <>
      <RegCom
        onSubmit={onSubmit}
        onChange={onChange}
        username={username}
        password={password}
        role={role}
      />
    </>
  );
};
export default RegCon;

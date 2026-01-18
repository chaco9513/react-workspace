import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/HeaderCom";
import { logout } from "../redux/authSlice";

 const HeaderCon = () => {
  const {username,isLoggedIn} = useSelector(state => {
    return state.auth;
  })
  const dispatch = useDispatch();
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
  }

    return (
      <>
        <HeaderCom
          username={username}
          isLoggedIn={isLoggedIn}
          onLogout={onLogout}
        />
      </>
    );
}
export default HeaderCon;
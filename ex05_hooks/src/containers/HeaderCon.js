import { useContext } from "react";
import HeaderCom from "../components/HeaderCom";
import { AuthContext } from "../store/AuthContext";

function HeaderCon (){

  const {auth, logout} = useContext(AuthContext);
  const onLogout = (e) => {
    e.preventDefault();
    logout();
  }

    return (
      <>
        <HeaderCom auth={auth} onLogout={onLogout} />
        <hr></hr>
      </>
    );
}
export default HeaderCon;
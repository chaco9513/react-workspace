import { Link } from "react-router-dom";

function HeaderCom ({auth, onLogout}){
    return (
      <>
        <Link to="/">HOME</Link> &nbsp;
        <Link to="/list">목록</Link> &nbsp;
        {auth.isLoggedIn ? (
          <>
            <span>{auth.user}님 로그인</span> &nbsp;
            <Link to="/" onClick={onLogout}>
              로그아웃
            </Link>{" "}
            &nbsp;
          </>
        ) : (
          <>
            <Link to="/login">로그인</Link> &nbsp;
            <Link to="/register">회원가입</Link> &nbsp;
          </>
        )}
        <Link to="/context">context</Link> &nbsp;
      </>
    );
}
export default HeaderCom;
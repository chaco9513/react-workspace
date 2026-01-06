import { Link, useNavigate } from "react-router-dom";

function NotFound () {
    const navigate = useNavigate();
    return (<>
        <h1>페이지 없음!!!</h1>
        <button onClick={() => navigate("/")}>HOME 이동</button>
        <button onClick={() => navigate(-1)}>뒤로 이동</button>
        <Link to="/">HOME 이동</Link>
    </>)
}
export default NotFound;
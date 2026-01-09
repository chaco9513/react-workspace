import { useNavigate } from "react-router-dom"

function NotFound(){
const nav = useNavigate();
    return(<>
    <button onClick={() => nav("/")}>HOME으로</button>
    </>)
}
export default NotFound
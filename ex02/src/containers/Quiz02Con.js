import { useState } from "react";
import Quiz02Com from "../components/Quiz02Com";
function Quiz02Con() {
    const [msg, setMsg] = useState("");
    // if (msg == "") {
    //   setMsg("값이 존재하지 않음");
    // }
    const inMsg = () => {
      setMsg("어서오세요");
    };
    const outMsg = () => {
      setMsg("안녕히 가세요");
    };
  return (
    <>
      <Quiz02Com msg={msg} inMsg={inMsg} outMsg={outMsg} />
    </>
  );
}
export default Quiz02Con;

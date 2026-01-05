function Quiz02Com({ msg, inMsg, outMsg }) {
  // const {msg : mm,imMsg,outMsg} = props
  let message = "";
  // if(msg === ""){
  //   message = "아무 값 없음";
  // }esle{
  // message = msg}
  return (
    <>
      {/* {mm} */}
      삼항연산자 : {(msg === "") ? "없음": msg}<br></br>
      msg : {msg}
      {/* message : {message} */}
      <hr></hr>
      {/* <button onClick={props.inMsg}>in</button> */}
      <button onClick={inMsg}>in</button>
      <button onClick={outMsg}>out</button>
    </>
  );
}
export default Quiz02Com;
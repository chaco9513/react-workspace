function Quiz03Com({msg, inData, outData, inBtn, outBtn}) {
  // let msg2;
  // if(msg === ""){
  //   msg2 = <b>오픈 전</b>
  // }else{
  //   msg2 = <b>오픈 후</b>;
  // }
  return (
    <>
      {msg === "" ? "오픈전" : <b>
        {msg}<br></br>
        indata : {inData}
      <br></br>
      outdata : {outData}
      <br></br>
      in - out = {inData - outData}
      <br></br>
      </b>}
      <br></br>
      
      <button onClick={inBtn}>in</button>
      <button onClick={outBtn}>out</button>
    </>
  );
}
export default Quiz03Com;
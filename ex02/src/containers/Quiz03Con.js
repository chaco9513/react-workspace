import { useState } from "react";
import Quiz03Com from "../components/Quiz03Com";
function Quiz02Con() {
  const [store, setStore] = useState(
    {msg:"", inData:0, outData:0}
  )
  const inBtn = () => {
    // store.msg ="값처리"
    setStore({
      msg: "어서오세요",
      inData: store.inData + 1,
      outData: store.outData,
    });
  }
  const outBtn = () => {
    if(store.inData - store.outData === 0){
      alert("나갈손님이없음")
    }else{

      setStore({...store, msg: "안녕히가세요" , outData : store.outData + 1});
    }
  }
  return (
    <>
      <Quiz03Com
        msg={store.msg}
        inData={store.inData}
        outData={store.outData}
        inBtn={inBtn}
        outBtn={outBtn}
      />
    </>
  );
}
export default Quiz02Con;

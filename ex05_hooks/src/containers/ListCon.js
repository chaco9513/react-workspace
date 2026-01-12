import { useEffect, useReducer, useState } from "react";
import ListCom from "../components/ListCom";
import { getList } from "../service/member.js";
import { reducer, initalData, initalState } from "../moduls/member_red.js";

function ListCon (){
  /*
    try{  
      const data =JSON.parse('{"test"}')
      console.log("data :", data);
    }catch(err){
      console.log("문제 발생")
    }
    console.log("다음 문장 실행")
   */
  // const result = num / 0;
  // console.log("result : ",result)
  // const [user,setUser] = useState(null);
  const [state, dispatch] = useReducer(reducer, initalState);
  useEffect( () => {
    try{
      dispatch({type:"LOADING"})
      setTimeout(()=>{
        // console.log("2초후 실행")
        const data = getList();
        // setUser(data);
        dispatch({type:"LIST", data})
        dispatch({type:"FINISHED"})
      }, 2000)
      // throw new Error("에러 발생")
    }catch(e){
      dispatch({type: "ERROR", msg: e.toString()})
    }
    },[])
  console.log(state)
    return (
      <>
        <ListCom error={state.error} data={state.data} loading={state.loadding} />
      </>
    );
}
export default ListCon;
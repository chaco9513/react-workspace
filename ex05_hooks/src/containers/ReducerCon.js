import { useReducer, useState } from "react";
import ReducerCom from "../components/ReducerCom";

const reducer = (state, action) => {
  console.log("setNum state : ", state);
  console.log("setNum action : ", action);
  console.log("setNum action.type : ", action.type);
  switch(action.type){
    case "up" : return {...state, value : state.value + 10};
    case "down" : return { ...state, value : state.value - 10 };
    default : return state;
  }
  // return state+1;
}
const initalState = {value : 0, name : "홍길동"}
function ReducerCon (){
  // const [numn, setNum] = useState(0);
  const [state, dispatch] = useReducer(reducer,initalState);
  const onClick = () => {dispatch({type:"up"});}
  const onDown = () => {dispatch({type:"down"});}
    return (
      <>
        <ReducerCom state={state} onClick={onClick} onDown={onDown} />
      </>
    );
}
export default ReducerCon;
import { useRef, useState } from "react";
import Ref04Com from "../components/Ref04Com";

const initInput = {username : "", password : "", addr:"",age:""}
const Ref04Con = () => {
  const [input, setInput] = useState(initInput);

  const inputId = useRef();
  const inputPwd = useRef();

  const inputArr = useRef([]);

  const onChange = (e) => {
    setInput({...input, [e.target.name]:e.target.value})
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputArr.current[0])
    console.log(inputArr.current[1])
    for(let i=0; i<inputArr.current.length ; i++){
      if(inputArr.current[i].value === ""){
        alert(inputArr.current[i].name + "값은 필수");
        inputArr.current[i].focus();
        return;
      }
    }
    /*
    console.log(inputId)
    console.log(inputId.current);
    console.log(input.username);
    if (inputId.current.value == "") {
      alert("필수항목");
      inputId.current.focus();
    }else if(input.password === ""){
      alert("pwd 필수");
      inputPwd.current.focus();
    }
      */
  }
    return (
      <>
        <Ref04Com
          input={input}
          onChange={onChange}
          onSubmit={onSubmit}
          inputId={inputId}
          inputPwd={inputPwd}
          inputArr={inputArr}
        />
      </>
    );
}
export default Ref04Con;
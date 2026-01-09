import { useState } from "react"
import Input01Com from "../components/Imput01Com"

const Input01Con = () => {
    const [input, setInput] = useState(
        {username:"test",addr:""}
    )

    const onChange = (e) => {
        // console.log(e.target.value)
        // setInput({ username: e.target.value, addr: "" });
        setInput({...input, [e.target.name]:e.target.value });

    }
    const onSubmit01 = (e) => {
        e.preventDefault();
        // alert("실행?")
        console.log("사용자 입력값")
        console.log(input)
    }
    return (
      <>
        <Input01Com onChange2={onChange} onSubmit01={onSubmit01} input={input}/>
      </>
    );
}
export default Input01Con;
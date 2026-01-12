import { useRef, useState } from "react";
import MRegCom from "../../components/member/MRegCom";
import {register} from "../../service/member/member";
import { useNavigate } from "react-router-dom";
const registerInput = {
    id:"",pwd:"",pwdChk:"",name:"",addr:""
}

function MRegCon() {
    const [reg, setReg] = useState(registerInput);
    const navigate = useNavigate();
    const inputCheck = useRef([])

    const onChange = (e) => {
        setReg({...reg, [e.target.name] : e.target.value});
    }

    const onSubmit = (e) => {
      e.preventDefault();
        for(let input of inputCheck.current){
            if(input.value === ""){
                alert(input.name+"필수!")
                input.focus()
                return;
            }
        }
        if (inputCheck.current[1].value === inputCheck.current[2].value) {
          alert("일치");
          const saveData = { ...reg };
          delete saveData.pwdChk;
          console.log(saveData);

          register(saveData);
          navigate("/member/list");
        } else {
          alert("Not일치");
          setReg({ ...reg, pwd:"", pwdChk:"" });
          inputCheck.current[1].focus();
        }
        /*
        inputCheck.current.forEach((v,i) => {
            // console.log(v,":",i)
            if(v.value === ""){
                alert(v.name+" 필수");
            }
        })
        */

      /*
        const saveData = {...reg}
        delete saveData.pwdChk
        console.log(saveData)

        register(saveData);
        navigate("/member/list")
        */
    };
  return (
    <>
      <MRegCom reg={reg} onChange={onChange} onSubmit={onSubmit} inputCheck={inputCheck} />
    </>
  );
}
export default MRegCon;

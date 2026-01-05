import Ex01Com from "../components/Ex01Com";
import { useState } from "react";
function Ex01Con(){
    // let num = 100;
    
    const [num, setting] = useState(100);
    const setNum = () => {
      // num += 1;
      console.log(num);
      setting(num + 1);
    };
    return (<>
        
        <Ex01Com num={num} setNum={setNum}/>
    </>)
}
export default Ex01Con;
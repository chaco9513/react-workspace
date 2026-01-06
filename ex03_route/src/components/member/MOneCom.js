import { useSearchParams } from "react-router-dom";

function MOneCom({user}) {
    /*
    const member= [
        {id:1,name:"홍길동"},
        {id:2,name:"고길동"},
        {id:3,name:"김개똥"}
    ]
    const [params] = useSearchParams();
    console.log("params : ", params.get("id"));
    let result = member.filter(mem => mem.id == params.get("id"));
    result = result[0]
    console.log(result)
    */
    return (<>
        아이디 : {user.id}<br></br>
        이름 : {user.name}<br></br>
    </>);
}
export default MOneCom;

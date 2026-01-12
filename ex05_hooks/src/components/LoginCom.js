function LoginCom ({onChange, state}){
  console.log("com state : ", state )
    return (
      <>
        <input type="text" name="id" value={state.login.id} onChange={onChange}></input><br></br>
        <input type="text" name="pwd" value={state.login.pwd} onChange={onChange}></input><br></br>
      </>
    );
}
export default LoginCom;
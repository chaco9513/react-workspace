function LoginCom({ onChange, username, pwd, onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={username} name="id" onChange={onChange} />
        <br></br>
        <input type="text" value={pwd} name="pwd" onChange={onChange} />
        <br></br>
        <button>로그인</button>
      </form>
    </>
  );
}
export default LoginCom;
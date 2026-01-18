function LoginCom({ onChange, username, pwd, onSubmit, result, loading, error }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={username} name="id" onChange={onChange} />
        <br></br>
        <input type="text" value={pwd} name="pwd" onChange={onChange} />
        <br></br>
        <button disabled={loading}>로그인</button>
        {loading && <p>로그인 중</p>}
        {error && <p>에러 발생 : {error}</p>}
        {result === 1 && <p>아이디 또는 비번 불일치</p>}
      </form>
    </>
  );
}
export default LoginCom;
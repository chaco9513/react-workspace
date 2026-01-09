const Input01Com = ({ onChange2, onSubmit01, input }) => {
  return (
    <>
      <form onSubmit={onSubmit01} action="https://www.naver.com">
        <input type="text" name="username" onChange={onChange2} value={input.username}></input>
        <br></br>
        <input type="text" name="addr" onChange={onChange2} value={input.addr}></input>
        <br></br>
        <input type="submit" value="input"></input>
        <input type="button" value="input"></input>
        <button>btn</button>
      </form>
    </>
  );
};
export default Input01Com;
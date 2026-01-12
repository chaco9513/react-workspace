function RegCom ({onSubmit, id, pwd, name, addr, onChange}){
    return (
      <>
        <form onSubmit={onSubmit}>
          <input type="text" name="id" value={id} onChange={onChange}></input><br></br>
          <input type="text" name="pwd" value={pwd} onChange={onChange}></input><br></br>
          <input type="text" name="name" value={name} onChange={onChange}></input><br></br>
          <input type="text" name="addr" value={addr} onChange={onChange}></input><br></br>
          <button>회원가입</button>
        </form>
      </>
    );
}
export default RegCom;
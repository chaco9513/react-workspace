function MRegCom({reg, onChange , onSubmit, inputCheck}) {
  return (<>
    <form onSubmit={onSubmit}>
        <input ref={e=>inputCheck.current[0] =e} type="text" name="id" value={reg.id} onChange={onChange} placeholder="input id"></input><br></br>
        <input ref={e=>inputCheck.current[1] =e} type="text" name="pwd" value={reg.pwd} onChange={onChange} placeholder="input pwd"></input><br></br>
        <input ref={e=>inputCheck.current[2] =e} type="text" name="pwdChk" value={reg.pwdChk} onChange={onChange} placeholder="input pwdChk"></input><br></br>
        <input ref={e=>inputCheck.current[3] =e} type="text" name="name" value={reg.name} onChange={onChange} placeholder="input name"></input><br></br>
        <input ref={e=>inputCheck.current[4] =e} type="text" name="addr" value={reg.addr} onChange={onChange} placeholder="input addr"></input><br></br>
        <button>회원가입</button>
    </form>
  </>);
}
export default MRegCom;

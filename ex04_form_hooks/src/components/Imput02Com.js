const Input02Com = ({ onChange, name, addr, age, data }) => {
  return (
    <>
      <input type="text" name="name01" value={data.name01} onChange={onChange}></input>
      <input type="text" name="addr01" value={data.addr01} onChange={onChange}></input>
      <input type="text" name="age01" value={data.age01} onChange={onChange}></input>
      <hr></hr>
      <input type="text" name="name" value={name} onChange={onChange}></input>
      <input type="text" name="addr" value={addr} onChange={onChange}></input>
      <input type="text" name="age" value={age} onChange={onChange}></input>

      <hr></hr>
      <hr></hr>
    </>
  );
};
export default Input02Com;
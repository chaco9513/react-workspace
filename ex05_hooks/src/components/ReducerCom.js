function ReducerCom({ state, onClick, onDown }) {
  console.log(state);
  return (
    <>
      value : {state.value}
      <br></br>
      name : {state.name}
      <br></br>
      <button onClick={onClick}>클릭</button>
      <button onClick={onDown}>Down</button>
    </>
  );
}
export default ReducerCom;
function Quiz01Com({ num, plusNum, subNum }) {
  return (
    <>
      {num}
      <hr></hr>
      <button onClick={plusNum}>+</button>
      <button onClick={subNum}>-</button>
    </>
  );
}
export default Quiz01Com;
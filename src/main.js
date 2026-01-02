function Main({tel,nick, myClick}) {
    const test = () => {alert("test실행")}
  return (
    <>
      <p>main 영역</p>
      <h3>tel : {tel}</h3>
      <h3>nick : {nick}</h3>
      <button onClick={myClick}>클릭</button>
      <button onClick={test}>클릭2</button>
    </>
  );
}
export default Main;

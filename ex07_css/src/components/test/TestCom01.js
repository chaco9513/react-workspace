import "../../styles/test.css"

const Test01 = () => {
    const style = {color: "blue", fontSize : "30px"}
    return (
      <>
        <div style={style}>Test01</div>
        <div style={{color: "red", fontSize : "10px"}}>Test02</div>
        <div id="test_id" className="test">test01</div>
      </>
    );
}
export default Test01;
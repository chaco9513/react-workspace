import logo from './logo.svg';
import './App.css';
import Test3,{Test4} from './aaa'
import Header from './header';
import Nav from './nav';
import Main from './main';
import Child from './Child';

function App() {
  const num = 1000;
  console.log("return값이 화면에 표현되는 값");
  const click = () => {
    alert('click event')
  }
  const str1 = "내용1";
  const str2 = "내용2";
  return (
    <>
      <Child n="n전달">{"내용전달"}{str1}{str2}</Child><hr></hr>
      num : {num}
      <Header test="연습중" number={num} />
      <Nav name="홍길동" addr="산골짜기" />
      <Main tel="전화번호" nick="도적" myClick={click} />
    </>
  );
}

export default App;

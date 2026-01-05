import logo from "./logo.svg";
import "./App.css";
import StateTest01 from "./StateTest01";
import Ex01Con from "./containers/Ex01Con";
import Quiz01Con from "./containers/Quiz01Con";
import Quiz02Con from "./containers/Quiz02Con";

function App() {
  return (
    <>
      <Quiz02Con />
      <hr></hr>
      <Quiz01Con />
      <hr></hr>
      <Ex01Con />
      <hr></hr>
      <StateTest01 />
    </>
  );
}

export default App;

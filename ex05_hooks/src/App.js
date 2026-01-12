import logo from './logo.svg';
import './App.css';
import ReducerCon from './containers/ReducerCon';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage'
import LoginPage from "./pages/LoginPage";
import RegPage from "./pages/RegPage";
import ListPage from "./pages/ListPage";

function App() {
  return (<>
  <Routes>
    <Route path="/" element={<IndexPage />}></Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/register" element={<RegPage />}></Route>
    <Route path="/list" element={<ListPage />}></Route>
  </Routes>
    {/* <ReducerCon /> */}
  </>);
}

export default App;

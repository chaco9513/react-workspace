import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import MListPage from './pages/member/MListPage';
import MOnePage from './pages/member/MOnePage';
import MUpdatePage from './pages/member/MUpdatePage';
import MDeletePage from "./pages/member/MDeletePage";
import HeaderCom from './components/common/HeaderCom';
import NotFound from './components/common/NotFound';
import MDeleteCon from './containers/member/MDeleteCon';

function App() {
  return (
    <>
      <Routes>
        <Route element={<HeaderCom />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/member">
            <Route path="list" element={<MListPage />} />
            <Route path="one" element={<MOnePage />} />
            <Route path="update/:username" element={<MUpdatePage />} />
            <Route path="delete/:username" element={<MDeletePage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

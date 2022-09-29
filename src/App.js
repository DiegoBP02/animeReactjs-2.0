import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Top from "./components/Top";
import TopRanked from "./components/TopRanked";
import MostFavorited from "./components/MostFavorited";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="top" element={<Top />}></Route>
        <Route path="ranked" element={<TopRanked />}></Route>
        <Route path="favorited" element={<MostFavorited />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

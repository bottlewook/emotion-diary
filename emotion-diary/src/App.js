import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";

//COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton text={"왼쪽 버튼"} onClick={() => alert("왼쪽버튼")} />
          }
          rightChild={
            <MyButton
              text={"오른쪽 버튼"}
              onClick={() => alert("오른쪽버튼")}
            />
          }
        />
        <h2>App.js</h2>
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

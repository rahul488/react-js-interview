import React from "react";
import "./App.css";
import FileExplorer from "./Components/FileExplorer/FileExplorer";
import MultiSelect from "./Components/React-Select/MultiSelect";
import Stepper from "./Components/Stepper/Stepper";
import Selectablegrid from "./Components/SelectableGrid/SelectableGrid";
import Board from "./Components/TicTacToe/Board";
import ProductBag from "./Components/Basic/ProductBag";
import Post from "./Components/Blog-Post/Post";
import Product from "./Components/Blog-Post/Prodcut";

function App() {
  return (
    <div>
      <div className="app_title">
        <h3>React Interview Preparations</h3>
      </div>
      <div className="apps">
        {/* <FileExplorer /> */}
        {/* <MultiSelect /> */}
        {/* <Stepper /> */}
        {/* <Selectablegrid rows={10} cols={10} /> */}
        {/* <Board /> */}
        {/* <ProductBag /> */}
        {/* <Post /> */}
        <Product />
      </div>
    </div>
  );
}

export default App;

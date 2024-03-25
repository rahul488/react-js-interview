import React from "react";
import "./App.css";
import FileExplorer from "./Components/FileExplorer/FileExplorer";
import { files } from "./constants/constant";
import MultiSelect from "./Components/React-Select/MultiSelect";
import Stepper from "./Components/Stepper/Stepper";
import Selectablegrid from "./Components/SelectableGrid/SelectableGrid";
import Board from "./Components/TicTacToe/Board";

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
        <Board />
      </div>
    </div>
  );
}

export default App;

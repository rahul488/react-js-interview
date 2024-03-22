import React from "react";
import "./App.css";
import FileExplorer from "./Components/FileExplorer/FileExplorer";
import { files } from "./constants/file";

function App() {
  return (
    <div>
      <div className="app_title">
        <h3>React Interview Preparations</h3>
      </div>
      <div className="apps">
        <FileExplorer />
      </div>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import "./FileExplorer.css";
import Folders from "./Folders";
import { files } from "../../constants/file";

function FileExplorer() {
  return (
    <div className="file-container">
      <div className="file-container-inner">
        <Folders explorer={files} />
      </div>
    </div>
  );
}

export default FileExplorer;

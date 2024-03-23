import React, { useState } from "react";
import "./FileExplorer.css";
import Folders from "./Folders";
import { files } from "../../constants/constant";
import useInsert from "../../hooks/useInsert";

function FileExplorer() {
  const [nodes,setNodes] = useState(files);
  const { insertNode } = useInsert();
  const handleNode=(location,strtIndex,node,currNode)=> {
    const updatedNodes = insertNode(location,strtIndex,node,currNode);
    setNodes(updatedNodes);
  }
  return (
    <div className="file-container">
      <div className="file-container-inner">
        <Folders nodes={nodes} currentNode={nodes} handleNode={handleNode} />
      </div>
    </div>
  );
}

export default FileExplorer;

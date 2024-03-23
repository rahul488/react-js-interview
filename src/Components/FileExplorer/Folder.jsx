import { useState } from "react";
import Folders from "./Folders";

const Folder = ({ folder, nodes, handleNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const handleExpand = (e) => {
    e.stopPropagation();
    setExpand(!expand);
  };
  const handleRightClick = (event, folder) => {
    event.preventDefault();
    event.stopPropagation();
    if (folder.isFolder) {
      setShowInput(true);
    }
  };
  const addFolder = (e) => {
    e.stopPropagation();
    if (e.keyCode === 13 && e.target.value) {
      const node = {
        name: e.target.value,
        //make create file type only
        isFolder: false,
        location: folder.location + folder.children.length,
        children: [],
      };
      setShowInput(false);
      handleNode(folder.location, 0, nodes, node);
    }
  };

  return (
    <li
      className={`folder ${folder.level == 1 ? "bottom-border" : ""}`}
      onClick={(e) => handleExpand(e)}
      onContextMenu={(e) => handleRightClick(e, folder)}
    >
      {folder.isFolder ? `📁${folder.name}` : `🗒️${folder.name}`}
      {showInput ? (
        <input
          type="text"
          className="file-input"
          placeholder="Create a new file"
          onKeyDown={addFolder}
          onBlur={() => setShowInput(false)}
        />
      ) : null}
      <ul>
        {folder?.children?.length && expand ? (
          <li>
            <Folders
              nodes={nodes}
              currentNode={folder.children}
              handleNode={handleNode}
            />
          </li>
        ) : (
          ""
        )}
      </ul>
    </li>
  );
};
export default Folder;

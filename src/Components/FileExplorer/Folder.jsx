import { useState } from "react";
import Folders from "./Folders";
import { files } from "../../constants/file";

const Folder = ({ folder }) => {
  const [expand, setExpand] = useState(false);
  const [isCreate, setCreate] = useState(false);
  const [createdFileName, setCreatedFileName] = useState("");
  const handleExpand = (e) => {
    e.stopPropagation();
    setExpand(!expand);
  };
  const handleRightClick = (event, folder) => {
    event.preventDefault();
    event.stopPropagation();
    if (folder.isFolder) {
      setCreate(true);
    }
  };
  const handleFileNameChange = (e) => {
    setCreatedFileName(e.target.value);
  };
  const handleinputClick = (event) => {
    event.stopPropagation();
  };

  const closeFileCreation = (event) => {
    event.stopPropagation();
    setCreate(false);
    setCreatedFileName("");
  };
  const handleKeyPress = (event, folder) => {
    if (event.key === "Enter") {
      const createdFile = {
        name: createdFileName,
        isFolder: false,
        location: folder.location + folder.children.length,
        children: [],
      };
      setObjectInExactLocation(
        folder.location,
        0,
        files,
        createdFile
      );
      closeFileCreation(event);
    }
  };

  const setObjectInExactLocation = (id, strt, parentObj, createdFile) => {
    let currObj = parentObj;
    if (strt >= id.length) {
      currObj.push(createdFile);
      return;
    } else {
      currObj = parentObj[id.charAt(strt)].children;
      setObjectInExactLocation(id, strt + 1, currObj, createdFile);
    }
    return currObj;
  };

  return (
    <li
      className={`folder ${folder.level == 1 ? "bottom-border" : ""}`}
      onClick={(e) => handleExpand(e)}
      onContextMenu={(e) => handleRightClick(e, folder)}
    >
      {folder.isFolder ? `📁${folder.name}` : `🗒️${folder.name}`}
      {isCreate ? (
        <div className="file-create-container">
          <input
            type="text"
            className="file-input"
            onClick={(e) => handleinputClick(e)}
            onChange={handleFileNameChange}
            placeholder="Create a new file"
            value={createdFileName}
            onKeyPress={(e) => handleKeyPress(e, folder)}
          />
          <button
            type="button"
            className="close-button"
            onClick={closeFileCreation}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      ) : null}
      <ul>
        {folder?.children?.length && expand ? (
          <li>
            <Folders explorer={folder.children} />
          </li>
        ) : (
          ""
        )}
      </ul>
    </li>
  );
};
export default Folder;

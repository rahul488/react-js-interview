import { useState } from "react";
import Folder from "./Folder";

const Folders = ({ explorer }) => {
  return (
    <ul className="folders">
      {explorer.map((folder, index) => (
          <Folder folder={folder} key={index}/>
      ))}
    </ul>
  );
};
export default Folders;

import Folder from "./Folder";

const Folders = ({ nodes=[],currentNode=[], handleNode }) => {
  return (
    <ul className="folders">
      {currentNode.map((node) => (
        <Folder
          folder={node}
          key={node.location}
          nodes={nodes}
          handleNode={handleNode}
        />
      ))}
    </ul>
  );
};
export default Folders;

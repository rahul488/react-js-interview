import { useState } from "react";
import "./SelectableGrid.css";

const Selectablegrid = ({ rows, cols }) => {
  const [isSelected, setSelected] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const handleMouseUp = () => {
    setSelected(false);
  };
  const handleMouseDown = (box) => {
    setSelectedBoxes([box]);
    setSelected(true);
  };
  const handleMouseEnter = (box) => {
    if (isSelected) {
      const strtBox = selectedBoxes[0];
      const endBox = box;
      const strtRow = Math.floor((strtBox - 1) / cols);
      const strtCol = (strtBox - 1) % cols;
      const endRow = Math.floor((endBox - 1) / cols);
      const endCol = (endBox - 1) % cols;
      const minRow = Math.min(strtRow, endRow);
      const maxRow = Math.max(strtRow, endRow);
      const minCol = Math.min(strtCol, endCol);
      const maxCol = Math.max(strtCol, endCol);

      const selected = [];
      for (let row = minRow; row <= maxRow; row++) {
        for (let col = minCol; col <= maxCol; col++) {
          selected.push(row * cols + col + 1);
        }
      }
      setSelectedBoxes(selected);
    }
  };
  return (
    <div className="container" onMouseUp={handleMouseUp}>
      {[...Array(rows * cols).keys()].map((_, index) => (
        <div
          className={`box ${
            selectedBoxes.includes(index + 1) ? "selected" : ""
          }`}
          key={index}
          onMouseDown={() => handleMouseDown(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};
export default Selectablegrid;

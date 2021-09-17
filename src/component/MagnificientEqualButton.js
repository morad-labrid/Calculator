import React from "react";

const MagnificientEqualButton = ({ nadir, morad }) => {
  return (
    <div className="equalGroupe">
      <button onClick={morad} id="0">
        0
      </button>
      {/* <button>.</button> */}
      <button onClick={nadir}>=</button>
    </div>
  );
};

export default MagnificientEqualButton;

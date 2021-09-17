import React from "react";

const GreatOperationButton = ({ morad }) => {
  return (
    <div className="OperationBtns">
      <button onClick={morad} id="+">
        +
      </button>
      <button onClick={morad} id="-">
        -
      </button>
      <button onClick={morad} id="*">
        *
      </button>
      <button onClick={morad} id="/">
        /
      </button>
    </div>
  );
};

export default GreatOperationButton;

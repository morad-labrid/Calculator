import React from "react";

const GreatOperationButton = ({ morad }) => {
  return (
    <div>
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

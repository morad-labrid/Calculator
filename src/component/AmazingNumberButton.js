import React from "react";
import MagnificientEqualButton from "./MagnificientEqualButton";

const AmazingNumberButton = ({ morad, nadir }) => {
  const buttons = [];
  for (let i = 9; i > 0; i--) {
    buttons.push(
      <button onClick={morad} id={i}>
        {i}
      </button>
    );
  }
  return (
    <div className="numbers">
      {buttons}
      <MagnificientEqualButton morad={morad} nadir={nadir} />
    </div>
  );
};

export default AmazingNumberButton;

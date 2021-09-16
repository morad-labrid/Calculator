import React from "react";

const AmazingNumberButton = ({ morad }) => {
  return (
    <div>
      <button onClick={morad} id="0">
        0
      </button>
      <button onClick={morad} id="1">
        1
      </button>
      <button onClick={morad} id="2">
        2
      </button>
      <button onClick={morad} id="3">
        3
      </button>
      <button onClick={morad} id="4">
        4
      </button>
      <button onClick={morad} id="5">
        5
      </button>
      <button onClick={morad} id="6">
        6
      </button>
      <button onClick={morad} id="7">
        7
      </button>
      <button onClick={morad} id="8">
        8
      </button>
      <button onClick={morad} id="9">
        9
      </button>
    </div>
  );
};

export default AmazingNumberButton;

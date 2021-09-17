import React, { useState } from "react";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const calculette = function (e) {
    setValue(value + e.target.id);
    console.log(value);
  };

  const resultat = function () {
    setResult(eval(value));
  };

  return (
    <div>
      <BeautifullScreen samy={value} karim={result} />
      <div className="allBtns">
        <AmazingNumberButton morad={calculette} nadir={resultat} />
        <GreatOperationButton morad={calculette} />
      </div>
    </div>
  );
};

export default Calculator;

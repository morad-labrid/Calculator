import React, { useState } from "react";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import IsOverNineThousend from "./IsOverNineThousend";
import MagnificientEqualButton from "./MagnificientEqualButton";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [message9000, setMessage9000] = useState("");

  const calculette = function (e) {
    setValue(value + e.target.id);
    console.log(value);
  };

  const resultat = function () {
    setResult(eval(value));
  };

  return (
    <div>
      <IsOverNineThousend karim={result} />
      <BeautifullScreen samy={value} karim={result} />
      <AmazingNumberButton morad={calculette} />
      <GreatOperationButton morad={calculette} />
      <MagnificientEqualButton nadir={resultat} />
    </div>
  );
};

export default Calculator;

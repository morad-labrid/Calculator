import React from "react";
import IsOverNineThousend from "./IsOverNineThousend";

const BeautifullScreen = ({ samy, karim }) => {
  return (
    <div className="screen">
      <p>{samy}</p>
      <p>{karim}</p>
      <IsOverNineThousend karim={karim} />
    </div>
  );
};

export default BeautifullScreen;

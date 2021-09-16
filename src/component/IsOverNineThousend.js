import React from "react";

const IsOverNineThousend = ({ karim }) => {
  if (karim > 9000) {
    return (
      <div>
        <p>its over 9000</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default IsOverNineThousend;

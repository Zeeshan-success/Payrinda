import React from "react";
import Fristbox from "./Fristbox";
import Secondbox from "./Secondbox";
import Thirdbos from "./Thirdbos";
import Forthbox from "./Forthbox";

const Oursolution = () => {
  return (
    <>
      <div className="mx-5 my-20">
        <Fristbox />
        <Secondbox />
        <Thirdbos />
      </div>
      <Forthbox />
    </>
  );
};

export default Oursolution;

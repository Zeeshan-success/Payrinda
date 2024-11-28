import React from "react";
import Fristbox from "./Fristbox";
import Secondbox from "./Secondbox";
import Thirdbos from "./Thirdbos";

const Oursolution = () => {
  return (
    <>
      <div className="mx-5 my-20">
        <Fristbox />
        <Secondbox />
        <Thirdbos />
      </div>
      <div className="w-full bg-[#D9DFED] py-5 text-center my-10">
        <p>
          We love to keep building new innovative products, more solutions
          coming your way soon….
        </p>
      </div>
      <div className="mx-5    py-5  my-10">
        <div className="w-full   md:flex">
          <div className="md:w-1/2   text-3xl font-bold sm:flex">
            <p className=" ">
              Benifits of <span className="text-[#082E7E]">Payrindas </span>
              Digital <span className="text-[#082E7E]">Tipping</span> Solution
            </p>
          </div>
          <div className="md:w-1/2 ">
            <p>
              With their usual salaries via your payroll mechanism. Whichever
              approach you take, the digital tipping system streamlines the
              disbursement procedure and allows you to keep track of your staff
              tips earnings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oursolution;

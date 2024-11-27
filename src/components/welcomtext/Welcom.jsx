import Image from "next/image";
import React from "react";
import Img from "@/assets/2.png";

const Welcom = () => {
  return (
    <>
      <div>
        <p className="text-2xl text-center font-bold text-[#012B84] my-10">
          Welcome to payrinda!
        </p>
      </div>

      <div className="border border-gray-400 bg-gradient-to-t from-[#E7EBF3] mb-5 mx-5 rounded-3xl">
        <div className="flex justify-center !-mt-[23px]">
          <Image src={Img} alt="image" width={50} height={50} />
        </div>
        <div className="w-11/12 mx-auto text-center">
          <p className="text-xl md:my-5">
            Where innovation meets convenience in the financial services realm.
            As a burgeoning technology startup, our mission extends beyond mere
            transaction processing. Were here to redefine the payment landscape,
            fostering unparalleled ease and reliability for merchants,
            consumers, and businesses alike.
          </p>
        </div>
      </div>
    </>
  );
};

export default Welcom;

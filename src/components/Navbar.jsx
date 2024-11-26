"use client";

import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import ShowMenu from "./ShowMenu";
import { useRouter } from "next/navigation";
import Navbtn from "./Navbtn";
import Image from "next/image";

const Navbar = () => {
  let [show, Setshow] = useState(true);
  const route = useRouter();

  const showmenu = () => {
    Setshow(!show);
  };
  return (
    <>
      <div className="flex justify-between mt-10 md:m-6 border rounded-xl h-16 py-2 shadow-lg  ">
        <div className="w-[100] md:w-[240] h-full mx-2  ">
          <Image
            src="https://www.payrinda.io/assets/home/images/logo.png"
            alt="Company Logo"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="   w-full   md:inline-flex hidden">
          <ul className="w-full flex  justify-center space-x-10 lg:space-x-16 items-center">
            <li>
              <button className="font-semibold hover:text-[#012B84]">
                Home
              </button>
            </li>
            <li>
              <button className="font-semibold hover:text-[#012B84]">
                Our Solutions
              </button>
            </li>
            <li>
              <button className="font-semibold hover:text-[#012B84]">
                How it works
              </button>
            </li>
            <li>
              <button className="font-semibold hover:text-[#012B84]">
                About Us
              </button>
            </li>
          </ul>
        </div>

        <div className="w-1/6 justify-self-end md:inline-flex hidden ">
          <Navbtn />
        </div>

        <div className="md:hidden mx-3 " onClick={showmenu}>
          <button className="bg-[#012B84] w-10 h-10 flex justify-center items-center text-white rounded-md">
            {show ? <DehazeIcon /> : <CloseIcon />}
          </button>
        </div>
      </div>

      {show ? null : <ShowMenu />}
    </>
  );
};

export default Navbar;

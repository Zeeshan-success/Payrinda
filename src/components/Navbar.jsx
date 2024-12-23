"use client";

import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import ShowMenu from "./ShowMenu";
import Navbtn from "./Navbtn";
import Image from "next/image";
import logo from "@/assets/payrinda logo.png";

const Navbar = () => {
  let [show, Setshow] = useState(true);

  const showmenu = () => {
    Setshow(!show);
  };

  const scrollonclick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className=" flex justify-between mt-10 md:m-6 border rounded-xl h-16 py-2 shadow-lg  ">
        <div className="w-[150] md:w-[240]  md:mt-2 h-full mx-2   ">
          <Image
            src={logo}
            alt="Company Logo"
            width={150}
            height={200}
            priority
          />
        </div>
        <div className="   w-full   md:inline-flex hidden">
          <ul className="w-full flex  justify-center space-x-10 lg:space-x-16 items-center">
            <li>
              <button
                onClick={() => {
                  scrollonclick("home");
                }}
                className="font-semibold hover:text-[#012B84]"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollonclick("our_solution");
                }}
                className="font-semibold hover:text-[#012B84]"
              >
                Our Solutions
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollonclick("how_it_work");
                }}
                className="font-semibold hover:text-[#012B84]"
              >
                How it works
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollonclick("about_us");
                }}
                className="font-semibold hover:text-[#012B84]"
              >
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

      {show ? null : (
        <ShowMenu showmenu={showmenu} scrollonclick={scrollonclick} />
      )}
    </>
  );
};

export default Navbar;

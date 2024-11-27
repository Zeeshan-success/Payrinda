"use client";

import React from "react";
import Img from "@/assets/7.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Joinpara = () => {
  useGSAP(() => {
    gsap.from("#joinpara", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#joinpara",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
  });
  return (
    <>
      <div
        id="joinpara"
        className="mx-5 flex justify-center rounded-3xl    text-white bg-[#082E7E] md:h-[350]"
      >
        <div className=" absolute w-full h-full ">
          <Image src={Img} alt="this is image" />
        </div>
        <div className=" space-y-5 my-auto py-5 ">
          <p className="md:text-[50px] font-extrabold text-center">
            Join the Payment Revolution
          </p>
          <p className="md:text-lg my-4 font-semibold text-center">
            Ready to elevate your payment experience?
          </p>
          <div className="flex justify-center">
            <button className="md:text-xl md:px-5 md:py-3 text-[#082E7E] text-center bg-white rounded-full">
              Get Start with Payrinda
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joinpara;

"use client";

import Image from "next/image";
import React from "react";
import Img from "@/assets/31.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Howworkpara = () => {
  useGSAP(() => {
    gsap.from("#howheadin", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#howheadin",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#howitworkimg", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#howitworkimg",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
  });
  return (
    <>
      <div className="mx-5">
        <p
          id="howheadin"
          className="text-5xl font-extrabold text-[#012B84] text-center"
        >
          How it Works
        </p>

        <div className="md:flex mt-20 space-y-5">
          <div className="md:w-1/3">
            <p className="text-4xl font-bold">Simplicity at its best</p>
            <p className="text-xl font-normal">
              Our solutions allows customers to conveniently pay digital tips at
              outlets where tips can’t be combined with the bill payment.
            </p>
          </div>
          <div id="howitworkimg" className="md:w-1/3">
            <Image src={Img} alt="this is image" />
          </div>
          <div className="md:w-1/3 self-end text-xl font-normal">
            <p>
              Rewarding exemplary service should be as smooth as the experiences
              they offer. With payrinda, it's just a scan away.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howworkpara;

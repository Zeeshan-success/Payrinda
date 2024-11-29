"use client";

import React, { useEffect } from "react";
import Img from "@/assets/7.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Joinpara = () => {
  useEffect(() => {
    gsap.from("#joinpara", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#joinpara",
        start: "top 90%",
        end: "top 70%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
      <div
        id="joinpara"
        className="mx-5 flex justify-center rounded-3xl text-white bg-[#082E7E] md:h-[350px] relative"
      >
        <div className="absolute w-full h-full">
          <Image
            src={Img}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        <div className="space-y-5 my-auto py-5 relative z-20">
          <p className="text-3xl md:text-[50px] font-extrabold text-center">
            Join the Payment Revolution
          </p>
          <p className="md:text-lg my-4 font-semibold text-center">
            Ready to elevate your payment experience?
          </p>
          <div className="flex justify-center">
            <button className="md:text-xl md:px-5 md:py-3 px-4 py-2 hover:bg-[#012B84] hover:text-white text-[#082E7E] bg-white border border-transparent hover:border-white rounded-full transition duration-300">
              Get Started with Payrinda
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joinpara;

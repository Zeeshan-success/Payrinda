"use client";
import React from "react";
import Image from "next/image";
import Img from "@/assets/12.png";
import Img2 from "@/assets/13.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Secondbox = () => {
  useGSAP(() => {
    gsap.from("#secondbox", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#secondbox",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
  });
  return (
    <>
      <div
        id="secondbox"
        className="border  border-gray-300 bg-gradient-to-t from-[#E7EBF3] mb-5 mx-5 rounded-3xl"
      >
        <div className="flex justify-start !-mt-[80px]">
          <Image src={Img} alt="image" width={150} height={150} />
        </div>
        <div className="w-11/12 mx-auto text-center">
          <p className="text-3xl font-semibold md:my-5">
            Our single easy-to-use platform, quickly creates the digital tipping
            flows that work best for service industry employees.
          </p>
          <p className="text-xl md:my-5">
            We offer a simple digital tipping solution that fits right into the
            evolving financial landscape. Compatible with every currency,
            payrinda eliminates the need for physical cash, and even mobile app
            downloads, ensuring that rewarding service excellence remains
            effortless for customers.
          </p>
        </div>
        <div className="flex justify-end !-mb-[80px]">
          <Image src={Img2} alt="image" width={150} height={150} />
        </div>
      </div>
    </>
  );
};

export default Secondbox;

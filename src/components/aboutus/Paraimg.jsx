"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Img from "@/assets/41.png";
import Img1 from "@/assets/42.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Paraimg = () => {
  useGSAP(() => {
    gsap.from("#about1", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#about1",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#about2", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#about2",

        start: "top 70%",

        end: "top 70%",
        scrub: 4,
      },
    });
  });
  return (
    <>
      <div className="mt-[300px] ">
        <p
          id="about1"
          className="text-5xl font-extrabold text-[#012B84] text-center"
        >
          About Us
        </p>

        <div id="about2" className="">
          <div className="sm:w-1/2 mx-auto  border-[#012B84] border-2 my-20  p-4 rounded-full">
            <Image src={Img} alt="This image" />
          </div>
          <div className="  w-14 ml-[5%] !-mt-[20%] sm:ml-[23%] sm:!-mt-[10%] ">
            <Image src={Img1} alt="This image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Paraimg;

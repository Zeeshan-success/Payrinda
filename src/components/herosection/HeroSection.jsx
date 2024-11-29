"use client";
import Image from "next/image";
import Img from "@/assets/1.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from("#text1", {
      y: 100,
      duration: 1.5,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.3,
    });
  });

  return (
    <>
      <div id="home" className="w-full flex flex-row justify-center mt-20  ">
        <div className=" w-full mx-1 md:mx-0 md:w-3/4 ">
          <p
            id="text1"
            className="w-full sm:text-5xl text-2xl  font-extrabold text-center "
          >
            Revolutionizing the Way You Experience
            <span className="text-[#012B84] flex justify-center sm:inline ">
              Payments
            </span>
          </p>

          <p
            id="text1"
            className="text-center my-5 md:my-5 text-lg font-semibold"
          >
            Bridging Possibilities, Simplifying Transactions
          </p>

          <div id="text1" className="flex justify-center mt-7 md:my-20  ">
            <Image src={Img} alt="hero Image" width={800} height={100} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

"use client";

import Image from "next/image";
import Img from "@/assets/3.png";
import Img2 from "@/assets/4.png";
import Img3 from "@/assets/5.png";
import Img4 from "@/assets/6.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Accountinfo = () => {
  useGSAP(() => {
    gsap.from("#accountinfo", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#accountinfo",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#accountinfo2", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#accountinfo2",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#accountinfo3", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#accountinfo3",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#accountinfo4", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#accountinfo4",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
  });

  return (
    <>
      <div className="mx-5 space-y-10 md:space-y-0 md:my-20 md:flex ">
        <div
          id="accountinfo"
          className="shadow-xl p-5 sm:flex justify-between w-full md:w-1/2"
        >
          <div className="w-1/2 rotate-180 sm:hidden flex justify-end">
            <Image src={Img} alt="this is image" height={200} width={220} />
          </div>
          <div className="sm:w-1/2">
            <p className="text-2xl font-bold my-5 text-[#012B84]">
              For Merchants:
            </p>
            <p>
              Wave goodbye to the cumbersome payment methods of the past!
              payrinda empowers merchants with swift, secure, and seamless
              transactions. Our cutting-edge platform not only accelerates
              checkout flows but also unveils insightful data analytics, helping
              you understand your customers like never before.
            </p>
          </div>
          <div className=" hidden  w-1/2 sm:flex justify-end">
            <Image src={Img} alt="this is image" height={200} width={220} />
          </div>
        </div>
        <div
          id="accountinfo2"
          className="shadow-2xl p-5  sm:flex justify-between md:w-1/2"
        >
          <div className="w-1/2 sm:hidden flex justify-end   rotate-180">
            <Image src={Img2} alt="this is image" height={200} width={220} />
          </div>
          <div className="  sm:w-1/2">
            <p className="text-2xl font-bold my-5 text-[#012B84]">
              For Consumers:
            </p>
            <p>
              Say hello to frictionless spending! No more tedious wait times, no
              more complex checkout processes. With payrinda, experience the
              freedom of instant, hassle-free payments. Whether online or
              offline, count on us to keep your financial data secure, giving
              you the peace of mind to enjoy what matters most - the things you
              love.
            </p>
          </div>
          <div className="w-1/2 hidden sm:flex justify-end">
            <Image src={Img2} alt="this is image" height={200} width={220} />
          </div>
        </div>
      </div>
      <div className="mx-5 space-y-10 md:space-y-0 md:my-20 md:flex ">
        <div
          id="accountinfo3"
          className="shadow-xl mt-5 sm:mt-0 p-5 s sm:flex justify-between md:w-1/2"
        >
          <div className="w-1/2 rotate-180 sm:hidden flex justify-end">
            <Image src={Img3} alt="this is image" height={200} width={220} />
          </div>
          <div className="sm:w-1/2">
            <p className="text-2xl font-bold my-5 text-[#012B84]">
              For Businesses:
            </p>
            <p>
              Transform the way you handle finances with payrinda’s innovative
              solutions. From streamlined invoicing to effortless payroll and
              beyond, we equip businesses with the tools to manage transactions
              efficiently. Dive into a world of possibilities with comprehensive
              payment solutions tailored to your business needs.
            </p>
          </div>
          <div className="w-1/2 hidden sm:flex justify-end">
            <Image src={Img3} alt="this is image" height={200} width={220} />
          </div>
        </div>
        <div
          id="accountinfo4"
          className="shadow-2xl p-5 sm:flex justify-between md:w-1/2"
        >
          <div className="w-1/2 rotate-180 sm:hidden flex justify-end">
            <Image src={Img4} alt="this is image" height={200} width={220} />
          </div>
          <div className="sm:w-1/2">
            <p className="text-2xl font-bold my-5 text-[#012B84]">
              Innovation at the Core:
            </p>
            <p>
              At payrinda, we believe in the power of technology to drive
              significant change. Our commitment to continuous innovation sees
              us at the forefront of the financial services industry, constantly
              exploring and developing new ways to make your payment experiences
              faster, easier, and safer.
            </p>
          </div>
          <div className="w-1/2 hidden sm:flex justify-end">
            <Image src={Img4} alt="this is image" height={200} width={220} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accountinfo;

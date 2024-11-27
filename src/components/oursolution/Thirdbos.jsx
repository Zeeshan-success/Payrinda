"use client";

import Image from "next/image";

import Img0 from "@/assets/21.png";
import Img1 from "@/assets/22.png";
import Img2 from "@/assets/23.png";
import Img3 from "@/assets/24.png";
import Img4 from "@/assets/25.png";
import Img5 from "@/assets/26.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Thirdbos = () => {
  useGSAP(() => {
    gsap.from("#first", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#first",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#second", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#second",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#third", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#third",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#forth", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#forth",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#fifth", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#fifth",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#sixth", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#sixth",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
  });
  return (
    <>
      <div className="flex">
        <div className="w-full mt-20 sm:mt-80">
          <div className="text-center  flex justify-center">
            <p className="md:w-1/4">
              Our solution doesnt just put money in service industry workers
              pockets; it fosters engagement, boosts morale, and elevates
              customer experiences.
            </p>
          </div>

          <div className="w-full space-x-5  md:flex justify-between  mt-10">
            <div
              id="first"
              className=" my-10 md:my-0 self-start lg:w-1/4 space-y-6 md:mt-[-120] px-10 py-20 rounded-t-full rounded-b-full  lg:h-[520] shadow-2xl "
            >
              <div className="flex justify-center">
                <Image
                  src={Img0}
                  alt="this is image"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-center text-3xl font-bold">
                Automatic Tip Distribution
              </p>
              <p className="text-center text-gray-500 text-md">
                Payrinda tipping solution distribute tip to the employee
                automatically with the ability to track transactions via
                dashboard.
              </p>
            </div>
            <div
              id="second"
              className=" my-10 md:my-0 lg:w-1/4 self-start space-y-6 px-10 py-20 rounded-t-full rounded-b-full  lg:h-[520] shadow-2xl "
            >
              <div className="flex justify-center">
                <Image
                  src={Img1}
                  alt="this is image"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-center text-3xl font-bold">
                Increased Payment Options
              </p>
              <p className="text-center text-gray-500 text-md">
                Customers can offer tips using their preferred payment, method
                whether that a debit card, Apple pay / Google pay or more
              </p>
            </div>
            <div
              id="third"
              className=" my-10 md:my-0 lg:w-1/4 self-start  space-y-6 md:mt-[-120] px-10 py-20 rounded-t-full rounded-b-full  lg:h-[520] shadow-2xl "
            >
              <div className="flex justify-center">
                <Image
                  src={Img2}
                  alt="this is image"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-center  text-3xl font-bold">
                No Mobile App Required
              </p>
              <p className="text-center text-gray-500 text-md">
                Customers don,t need to download yet another app in their phone.
                payrinda solution opens directly in their phone browser.
              </p>
            </div>
          </div>
          <div
            id="fouth"
            className="w-full space-x-5 md:flex justify-between mt-10"
          >
            <div className="my-10 md:my-0 self-start lg:w-1/4 space-y-6 md:mt-[-120] px-10 py-20 rounded-t-full rounded-b-full  lg:h-[520] shadow-2xl ">
              <div className="flex justify-center">
                <Image
                  src={Img3}
                  alt="this is image"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-center text-3xl font-bold">No Setup Cost</p>
              <p className="text-center text-gray-500 text-md">
                We do not charge any onboarding or participation fee to staff or
                their employers. We give employers to add, remove or edit staff
                members. thanks for your interset
              </p>
            </div>
            <div
              id="fifth"
              className="my-10 md:my-0 lg:w-1/4 self-start space-y-6 px-10 py-20 rounded-t-full rounded-b-full  lg:h-[520] shadow-2xl "
            >
              <div className="flex justify-center">
                <Image
                  src={Img4}
                  alt="this is image"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-center text-3xl font-bold">
                Profile Sharing Option
              </p>
              <p className="text-center text-gray-500 text-md">
                Ability for the staff to share their tipping profiles with
                customers via SMS, email or any other social media platform.
              </p>
            </div>
            <div
              id="sixth"
              className="my-10 md:my-0 lg:w-1/4 self-start space-y-6 md:mt-[-120] px-10 py-20 rounded-t-full rounded-b-full  lg:h-[520] shadow-2xl "
            >
              <div className="flex justify-center">
                <Image
                  src={Img5}
                  alt="this is image"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-center text-3xl font-bold">
                Increased Employee Moral
              </p>
              <p className="text-center text-gray-500 text-md">
                By simplifying the tipping process for customers, your staff can
                be confident in maximizing their chances of receiving tips,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirdbos;

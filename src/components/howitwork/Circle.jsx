"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Circle = () => {
  useGSAP(() => {
    gsap.from("#howfirst", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#howfirst",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#howsecond", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#howsecond",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#howthird", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#howthird",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
  });
  return (
    <>
      <div className="mx-5  lg:flex lg:justify-between">
        <div className="border  border-transparent w-full   md:flex justify-evenly">
          <div
            id="howfirst"
            className="border mx-auto my-7 rounded-t-full rounded-b-full bg-white max-w-96 p-4 text-center sm:h-[530px] lg:!-mb-[160px]"
          >
            <div className="border h-full space-y-5 px-5  border-[#90A0C6] rounded-t-full rounded-b-full flex flex-col justify-center py-10">
              <p
                style={{
                  background: "linear-gradient(to bottom, #ACBAD7, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-[70px] font-bold text-center  "
              >
                01
              </p>
              <p className="text-3xl font-bold">Scan and Open</p>
              <p className="text-xl">
                Spot a payrinda QR code at the establishment? Just scan it. Our
                user-friendly web interface will pop up right on your mobile
                device. No app installations. No hassles.
              </p>
            </div>
          </div>
          <div
            id="howsecond"
            className="border mx-auto my-7 rounded-t-full rounded-b-full bg-white max-w-96 p-4 text-center sm:h-[530px] lg:!-mb-[160px]"
          >
            <div className="border h-full space-y-5 px-5  border-[#90A0C6] rounded-t-full rounded-b-full flex flex-col justify-center py-10">
              <p
                style={{
                  background: "linear-gradient(to bottom, #ACBAD7, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-[70px] font-bold text-center  "
              >
                02
              </p>
              <p className="text-3xl font-bold">Scan and Open</p>
              <p className="text-xl">
                Spot a payrinda QR code at the establishment? Just scan it. Our
                user-friendly web interface will pop up right on your mobile
                device. No app installations. No hassles.
              </p>
            </div>
          </div>
          <div
            id="howthird"
            className="border hidden  lg:inline-block my-7 rounded-t-full rounded-b-full bg-white max-w-96 p-4 text-center sm:h-[530px] lg:!-mb-[160px]"
          >
            <div className="border h-full space-y-5 px-5 border-[#90A0C6] rounded-t-full rounded-b-full flex flex-col justify-center py-10">
              <p
                style={{
                  background: "linear-gradient(to bottom, #ACBAD7, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-[70px] font-bold text-center  "
              >
                03
              </p>
              <p className="text-3xl font-bold">Scan and Open</p>
              <p className="text-xl">
                Spot a payrinda QR code at the establishment? Just scan it. Our
                user-friendly web interface will pop up right on your mobile
                device. No app installations. No hassles.
              </p>
            </div>
          </div>
        </div>
        <div className="border flex justify-center  border-transparent">
          <div
            id="howthird"
            className="border my-7 inline-block lg:hidden  rounded-t-full rounded-b-full bg-white max-w-96 p-4 text-center sm:h-[530px] !-mb-[160px]"
          >
            <div className="border h-full space-y-5 px-5 border-[#90A0C6] rounded-t-full rounded-b-full flex flex-col justify-center py-10">
              <p
                style={{
                  background: "linear-gradient(to bottom, #ACBAD7, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-[70px] font-bold text-center  "
              >
                03
              </p>
              <p className="text-3xl font-bold">Scan and Open</p>
              <p className="text-xl">
                Spot a payrinda QR code at the establishment? Just scan it. Our
                user-friendly web interface will pop up right on your mobile
                device. No app installations. No hassles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Circle;

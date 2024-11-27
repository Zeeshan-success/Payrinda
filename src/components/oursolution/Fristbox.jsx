"use client";

import Img1 from "@/assets/8.png";
import Img2 from "@/assets/9.png";
import Img3 from "@/assets/10.png";
import Img4 from "@/assets/11.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Fristbox = () => {
  useGSAP(() => {
    gsap.from("#para0", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#para0",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#para1", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#para1",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
    gsap.from("#para2", {
      y: 100,
      opacity: 0,

      duration: 1,
      scrollTrigger: {
        trigger: "#para2",

        start: "top 90%",

        end: "top 90%",
        scrub: 4,
      },
    });
  });
  return (
    <>
      <div
        id="para0"
        className="text-3xl text-[#012B84] text-center font-extrabold "
      >
        Our Solutions
      </div>

      <div className="w-full md:flex space-y-10 my-20">
        <div id="para1" className="md:w-1/2">
          <p className="text-3xl text-[#012B84]  font-bold ">Digital Tipping</p>

          <p className="text-3xl   font-bold ">In A Cashless Era</p>
          <p>
            As our world rapidly transitions to cashless economies, the way we
            appreciate and reward services is also evolving. Digital tipping
            emerges as a revolutionary solution in this context, bridging the
            gap between traditional gratuity practices and modern payment
            systems. No longer do customers have to fumble for change or feel
            the constraint of not having physical cash to reward exemplary
            service. With a simple tap or scan, gratuities can be seamlessly
            transferred, ensuring that those in the service industry continue to
            receive their well-deserved tips. This shift not only offers
            convenience but also promotes a safer, more hygienic method of
            transaction in an increasingly digital age. Embracing digital
            tipping is more than just adopting a new payment method; its about
            progressing with the times and ensuring that appreciation doesnt get
            lost in the digital shuffle.
          </p>
          <p className="text-xl text-[#012B84]  font-bold ">Enter payrinda!</p>
        </div>
        <div id="para2" className="md:w-1/2">
          <div className="w-full flex">
            <div className="w-1/2 flex justify-center  ">
              <Image src={Img2} alt="this is image" width={150} height={150} />
            </div>
            <div className="w-1/2">
              <Image src={Img1} alt="this is image" />
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-1/2  ">
              <Image src={Img4} alt="this is image" />
            </div>
            <div className="w-1/2 flex justify-center">
              <Image src={Img3} alt="this is image" width={150} height={150} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fristbox;

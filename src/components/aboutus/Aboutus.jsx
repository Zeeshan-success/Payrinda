import React from "react";
import Paraimg from "./Paraimg";

const Aboutus = () => {
  return (
    <>
      <div id="about_us" className="mx-5">
        <Paraimg />

        <div className="space-y-10 text-xl mx-5 my-16 font-medium">
          <p>
            <span className="text-[#012B84]">Payrinda</span>
            is an early stage, fintech and social impact company based in Dubai,
            UAE. We strive to build products that we believe will make the world
            a better place.
          </p>
          <p>
            At the heart of <span className="text-[#012B84]">Payrinda</span> is
            a dedication to innovation and a commitment to enhancing financial
            inclusivity and social empowerment. Rooted in the vibrant energy of
            Dubai, our vision extends far beyond borders, aiming to make a
            positive difference on a global scale.
          </p>

          <p>
            We are a lean team of professionals with expertise in payments,
            finance, designers, UX/UI researchers, data analysts and developers.
            We are supported by a knowledgeable network of advisors and
            entrepreneurs in finance, fintech, legal, hospitality, marketing,
            sales, technology and human resources.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutus;

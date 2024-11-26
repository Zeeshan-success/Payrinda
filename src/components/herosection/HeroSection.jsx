import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-center mt-20 ">
        <div className="w-3/4 ">
          <p className="w-full sm:text-5xl text-2xl  font-extrabold text-center ">
            Revolutionizing the Way You Experience
            <span className="text-[#012B84] ">Payments</span>
          </p>

          <p className="text-center my-5 text-lg font-semibold">
            Bridging Possibilities, Simplifying Transactions
          </p>

          <div className="rounded"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

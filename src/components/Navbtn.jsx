"use client";

import { useRouter } from "next/navigation";

const Navbtn = () => {
  const route = useRouter();
  return (
    <>
      <button
        onClick={() => route.push("/contact-us")}
        className="font-black whitespace-nowrap border px-4 py-2  bg-[#012B84] text-white  border-[#012B84] rounded-full hover:bg-white hover:text-[#012B84] hover:duration-500"
      >
        Contact Us
      </button>
    </>
  );
};

export default Navbtn;

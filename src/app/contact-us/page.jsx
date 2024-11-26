"use client";

import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import From from "@/components/contactus/From";

const ContactUs = () => {
  const route = useRouter();
  return (
    <>
      <div className="w-full flex flex-row justify-center">
        <div className=" w-full mx-3 md:mx-0 md:w-2/3 px-5 pb-20 rounded-3xl shadow-2xl">
          <div className="w-full h-28">
            <div className="relative">
              <div
                onClick={() => route.push("/")}
                className="absolute right-3 top-5 w-10 text-center content-center text-white h-10 rounded-full bg-[#012B84] hover:bg-white hover:text-[#012B84] hover:duration-500 hover:border hover:border-[#012B84] "
              >
                <CloseIcon />
              </div>
            </div>
          </div>

          <div>
            <Image
              src="https://www.payrinda.io/assets/home/images/logo.png"
              alt="Company Logo"
              className="w-fit h-full"
              width={200}
              height={200}
              priority
            />
          </div>
          <div className="my-4">
            <p className="sm:text-5xl text-2xl  font-semibold  ">
              Join The Payment Revolution
            </p>
          </div>
          <div>
            <From />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

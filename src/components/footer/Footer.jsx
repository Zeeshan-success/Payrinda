import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram } from "@mui/icons-material";

import Image from "next/image";
import Img from "@/assets/51.png";

const Footer = () => {
  return (
    <div className="relative   text-white bg-[#14377F]">
      <div className="absolute opacity-[0.1] pointer-events-none z-0 w-full h-full">
        <Image
          src={Img}
          alt="background image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative z-10 sm:flex justify-between px-10 py-10">
        <div className="sm:w-1/3">
          <div className="w-[150px] ml-1 md:w-[240px] mb-5">
            <Image
              src="https://www.payrinda.io/assets/home/images/logo.png"
              alt="Company Logo"
              width={150}
              height={50}
              priority
            />
          </div>

          <p className="mb-3 ml-1">Subscribe for our Updates</p>
          <div className="border flex items-center justify-between py-2 px-3 border-white rounded-full">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="flex-grow w-full bg-transparent outline-none pl-3 text-white placeholder-white"
            />
            <button className="bg-white text-[#14377F] px-5 py-2 rounded-full">
              Send
            </button>
          </div>

          <div className="sm:flex ml-0 pl-0 mt-5 justify-start">
            <a
              href="https://www.linkedin.com/company/payrinda/"
              target="_blank"
            >
              <LinkedInIcon className="w-12 h-12" />
            </a>
            <a>
              <FacebookIcon className="w-12 h-12" />
            </a>
            <a>
              <Instagram className="w-12 h-12" />
            </a>
          </div>
        </div>

        <div className="w-1/3 ml-1">
          <p className="mb-2 font-bold">Contact Us:</p>
          <p>
            <a href="mailto:future@payrinda.io" className="hover:underline">
              future@payrinda.io
            </a>
          </p>
          <p className="mt-4 font-bold">Careers:</p>
          <p>
            <a href="mailto:innovate@payrinda.io" className="hover:underline">
              innovate@payrinda.io
            </a>
          </p>
        </div>
      </div>

      <div className="text-center py-5 border-t border-white">
        <p>© Copyright 2024 payrinda. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

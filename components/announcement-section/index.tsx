import Image from "next/image";
import React from "react";
import { Mouse } from "lucide-react";

const Announcement = () => {
  return (
    <div className="bg-[#072322] py-12 flex  justify-center items-center overflow-hidden relative">
      <div className="absolute sm:-bottom-24 w-72 sm:w-auto sm:left-10 sm:top-0 left-0 top-8 ">
        <img src="/images/polygon.svg" className="w-full" />
      </div>

      <h2 className="text-[18px] leading-[28px] sm:text-5xl sm:w-[80%] sm:leading-[45px] sm:font-normal font-light  py-5 px-5 text-center text-white capitalize">
        Shop now, pay later with Klarna Split the cost of your contact lenses
        into 3 interest-free payments with Klarna.
      </h2>

      <div className="absolute -right-44 -top-5 sm:-right-56 sm:top-[80px] ">
        <div className="origin-top-right sm:transform sm:rotate-45 rounded-full block border-[#ffffff1a] border-2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"></div>
      </div>
      <div className="absolute -right-80 -top-30 sm:right-40 sm:top-[-120px]">
        <div className="origin-bottom-right sm:transform sm:rotate-45 rounded-full block border-[#ffffff1a] border-2 w-[400px] h-[400px] sm:w-[400px] sm:h-[400px]"></div>
      </div>
    </div>
  );
};

export default Announcement;

import Image from "next/image";
import React from "react";
import { Mouse } from "lucide-react";

const Announcement = () => {
  return (
    <div className="bg-[#072322] py-12 flex  justify-center items-center overflow-hidden relative">
      <div className="absolute -bottom-24 left-10 ">
        <img src="/images/polygon.svg" width={"90%"} />
      </div>

      <h2 className="text-5xl w-[80%] leading-[45px] font-normal py-5 text-center text-white capitalize">
        Shop now, pay later with Klarna Split the cost of your contact lenses
        into 3 interest-free payments with Klarna.
      </h2>

      <div className="absolute  -right-56 top-[80px] ">
        <div className="origin-top-right transform rotate-45 rounded-full block border-[#ffffff1a] border-2 w-[400px] h-[400px]"></div>
      </div>
      <div className="absolute   right-40 top-[-120px]">
        <div className="origin-bottom-right transform rotate-45 rounded-full block border-[#ffffff1a] border-2 w-[400px] h-[400px]"></div>
      </div>
    </div>
  );
};

export default Announcement;

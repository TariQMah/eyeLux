import Image from "next/image";
import React from "react";
import { Mouse } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-[#E2F8F8] p-[30px] sm:p-5 flex-col sm:flex-row flex sm:flex  justify-center items-center">
      <div className="flex-1 sm:flex-[0.6]">
        <h2 className="text-4xl leading-10 sm:text-7xl inline-grid sm:leading-[60px] font-bold uppercase">
          Contact
          <span className="font-normal">lenses</span>
        </h2>
        <div className="my-5 flex flex-col sm:flex-row gap-3">
          <div className="w-[25%] sm:w-[12%] py-5  sm:flex-col">
            <div className="border-b-4 sm:border-b-2 border-black"></div>
            <div className="bg-white hidden rounded-full h-16 w-16 sm:flex justify-center items-center my-5">
              <Mouse />
            </div>
          </div>
          <h3 className="sm:w-[88%] leading-10 sm:leading-[40px] tracking-[2px] sm:tracking-[6px] space capitalize text-2xl">
            Browse our contact lens collection Shop Top Brands at an Affordable
            Price
          </h3>
        </div>
      </div>
      <div className="flex-1 sm:flex-[0.4]">
        <Image
          src="/images/hero-image-1.png"
          alt="Contact Lenses"
          height={545}
          width={545}
        />
      </div>
    </div>
  );
};

export default HeroSection;

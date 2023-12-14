import Image from "next/image";
import React from "react";
import { Mouse } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-[#E2F8F8] p-5 flex  justify-center items-center">
      <div className="flex-[0.6]">
        <h2 className="text-7xl inline-grid leading-[60px] font-bold uppercase">
          Contact
          <span className="font-normal">lenses</span>
        </h2>
        <div className="my-5 flex gap-3">
          <div className="w-[12%] py-5 flex-col">
            <div className="border-b-2 border-black"></div>
            <div className="bg-white rounded-full h-16 w-16 flex justify-center items-center my-5">
              <Mouse />
            </div>
          </div>
          <h3 className="w-[88%] leading-[40px] tracking-[6px] space capitalize text-2xl">
            Browse our contact lens collection Shop Top Brands at an Affordable
            Price
          </h3>
        </div>
      </div>
      <div className="flex-[0.4]">
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

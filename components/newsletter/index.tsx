import React from "react";

import { Input } from "@/components/ui/input";
import { GoArrowUpRight } from "react-icons/go";
const NewsLetter = () => {
  return (
    <div className="flex flex-col mx-auto w-[60%] justify-center items-center">
      <h3 className="text-4xl py-5 text-white text-center leading-[40px] capitalize tracking-[6px] font-semibold">
        Get a head start on special events,
        <br /> new products and more
      </h3>
      <div className="flex gap-5">
        <Input
          type="email"
          size={100}
          className="bg-transparent text-xl rounded-sm p-5 py-6 focus-visible:ring-offset-0  focus-visible:ring-0 text-white border-white border w-full"
          placeholder="Email"
        />
        <button className="rounded-full h-12 w-12 bg-[#4BD2CE] flex items-center justify-center">
          <GoArrowUpRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

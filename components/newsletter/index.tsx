import React from "react";

import { Input } from "@/components/ui/input";
import { GoArrowUpRight } from "react-icons/go";
const NewsLetter = () => {
  return (
    <div className="flex flex-col mx-auto sm:w-[60%] justify-center items-center">
      <h3 className="sm:text-4xl text-2xl py-5 text-white text-center leading-[40px]  capitalize sm:tracking-[6px] tracking-[2px] font-semibold">
        Get a head start on special events, new products and more
      </h3>
      <div className="flex gap-5">
        <Input
          type="email"
          size={70}
          className="bg-transparent placeholder:text-white placeholder:text-opacity-40 border-opacity-40 rounded-md text-xl sm:rounded-sm p-5 py-6 focus-visible:ring-offset-0  focus-visible:ring-0 text-white border-white border w-full"
          placeholder="Email"
        />
        <button className="rounded-full h-12 w-14 bg-[#4BD2CE] flex items-center justify-center">
          <GoArrowUpRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

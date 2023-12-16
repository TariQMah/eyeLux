import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({ className, text }: any) => {
  return (
    <div className="flex justify-center items-center my-5">
      <div className="h-[2px] w-80 bg-gradient-to-l from-black to-white "></div>
      <h2 className={(cn("font-semibold"), className)}>{text}</h2>
      <div className="h-[2px] w-80 bg-gradient-to-r from-black to-white"></div>
    </div>
  );
};

export default Heading;

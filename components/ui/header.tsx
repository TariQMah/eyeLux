"use client";

import React, { useEffect, useState } from "react";
import { MapPin, CircleUserRound } from "lucide-react";
import { BsHeart, BsBagCheck } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

import Image from "next/image";
import Navigation from "./navigation";
import useCart from "@/hooks/use-cart";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { favItems, items } = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-white border-b border-[#D9D9D9]">
      <div className="container">
        <div className="flex justify-between py-5">
          <div className="flex items-center">
            <div className="flex gap-4">
              <MapPin />
              <p className="font-medium">Boutique Location</p>
            </div>
          </div>
          <div className="flex">
            <Image
              alt="logo"
              src={"/images/logo.png"}
              width={"180"}
              height={"51"}
            />
          </div>
          <div className="flex gap-10 items-center">
            <FiSearch className="w-9 h-9" />
            <div className="flex relative">
              <div className="z-10  text-white flex justify-center items-center text-sm absolute bg-[#1D3B58] rounded-full h-4 w-4 -top-3 -right-3">
                {items?.length}
              </div>
              <BsBagCheck className="w-8 h-8" />
            </div>
            <div className="flex relative">
              <div className="z-10 text-white justify-center items-center flex text-sm absolute bg-[#1D3B58] rounded-full h-4 w-4 -top-3 -right-3">
                {favItems.length}
              </div>
              <BsHeart className="w-8 h-8" />
            </div>

            <CircleUserRound />
          </div>
        </div>
        <div className="flex justify-center">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;

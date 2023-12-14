import React from "react";
import NewsLetter from "../newsletter";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMusic,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#7BDFDD]  bg-opacity-70 border-t">
      <div className="m-5 rounded-2xl p-5 bg-[#072322]">
        <NewsLetter />

        <div className="clear-both border-t my-10"></div>

        <div className="h-80 flex">
          <div className="flex-[0.6]">
            <h4 className="text-white my-5 font-semibold text-lg">EDUCATION</h4>
            <ul className="grid list-disc	 grid-cols-2 list-inside capitalize text-white">
              <li>How to read your prescription</li>
              <li>thinner lenses</li>
              <li>How we make our frames</li>
              <li>Polarised lenses</li>
              <li>Our lenses and coatings</li>
              <li>Measure your PD</li>
              <li>light responsive lenses</li>
              <li>Varifocal</li>
              <li>Eye Health</li>
            </ul>
          </div>

          <div className="flex-[0.2]">
            <h4 className="text-white my-5 font-semibold text-lg">ABOUT US</h4>
            <ul className="grid list-disc	 list-inside capitalize text-white">
              <li>shipment & returns</li>
              <li>our story</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="flex-[0.2]">
            <h4 className="text-white my-5 font-semibold text-lg">EDUCATION</h4>
            <ul className="grid list-disc	  list-inside capitalize text-white">
              <li>How to read your prescription</li>
              <li>thinner lenses</li>
              <li>How we make our frames</li>
              <li>Polarised lenses</li>
              <li>Our lenses and coatings</li>
              <li>Measure your PD</li>
              <li>light responsive lenses</li>
              <li>Varifocal</li>
              <li>Eye Health</li>
            </ul>
          </div>
        </div>

        <div className="clear-both border-t my-10"></div>

        <div className="flex justify-between">
          <Image
            alt="logo"
            src={"/images/logo.png"}
            width={"180"}
            height={"51"}
          />

          <div className="flex flex-col">
            <h5 className="text-white text-lg">Contact Us:</h5>
            <h5 className="text-white text-lg">hello@eyelux.co.uk</h5>
            <div className="text-black flex gap-4">
              <div className="bg-white flex justify-center items-center p-2 rounded-full h-8 w-8">
                <FaLinkedinIn className="text-2xl" />
              </div>
              <div className="bg-white flex justify-center items-center p-2 rounded-full h-8 w-8">
                <FaFacebookF className="text-2xl " />
              </div>
              <div className="bg-white flex justify-center items-center p-2 rounded-full h-8 w-8">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="bg-white flex justify-center items-center p-2 rounded-full h-8 w-8">
                <FaTwitter className="text-2xl" />
              </div>
              <div className="bg-white flex justify-center items-center p-2 rounded-full h-8 w-8">
                <FaMusic className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

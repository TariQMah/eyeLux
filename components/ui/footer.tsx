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
      <div className="m-5 rounded-3xl relative p-5 bg-[#072322]">
        <div className="absolute  -left-40 -top-[120px] ">
          <div className=" rounded-full block border-[#ffffff1a] border-2 w-[250px] h-[250px]"></div>
        </div>
        <div className="absolute   -left-52 -top-[120px]">
          <div className="  rounded-full block border-[#ffffff1a] border-2 w-[300px] h-[300px]"></div>
        </div>
        <NewsLetter />

        <div className="clear-both border-t my-10"></div>

        <div className=" flex">
          <div className="flex-[0.6]">
            <h4 className="text-white my-5 font-semibold text-3xl">
              EDUCATION
            </h4>
            <ul className="grid list-disc 	leading-[30px]	 grid-cols-2 list-inside capitalize text-white">
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
            <h4 className="text-white my-5 font-semibold text-3xl">ABOUT US</h4>
            <ul className="grid list-disc		leading-[30px] list-inside capitalize text-white">
              <li>shipment & returns</li>
              <li>our story</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="flex-[0.2]">
            <h4 className="text-white my-5 font-semibold text-3xl">PRODUCT</h4>
            <ul className="grid list-disc	leading-[30px] list-inside capitalize text-white">
              <li>Woman&apos;s glasses</li>
              <li>Men&apos;s glasses</li>
              <li>Women&apos;s sunglasses</li>
              <li>Men&apos;s sunglasses</li>
              <li>Contact lenses</li>
            </ul>
          </div>
        </div>

        <div className="clear-both border-t my-10"></div>

        <div className="flex justify-between">
          <Image
            alt="logo"
            src={"/images/footer_logo.png"}
            width={"280"}
            height={"75"}
          />

          <div className="flex flex-col">
            <h5 className="text-white text-lg">Contact Us:</h5>
            <h5 className="text-white text-lg py-2">hello@eyelux.co.uk</h5>
            <div className="text-black flex gap-4 pt-2">
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
      <div className="flex px-10 justify-between items-start pb-5">
        <p className="text-[#9F9F9F] text-sm font-semibold">
          Pictures and images on this website are for illustration purposes only
        </p>
        <ul className="grid list-disc gap-10 grid-cols-2 list-inside capitalize text-black">
          <li className="font-semibold">terms and conditions </li>
          <li className="font-semibold">privacy policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

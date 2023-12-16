"use client";

import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Nova_Mono } from "next/font/google";
import Image from "next/image";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  title: string;
  image: string;
  price: string;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  price,
  title,
}) => {
  const cart = useCart();

  const addToCart = () => {
    cart.addItem({ id, image, price, title }, "cart");
    // cart.removeAll("cart");
  };

  const addToFav = () => {
    cart.addItem({ id, image, price, title }, "favorite");
    // cart.removeAll("favorite");
  };

  const isFav = cart.favItems?.find((item: any) => item?.id === id);
  console.log("🚀 ~ file: index.tsx:33 ~ isFav:", isFav);

  return (
    <div className="pt-10" onClick={() => addToCart()}>
      <div className="h-24 p-5 flex justify-center items-center relative">
        <h2 className="text-center  text-3xl font-bold">{title}</h2>
        {isFav ? (
          <BsHeartFill
            onClick={() => addToFav()}
            className="w-6 h-6 text-red-500 absolute right-10 top-0"
          />
        ) : (
          <BsHeart
            onClick={() => addToFav()}
            className="w-6 h-6 absolute right-10 top-0"
          />
        )}
      </div>

      <div className="relative py-20 flex justify-center items-center">
        <Image
          src={image}
          className="object-contain max-w-sm"
          layout="responsive"
          alt="product 1"
          width={"100"}
          height={"100"}
        />
      </div>

      <div className="border-t-2  border-black py-5 ">
        <h4 className="text-center text-4xl font-bold">{price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;

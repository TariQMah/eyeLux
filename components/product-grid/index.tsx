import React from "react";
import ProductCard from "../product-card";

interface ProductsProps {
  products: any;
}
const ProductGrid: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="sm:flex sm:flex-wrap ">
      {products?.map((item: any, key: any) => {
        return (
          <div
            className="sm:border border-t-2 border-y sm:border-t border-r-0 flex-[30%] border-black"
            key={key}
          >
            <ProductCard
              key={key}
              id={item?.id}
              title={item?.title}
              price={item?.price}
              image={item?.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;

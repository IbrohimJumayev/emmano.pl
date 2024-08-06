import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import ProductOptions from "./ProductOptions";
import ProductShipping from "./ProductShipping";
import ProductGuarantee from "./ProductGuarantee";
import ProductReviews from "./ProductReviews";
import PayOptions from "./PayOptions";

export default function Product() {
  return (
    <div className="flex max-w-6xl m-auto mt-11 gap-9 px-3 max-md:flex-col">
      <div className="flex-1">
        <ProductImage />
        <ProductReviews />
      </div>
      <div className="flex-1">
        <div>
          <ProductDetails />
          <div className="bg-[#F7F7F7] rounded-xl px-[26px] pt-4 pb-[14px] mt-[22px]">
            <ProductOptions />
            <ProductShipping />
            <PayOptions />
          </div>
          <ProductGuarantee />
        </div>
      </div>
    </div>
  );
}

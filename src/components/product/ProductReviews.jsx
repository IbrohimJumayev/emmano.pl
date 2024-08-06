import React from "react";
import stars from "../../assets/stars.svg";
import verified from "../../assets/verified.svg";

const ProductReviews = () => {
  return (
    <div className="flex mt-10 bg-[rgb(246,246,246)] py-5 px-3 rounded-xl gap-5 max-sm:hidden">
      <span className=" bg-[#FFE3F76E]"></span>
      <div className="bg-[#F0F2F5] rounded-md w-[223px] h-[125px]"></div>
      <div className="flex-col">
        <div className="flex gap-2">
          <h2 className="font-bold">Sanela E.</h2>
          <img src={stars} alt="" />
        </div>
        <div className="flex gap-2">
          <img src={verified} alt="" />
          <p className="text-[#3DBD00] text-[12px]">Verified buyer</p>
        </div>
        <div>
          <p className="text-[#5F6061] text-[15px] mt-[14px]">
            Showcase a powerful testimonial from a satisfied customer that
            highlights the product's key benefit and encourages{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;

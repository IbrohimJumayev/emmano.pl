import React from "react";
import deliverSvg from "../../assets/deliverG.svg";
import cashSvg from "../../assets/cashG.svg";
import returnSvg from "../../assets/backG.svg";
import startG from "../../assets/starG.svg";

const ProductShipping = () => {
  return (
    <div className="flex-col mt-4">
      <div className="flex gap-2">
        <img src={deliverSvg} alt="" />
        <p className="font-bold">
          <span className="text-[#3DBD00]">Free delivery</span> on all orders
          over $69
        </p>
      </div>
      <div className="flex gap-2">
        <img src={cashSvg} alt="" />
        <p className="font-bold">Cash on delivery</p>
      </div>
      <div className="flex gap-2">
        <img src={returnSvg} alt="" />
        <p className="font-bold">14-day money-back guarantee</p>
      </div>
      <div className="flex gap-2">
        <img src={startG} alt="" />
        <p className="font-bold">97% rate Your Shop as EXCELLENT</p>
      </div>
    </div>
  );
};

export default ProductShipping;

import React from "react";
import garand from "../../assets/garant.svg";

const ProductGuarantee = () => {
  return (
    <div className="bg-[#E8D7AF] py-5 gap-2 flex items-center px-[78px] -mt-2 w-full ">
      <div>
        <img className="w-28" src={garand} alt="" />
      </div>
      <div>
        <h3 className="font-bold">14-day money-back guarantee</h3>
        <p className="text-[13px] text-[#5B6064]">
          If you are not satisfied with the product, simply return it and we
          will refund your money.
        </p>
      </div>
    </div>
  );
};

export default ProductGuarantee;

import React from "react";
import discountSvg from "../assets/discount.svg";

const Benefit = () => {
  return (
    <div className="bg-[#E3FFFE] flex justify-center gap-2 mt-4 py-[13px] max-[875px]:hidden">
      <img src={discountSvg} alt="" />
      <p className="text-[14px]">
        Buy 2 or more and <span className="font-bold">get 25% Off</span>{" "}
      </p>
    </div>
  );
};

export default Benefit;

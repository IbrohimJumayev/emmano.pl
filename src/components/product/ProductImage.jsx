import React from "react";

const ProductImage = () => {
  return (
    <div>
      <div className="relative">
        <img src="/productImg.png" alt="" />
        <span className="absolute top-1/2 right-2 bg-[#5F606166] px-6 py-[30px] rounded-xl cursor-pointer">
          <span className="arrow rotate-45"></span>
          <span className="arrow -rotate-45 translate-y-2"></span>
        </span>
      </div>
      <div className="flex justify-between mt-4">
        <img className="w-28 max-sm:w-20" src="/productImg.png" alt="" />
        <img className="w-28 max-sm:w-20" src="/productImg.png" alt="" />
        <img className="w-28 max-sm:w-20" src="/productImg.png" alt="" />
        <img className="w-28 max-sm:w-20" src="/productImg.png" alt="" />
      </div>
    </div>
  );
};

export default ProductImage;

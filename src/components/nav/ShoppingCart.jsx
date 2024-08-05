import React from "react";
import cartSvg from "../../assets/cart.svg";

const ShoppingCart = () => {
  return (
    <a href="#">
      <div className="bg-[#37424F] flex gap-[11px] items-center rounded-xl px-[21px] py-[25px] max-lg:px-[10px] max-lg:py-[12px] max-sm:hidden">
        <div>
          <img src={cartSvg} alt="" />
        </div>
        <div>
          <p className="text-[14px] text-gray-500">Your cart</p>
          <strong className="text-white">$59.90</strong>
        </div>
        <div>
          <span className="material-symbols-outlined text-gray-500">
            keyboard_arrow_right
          </span>
        </div>
      </div>
    </a>
  );
};

export default ShoppingCart;

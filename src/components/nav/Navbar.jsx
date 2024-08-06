import React from "react";
import logo from "../../assets/logo.svg";
import searchSvg from "../../assets/searchicon.svg";
import List from "./List";
import ShoppingCart from "./ShoppingCart";
import HumMenu from "./HumMenu";
import resCart from "../../assets/resCart.svg";
import resPhone from "../../assets/resPhone.svg";
import resSearch from "../../assets/resSearch.svg";

const Navbar = () => {
  return (
    <div className="max-w-7xl m-auto flex justify-between items-center mt-5  px-2 max-sm:px-4 max-lg:text-sm">
      <div className="flex items-center ">
        <div className="-mt-7  max-[875px]:-mt-2 flex items-center ">
          <HumMenu />
          <img src={logo} alt="Logo of the store" />
        </div>
        <div>
          <div className="flex items-center gap-10 max-xl:gap-5   ml-[26px] ">
            <div className="flex max-sm:hidden gap-3 items-center border py-3 px-4 border-black rounded-full max-[875px]:w-[200px]  w-[400px] lg:w-[511px]">
              <img src={searchSvg} alt="search svg" />
              <input
                type="text"
                placeholder="Search by product (e.g. HDMI adapter)"
                className="border-none outline-none  text-[15px] w-full"
              />
            </div>
            <div className="flex gap-3  sm:hidden justify-between">
              <img src={resPhone} alt="" />
              <img src={resSearch} alt="" />
              <img src={resCart} alt="" />
            </div>
            <div className="flex gap-[7px] items-center cursor-pointer max-sm:hidden">
              <span className="material-symbols-outlined">call</span>
              <p className="text-sm text-[#070707]">
                Need help?{" "}
                <span className="font-bold max-lg:hidden">+386 31 566 432</span>
              </p>
            </div>
          </div>
          {/* <div className="flex gap-3  sm:hidden">
            <img src={resPhone} alt="" />
            <img src={resSearch} alt="" />
            <img src={resCart} alt="" />
          </div> */}
          <div className="mt-4">
            <List />
          </div>
        </div>
      </div>
      <div>
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import orange from "../../assets/orange.svg";
import tifany from "../../assets/tifany.svg";
import tickSvg from "../../assets/tick.svg";

const ProductOptions = () => {
  return (
    <div className="  ">
      <div className="">
        <div className="pr-[10px] lg:pr-[133px]">
          <div className="flex justify-between ">
            <p className="text-[#5F6061] font-bold">Choose your size:</p>
            <a className="underline text-[14px]" href="#">
              Size chart
            </a>
          </div>
          <div className="grid grid-cols-4 gap-0 border rounded-r-lg rounded-l-lg mt-2 border-[#DDDDDD]">
            <button className="py-[17px] cursor-pointer border-r border-[#DDDDDD] text-center">
              S
            </button>
            <button className="py-[17px] cursor-pointer border-r border-[#DDDDDD] text-center">
              M
            </button>
            <button className="py-[17px] cursor-pointer border-r border-[#DDDDDD] text-center">
              L
            </button>
            <button className="py-[17px] cursor-pointer border-r border-[#DDDDDD] text-center">
              XL
            </button>
          </div>
          <p className="text-[#5F6061] font-bold mt-[25px]">Choose a colour:</p>
          <div className="mt-[11px]">
            <button className="border-[rgb(221,221,221)] border px-[16px] rounded-l-lg py-4">
              <img className="pl-4 pb-1" src={tifany} alt="" />
              <p>Turquoise</p>
            </button>
            <button className="border-[#DDDDDD] border rounded-r-lg px-[25px] py-4">
              <img className="pl-3 pb-1" src={orange} alt="" />
              <p>Orange</p>
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-start gap-2">
            <img className="pt-1.5 w-4" src={tickSvg} alt="" />
            <p className="text-[14px]">
              <span className="text-[#3DBD00] font-bold pr-1">In stock.</span>
              Order in the next <span className="font-bold">
                5h 43m 33s
              </span>{" "}
              and the product will be with you on{" "}
              <span className="font-bold">Monday 25 September</span>
            </p>
          </div>
          <div className="max-w-[360px] mt-2 max-sm:max-w-full">
            <button className="bg-[#5143D9] text-white font-bold rounded-lg text-[24px] w-full flex items-center justify-center gap-2 py-4">
              Podglądnij{" "}
              <span className="material-symbols-outlined text-white font-light">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;

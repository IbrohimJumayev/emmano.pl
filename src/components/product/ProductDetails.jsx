import React from "react";
import fireSvg from "../../assets/fire.svg";
import starSvg from "../../assets/star.png";
import tickSvg from "../../assets/tick.svg";

const ProductDetails = () => {
  const Star = () => {
    return <img className="w-5 h-5" src={starSvg} />;
  };

  const featuries = ["Darmowa personalizacja", "U Ciebe Jutro", "100% bawełna"];

  const starCount = 4.8;
  return (
    <div>
      <p className="text-[#CA232C] text-[14px] font-bold flex gap-[6px] items-center">
        <img src={fireSvg} alt="" />
        16 people are currently looking at this product!
      </p>
      <h2 className="text-[#232F3E] mt-1 text-4xl font-bold">
        Spersonalizowana Koszulka
      </h2>
      <p className="text-[#232F3E] text-[20px] font-semibold mt-[2px]">
        Złapiśmy Najlepszego Tatę
      </p>
      <div className="flex gap-1 items-center mt-[10px]">
        {[...Array(Math.round(starCount))].map((_, index) => (
          <Star key={index} />
        ))}
        <p className="text-[#1D6EC1] font-medium text-[14px] mr-2">
          {starCount}/ 25 opini
        </p>
      </div>
      <p className="text-[36px] text-[#CA232C] font-bold flex items-center gap-4">
        <span className="line-through  font-light text-[#5F6061] text-[30px]">
          79 zł
        </span>
        59 zł
        <span className="navSpan bg-[#1D6EC1]">40% OFF</span>
      </p>
      <ul className="mt-[15px]">
        {featuries.map((f, index) => (
          <li key={index} className="flex items-center gap-2">
            <img src={tickSvg} alt="" />
            <p className="text-[#5F6061]">{f}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;

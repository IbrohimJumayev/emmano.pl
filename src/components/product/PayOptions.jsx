import React from "react";
import cash from "../../assets/cash.svg";
import paypal from "../../assets/paypal.svg";
import mastero from "../../assets/master.svg";
import masterCard from "../../assets/masterCard.svg";
import visa from "../../assets/visa.svg";
import amex from "../../assets/amex.svg";
const PayOptions = () => {
  return (
    <div className="mt-5 mb-4">
      <ul className="flex gap-[5px]">
        <li className="bg-white py-1 flex px-2 shdow-xl shadow-black rounded-md">
          <img src={cash} alt="" />
          <p>Cash on deliver</p>
        </li>
        <li className="bg-white py-1 flex px-2 shdow-xl shadow-black rounded-md">
          <img src={paypal} alt="" />
        </li>
        <li className="bg-white py-1 flex px-2 shdow-xl shadow-black rounded-md">
          <img src={mastero} alt="" />
        </li>
        <li className="bg-white py-1 flex px-2 shdow-xl shadow-black rounded-md">
          <img src={masterCard} alt="" />
        </li>
        <li className="bg-white py-1 flex px-2 shdow-xl shadow-black rounded-md">
          <img src={visa} alt="" />
        </li>
        <li className="bg-[#26A6D1] py-1 flex px-2 shdow-xl shadow-black rounded-md">
          <img src={amex} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default PayOptions;

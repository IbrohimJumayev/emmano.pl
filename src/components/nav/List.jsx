import React from "react";

const List = () => {
  return (
    <div>
      <ul className="flex gap-7 max-xl:gap-3 max-xl:-ml-20 max-lg:-ml-32 font-bold navLinks max-[875px]:hidden">
        <li>
          <a href="#">Cell Phones</a>
        </li>
        <li>
          <a href="#">Smart Home</a>
        </li>
        <li>
          <a href="#">Ipads & Tablects</a>
        </li>
        <li>
          <a href="#">Wearable Tech </a>
        </li>
        <div>
          <li>
            <a href="#">Sale</a>
            <span className="navSpan bg-[#CA232C] ml-2">40% OFF</span>
          </li>
        </div>

        <li>
          <a href="#">All products</a>
          <span className="navSpan bg-[#737B86] ml-2">72</span>
        </li>
      </ul>
    </div>
  );
};

export default List;

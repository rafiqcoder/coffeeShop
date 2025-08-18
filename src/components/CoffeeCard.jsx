import React from "react";
import cardImg from "../assets/home/card-img.png";
import rightArrow from "../assets/home/right-arrow.png";
const CoffeeCard = ({ height, title = " Coffee Roaster" }) => {
  return (
    <div
      className=" h-full w-full flex flex-col justify-end items-start   bg-center object-fit !rounded-[30px] overflow-hidden  "
      style={{
        background: `url(${cardImg})`,
        height: height,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className=" text-neutral-content pl-2 h-[100px] w-full bg-gradient-to-b from-transparent to-black  flex justify-between px-4">
        <div className=" text-left">
          <h1 className=" text-4xl font-bold font-primary">{title}</h1>
          <p>Elevate Your Coffee Experience</p>
        </div>
        <div>
          <img src={rightArrow} className="w-[60px] " alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

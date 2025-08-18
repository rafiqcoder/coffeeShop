import React from "react";

const Title = ({
  title_part_one = "Taking in mind every step of the ",
  title_part_two = "coffee journey",
  subTitle = "Our Verticals",
}) => {
  return (
    <div className="my-8 w-[55%] mx-auto ">
      <p className="text-xl text-[#EF2E48]">{subTitle}</p>
      <h1 className="text-[60px] font-bold  text-black font-primary mt-2 text-center leading-[60px]">
        {title_part_one}{" "}
        <span className="text-[#EF2E48]">{title_part_two}</span>
      </h1>
    </div>
  );
};

export default Title;

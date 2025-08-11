import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className=" text-neutral-content pl-10">
        <div className="w-1/2 text-left">
          <p>Elevate Your Coffee Experience</p>
          <h1 className="mb-5 text-5xl font-bold">
            Discover the Finest Coffee Beans and Brewing Essentials
          </h1>
          <p className="mb-5"></p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

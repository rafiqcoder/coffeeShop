import React from "react";
import Hero from "../components/Hero";
import CoffeeCard from "../components/CoffeeCard";
import ProductsCarousel from "../components/ProductsCarousel";
import Title from "../components/UI/Title";
import ImgCarousel from "../components/ImgCarousel.jsx/ImgCarousel";

const Home = () => {
  
  return (
    <div>
      <Hero />
      <div className="w-full flex justify-center items-center">
        <Title
          title_part_one="Taking in mind every step of the "
          title_part_two="coffee journey"
          subTitle="Our Verticals"
        />
      </div>
      <div className=" w-full  py-8 flex gap-4">
        <div className="w-1/2">
          <CoffeeCard height="600px" title=" Coffee Roaster" />
        </div>
        <div className="flex w-1/2 flex-col gap-y-4 ">
          <CoffeeCard height="292px" title="Cafe" />
          <CoffeeCard height="292px" title="Retail" />
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-[300px] flex flex-col justify-center items-start pb-6">
          <h1 className="text-4xl font-bold text-left my-8 text-black font-primary">
            Explore Our Coffee Collection
          </h1>
          <button className="btn  bg-[#EF2E48]">View All</button>
        </div>
        <div className="flex-1">
          <ProductsCarousel />
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-left my-8 text-black font-primary">
          Explore Our Coffee Collection
        </h1>
        <ImgCarousel />
      </div>
    </div>
  );
};

export default Home;

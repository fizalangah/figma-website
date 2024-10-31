"use client";

import { useState } from "react";
import Card from "./card";// assuming Card is your card component
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Total number of cards

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-[1285px] h-[223px] flex items-center justify-center mt-[50px] ">
      {/* Slide container */}
      <div className="flex gap-[14px] overflow-hidden w-full px-[5px] justify-center">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`transition-transform duration-300 ${
              currentSlide === index ? "scale-105 z-10 border-t-4  border-b-4  border-green-500 rounded-lg" : "scale-100 border-2 border-transparent"
            }`}
          >
            <Card />
          </div>
        ))}
      </div>

      {/* Dots Indicator with Arrows */}
      <div className="absolute bottom-[-50px] flex items-center gap-4">
        {/* Left Arrow with Rounded Border */}
        <div className="border-2 border-green-500 rounded-[50%] pl-[2] h-[40px] w-[40px]">
          <button
            className="text-gray-500 hover:text-green-500"
            onClick={handlePrev}
          >
            <FaChevronLeft size={24}  className="mt-[6px]"/>
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-full bg-gray-400 transition-all duration-300 ${
                currentSlide === index ? "bg-green-500 w-4" : "w-2"
              }`}
            ></span>
          ))}
        </div>

        {/* Right Arrow with Rounded Border */}
        <div className="border-2 border-green-500 rounded-[50%] pl-[2] h-[40px] w-[40px]">
          <button
            className="text-gray-500 hover:text-green-500"
            onClick={handleNext}
          >
            <FaChevronRight size={24}  className="mt-[6px]"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;

// components/Slider.jsx

"use client";

import { useState, useEffect } from "react";
import "./Slider.css";
import Image from "next/image";
import images from '../../../../public/home'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
const banners = [
  {
    id: 1,
    image: images.ww,
    title: "پیشنهاد ویژه"
  },
  {
    id: 2,
    image: images.ww,
    title: "تخفیف ویژه"
  },
  
];

export default function Slider() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setActive((prev) =>
      (prev - 1 + banners.length) % banners.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container " dir="rtl">

      <div className="slider-track ">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`slide ${
              active === index ? "active" : ""
            }`}
          >
            <Image src={banner.image} alt={banner.title} />
          </div>
        ))}
      </div>

   <div className="absolute z-10 top-[86%] left-[5%] flex gap-5 max-md:gap-1 max-md:top-[80%]">
  <div
    onClick={prevSlide}
    className="h-10 w-10 max-md:w-7 max-md:h-7 bg-white flex items-center justify-center rounded-full cursor-pointer shadow"
  >
    <BiRightArrow />
  </div>
  
  <div
    onClick={nextSlide}
    className="h-10 w-10 max-md:w-7 max-md:h-7 bg-white flex items-center justify-center rounded-full cursor-pointer shadow"
  >
    <BiLeftArrow />
  </div>
</div>
      <div className="slider-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setActive(index)}
            className={
              active === index ? "dot selected" : "dot"
            }
          />
        ))}
      </div>

    </div>
  );
}
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { IMAGES } from "@/image-data";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    src: IMAGES.home.Banner1,
    alt: "Banner 1",
  },
  {
    id: 2,
    src: IMAGES.home.Banner3,
    alt: "Banner 2",
  },
  {
    id: 3,
    src: IMAGES.home.Banner2,
    alt: "Banner 3",
  },
  {
    id: 4,
    src: IMAGES.home.Banner4,
    alt: "Banner 4",
  },
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  //   const nextSlide = () => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   };

  //   const prevSlide = () => {
  //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  //   };
  return (
    <Card className="overflow-hidden border-0 backdrop-blur-sm rounded-md">
      <CardContent className="p-0">
        <div className="h-[160px] md:h-[300px] lg:h-[300px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-white/90">{slide.description}</p>
                      </div> */}
            </div>
          ))}

          {/* Navigation Buttons */}
          {/* <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button> */}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 py-1 absolute bottom-1 left-1/2 transform -translate-x-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[4px] w-5 md:h-[6px] md:w-7 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide
                  ? "bg-primary"
                  : "bg-primary/70 hover:bg-primary"
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BannerSlider;

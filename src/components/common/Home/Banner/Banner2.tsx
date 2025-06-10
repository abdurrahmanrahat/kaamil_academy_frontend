"use client";

import Container from "@/components/shared/Ui/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IMAGES } from "@/image-data";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

// const features = [
//   {
//     icon: BookOpen,
//     title: "মানসম্পন্ন শিক্ষা",
//     description: "অভিজ্ঞ আলেমদের তত্ত্বাবধানে",
//   },
//   {
//     icon: Users,
//     title: "নিবিড় পরিচর্যা",
//     description: "ব্যক্তিগত মনোযোগ ও গাইডেন্স",
//   },
//   {
//     icon: Clock,
//     title: "নমনীয় সময়সূচি",
//     description: "কর্মব্যস্তদের জন্য উপযুক্ত",
//   },
//   {
//     icon: Award,
//     title: "সার্টিফিকেট",
//     description: "কোর্স সম্পন্নে সনদপত্র",
//   },
// ];

export default function Banner2() {
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
    <section className="lg:min-h-[90vh] flex justify-center items-center py-12 md:py-16 lg:py-0">
      <Container className="">
        <div className="lg:flex lg:flex-row-reverse lg:items-center gap-4">
          {/* Slider Column */}
          <div className="lg:w-1/2 relative pb-12 lg:pb-0">
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
          </div>

          {/* Content Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full bg-primary/20 px-4 py-1 text-sm font-medium text-emerald-800">
                  <BookOpen className="mr-2 h-4 w-4" />
                  বিশ্বস্ত ইসলামিক শিক্ষা
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                  <span className="text-2xl md:text-3xl lg:text-4xl">
                    আপনার দ্বীন শেখার যাত্রা শুরু হোক
                  </span>{" "}
                  <span className="text-primary block mt-1">
                    কামিল একাডেমির সাথে
                  </span>
                </h1>
              </div>

              <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                বিশ্বস্ত ও অভিজ্ঞ আলেমদের নিবিড় তত্ত্বাবধানে পরিচালিত একটি
                মানসম্পন্ন অনলাইন ইসলামিক শিক্ষা প্ল্যাটফর্ম। জেনারেল শিক্ষায়
                শিক্ষিত ও কর্মব্যস্তদের জন্য এটি একটি সহজ, নিরাপদ ও কার্যকর
                দ্বীনি শিক্ষা গ্রহণের মাধ্যম।
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex  gap-4">
              <Link href={`/courses`}>
                <Button size="lg" className="">
                  কোর্স দেখুন
                </Button>
              </Link>
              <Link href={`/about`}>
                <Button variant="outline" size="lg" className="">
                  আরও জানুন
                </Button>
              </Link>
            </div>

            {/* Features Grid */}
            {/* <div className="grid grid-cols-2 gap-4 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                      <feature.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
}

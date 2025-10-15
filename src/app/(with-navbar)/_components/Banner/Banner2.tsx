import Container from "@/components/shared/Ui/Container";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import BannerSlider from "./BannerSlider";

export default function Banner2() {
  return (
    <section className="lg:min-h-[90vh] flex justify-center items-center py-12 md:py-16 lg:py-0">
      <Container className="">
        <div className="lg:flex lg:flex-row-reverse lg:items-center gap-4">
          {/* Slider Column */}
          <div className="lg:w-1/2 relative pb-12 lg:pb-0">
            <BannerSlider />
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

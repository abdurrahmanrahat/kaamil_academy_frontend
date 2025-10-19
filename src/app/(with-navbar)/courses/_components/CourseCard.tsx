import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IMAGES } from "@/image-data";
import { Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard() {
  return (
    <Link href="/courses/quran-basic">
      <Card className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-cardLightShadow bg-white dark:bg-gray-900 py-0 my-0">
        {/* Banner */}
        <div className="relative">
          <Image
            src={IMAGES.course.CourseCardBanner}
            alt="কুরআন শিক্ষা কোর্স"
            width={400}
            height={240}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Price Badge */}
          <Badge className="absolute top-3 right-3 bg-[#007F00] text-white text-xs px-3 py-1 rounded-full shadow-md">
            ৳২৫০
          </Badge>

          {/* Batch Tag */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 text-[#007F00] text-xs font-semibold px-3 py-1 rounded-full shadow">
            Batch – 3 & 4
          </div>
        </div>

        {/* Content */}
        <CardContent className="pb-4">
          <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-100 mb-4 text-center">
            কুরআন শিক্ষা কোর্স
          </h3>

          {/* Rating & Students */}
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            {/* Rating */}
            <div className="flex items-center gap-[2px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= 4
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">
                (4.8)
              </span>
            </div>

            {/* Students */}
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-[#007F00]" />
              <span className="text-sm">৫৬৭+ শিক্ষার্থী</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

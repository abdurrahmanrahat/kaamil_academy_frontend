import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users } from "lucide-react";
import Image from "next/image";

import { IMAGES } from "@/image-data";
import Link from "next/link";

const CourseCard = () => {
  return (
    <Link href={`/courses/_id`}>
      <Card className="w-full max-w-sm overflow-hidden">
        <div className="relative">
          <Image
            src={IMAGES.course.CourseCardBanner}
            alt="কুরআন শিক্ষা কোর্স"
            width={400}
            height={240}
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute top-3 right-3 bg-primary text-white">
            ৳৩৫০
          </Badge>
        </div>

        <CardContent className="">
          <h3 className="font-semibold text-xl mb-2 text-gray-800">
            কুরআন শিক্ষা কোর্স
          </h3>

          <div className="flex items-center justify-between gap-2 mb-3">
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
              <span className="text-sm text-gray-600 ml-1">(4.8)</span>
            </div>

            <div className="flex items-center gap-1 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">৩১৬+ শিক্ষার্থী</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;

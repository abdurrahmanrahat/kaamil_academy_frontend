import { TReview } from "@/types";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }: { review: TReview }) => {
  return (
    <div className="group  px-6 py-8 rounded-xl shadow-cardLightShadow transition-all duration-700 border border-transparent bg-gradient-soft">
      {/* Quote Icon */}
      <div className="flex items-center justify-center mb-5">
        <FaQuoteLeft className="text-4xl text-primary group-hover:scale-110 transition-transform duration-500" />
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-base leading-relaxed mb-6 text-justify">
        {review?.message}
      </p>

      {/* Reviewer Info */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden border-[2px] border-gray-600 group-hover:border-primary transition-all duration-500 bg-gray-800 flex items-center justify-center text-gray-800 text-3xl font-semibold">
          {review?.photo ? (
            <Image
              src={review.photo}
              alt={review.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{review?.name?.[0] || "?"}</span>
          )}
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mt-4">
          {review?.name}
        </h2>
        <p className="text-sm text-gray-600">শিক্ষার্থী</p>
      </div>
    </div>
  );
};

export default ReviewCard;

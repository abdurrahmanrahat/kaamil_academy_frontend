// import BannerImage from "@/asserts/course/quran-basic-page-banner.jpg";
import { IMAGES } from "@/image-data";
import { Metadata } from "next";
import QuranLCBasicRegistrationForm from "./_components/QuranLCBasicRegistrationForm";

export const metadata: Metadata = {
  title: "Quran Basic Course | Kaamil Academy",
  description: "We provide Quran learning opportunities for general students",
};

const QuranLCBasicRegistration = () => {
  return (
    <div className="pb-12 lg:pb-16">
      <div
        className="relative flex items-center justify-center h-[220px] md:h-[300px] lg:h-[450px] w-full overflow-hidden rounded-none bg-cover bg-center "
        style={{
          backgroundImage: `url(${IMAGES.course.QuranBasicPageBanner.src})`,
        }}
      >
        {/* Black overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}

        {/* Content */}
        {/* <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-2">
            কুরআন শিক্ষা কোর্স
          </h2>
          <p className="text-sm md:text-base text-gray-200">
            হরফ থেকে শুরু করে সঠিকভাবে কুরআন পাঠ শেখার পূর্ণাঙ্গ কোর্স
          </p>
        </div> */}
      </div>

      <div className="w-[90%] max-w-[980px] mx-auto pt-14">
        <QuranLCBasicRegistrationForm />
      </div>
    </div>
  );
};

export default QuranLCBasicRegistration;

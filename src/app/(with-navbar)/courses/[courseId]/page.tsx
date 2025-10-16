import { IMAGES } from "@/image-data";
import Testimonials from "../../_components/Testimonials/Testimonials";
import CourseHero from "./_components/CourseHero";
import CourseOverview from "./_components/CourseOverview";
import ImportantDates from "./_components/ImportantDates";
import RegistrationCTA from "./_components/RegistrationCTA";
import WhoCanJoin from "./_components/WhoCanJoin";

export async function generateMetadata() {
  return {
    title: `Quran Basic Course | Kaamil Academy`,
    description: "We provide Quran learning opportunities for general students",
    openGraph: {
      title: "Quran Basic Course | Kaamil Academy",
      description:
        "We provide Quran learning opportunities for general students",
      images: [
        {
          url: IMAGES.course.QuranBasicPageBanner.src,
          width: 800,
          height: 600,
          alt: "Quran Basic Course",
        },
      ],
    },
  };
}

const CourseDetailsPage = () => {
  return (
    <div>
      <CourseHero />
      <CourseOverview />
      <WhoCanJoin />
      <ImportantDates />
      <RegistrationCTA />
      <Testimonials />
    </div>
  );
};

export default CourseDetailsPage;

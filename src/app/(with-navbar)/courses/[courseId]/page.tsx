import CourseHero from "./_components/CourseHero";
import CourseOverview from "./_components/CourseOverview";
import ImportantDates from "./_components/ImportantDates";
import RegistrationCTA from "./_components/RegistrationCTA";
import WhoCanJoin from "./_components/WhoCanJoin";

const CourseDetailsPage = () => {
  return (
    <div>
      <CourseHero />
      <CourseOverview />
      <WhoCanJoin />
      <ImportantDates />
      <RegistrationCTA />
    </div>
  );
};

export default CourseDetailsPage;

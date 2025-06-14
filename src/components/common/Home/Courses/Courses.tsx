import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import CourseCard from "../../Course/CourseCard";

const Courses = () => {
  return (
    <Container className="py-16 lg:py-20">
      <SectionTitle text="ইসলামিক কোর্স সমূহ" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CourseCard />
      </div>
    </Container>
  );
};

export default Courses;

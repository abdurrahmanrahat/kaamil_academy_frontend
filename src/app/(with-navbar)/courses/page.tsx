import { Metadata } from "next";
import Courses from "../_components/Courses/Courses";

export const metadata: Metadata = {
  title: "Courses | Kaamil Academy",
  description: "We provide Quran learning opportunities for general students",
};

const CoursesPage = () => {
  return (
    <div>
      <Courses />
    </div>
  );
};

export default CoursesPage;

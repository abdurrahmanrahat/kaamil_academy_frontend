import Banner2 from "@/app/(with-navbar)/_components/Banner/Banner2";
import Courses from "@/app/(with-navbar)/_components/Courses/Courses";
import Blogs from "./_components/Blogs/Blogs";
import Testimonials from "./_components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Banner2 />
      <Courses />
      <Blogs />
      <Testimonials />
    </div>
  );
}

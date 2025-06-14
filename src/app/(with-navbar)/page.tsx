import Banner2 from "@/components/common/Home/Banner/Banner2";
import Blogs from "@/components/common/Home/Blogs/Blogs";
import Courses from "@/components/common/Home/Courses/Courses";

export default function Home() {
  return (
    <div className="">
      <Banner2 />
      <Courses />
      <Blogs />
    </div>
  );
}

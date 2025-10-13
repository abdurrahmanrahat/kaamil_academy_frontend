import { getAllBlogsFromDB } from "@/app/actions/blog";
import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { TBlog } from "@/types";
import { BlogCard } from "../../blogs/_components/BlogCard";

const Blogs = async () => {
  const blogsResponse = await getAllBlogsFromDB();

  if (!blogsResponse?.success) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-medium text-gray-800">
          কোন ব্লগ পাওয়া যায়নি
        </h3>
      </div>
    );
  }

  return (
    <Container className="py-16 lg:py-20">
      <SectionTitle text="ইসলামিক ব্লগ" />

      <div>
        {blogsResponse?.data?.data?.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-medium text-gray-800">
              কোন ব্লগ পাওয়া যায়নি
            </h3>
            <p className="text-gray-500 mt-2">
              অন্য কিছু খুঁজে দেখুন অথবা সব ফিল্টার পরিষ্কার করুন
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogsResponse?.data?.data?.slice(0, 3).map((blog: TBlog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Blogs;

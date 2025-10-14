import { getAllBlogsFromDB } from "@/app/actions/blog";
import Container from "@/components/shared/Ui/Container";
import NoDataFound from "@/components/shared/Ui/NoDataFound";
import NoDataFoundBySearchFilter from "@/components/shared/Ui/NoDataFoundBySearchFilter";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { TBlog } from "@/types";
import { BlogCard } from "../../blogs/_components/BlogCard";

const Blogs = async () => {
  const blogsResponse = await getAllBlogsFromDB();

  return (
    <Container className="py-16 lg:py-20">
      <SectionTitle text="ইসলামিক ব্লগ" />

      <div>
        {!blogsResponse?.success ? (
          <NoDataFound
            title="কোন ব্লগ পাওয়া যায়নি"
            description="বর্তমানে কোনো ব্লগ উপলব্ধ নেই। নতুন কিছু প্রকাশ হলে এখানে দেখতে পারবেন।"
          />
        ) : (
          <>
            {blogsResponse?.data?.data?.length === 0 ? (
              <NoDataFoundBySearchFilter
                title="কোন ব্লগ পাওয়া যায়নি"
                description="অন্য কিছু খুঁজে দেখুন অথবা সব ফিল্টার পরিষ্কার করুন"
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogsResponse?.data?.data?.slice(0, 3).map((blog: TBlog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default Blogs;

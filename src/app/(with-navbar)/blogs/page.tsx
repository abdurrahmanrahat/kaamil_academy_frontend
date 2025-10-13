import { getAllBlogsFromDB } from "@/app/actions/blog";
import Container from "@/components/shared/Ui/Container";
import { TBlog } from "@/types";
import { BlogCard } from "./_components/BlogCard";
import BlogFiltering from "./_components/BlogFiltering";
import BlogSearch from "./_components/BlogSearch";

type TBlogSearchParams = {
  searchTerm?: string;
  tags?: string;
};

const BlogsPage = async (props: {
  searchParams: Promise<TBlogSearchParams>;
}) => {
  const searchParams = await props.searchParams;
  const { searchTerm, tags } = searchParams || {};

  // Prepare query params for server action
  const params: Record<string, string> = {};

  if (searchTerm) {
    params.searchTerm = searchTerm;
  }
  if (tags) {
    params.tags = tags;
  }

  const blogsResponse = await getAllBlogsFromDB(params);

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
      <div className="mx-auto px-4 pb-12 lg:pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          ইসলামিক ব্লগ
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          ইসলামিক জ্ঞান, শিক্ষা এবং দৈনন্দিন জীবনের গুরুত্বপূর্ণ বিষয়গুলি
          সম্পর্কে আমাদের নিয়মিত ব্লগ পড়ুন এবং নিজের দৈনন্দিন জীবনে প্রয়োগ
          করুন
        </p>

        <div className="max-w-md mx-auto mb-6">
          <BlogSearch />
        </div>

        <BlogFiltering />
      </div>

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
            {blogsResponse?.data?.data?.map((blog: TBlog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default BlogsPage;

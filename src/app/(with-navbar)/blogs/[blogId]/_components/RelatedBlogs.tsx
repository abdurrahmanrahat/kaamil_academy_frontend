import { getAllBlogsFromDB } from "@/app/actions/blog";
import NoDataFoundBySearchFilter from "@/components/shared/Ui/NoDataFoundBySearchFilter";
import { TBlog } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "../../_components/BlogCard";

const RelatedBlogs = async ({ tags }: { tags: string[] }) => {
  const params: Record<string, string> = {};

  if (tags?.length) {
    params.tags = tags.join(",");
  }

  const blogsResponse = await getAllBlogsFromDB(params);
  const blogs = blogsResponse?.data?.data || [];

  if (!blogsResponse.success || blogs.length === 0) {
    return (
      <NoDataFoundBySearchFilter
        title="কোন সম্পর্কিত ব্লগ পাওয়া যায়নি"
        description="এই ব্লগের সঙ্গে মিল পাওয়া যায়নি। নতুন কোনো ব্লগে খুঁজুন"
      />
    );
  }

  return (
    <div className="rounded-md">
      <div className="space-y-4">
        {blogs.slice(0, 4).map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/blogs"
          className="inline-flex items-center text-primary text-sm font-semibold"
        >
          <span>সব ব্লগ দেখুন</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default RelatedBlogs;

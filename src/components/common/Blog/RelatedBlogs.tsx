"use client";

import { useGetBlogsQuery } from "@/redux/api/blogApi";
import { TBlog } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "../Home/Blogs/BlogCard";
import BlogCardSkeleton from "../Home/Blogs/BlogCardSkeleton";

interface RelatedBlogsProps {
  currentBlogId: string;
  tags: string[];
}

export function RelatedBlogs({ currentBlogId, tags }: RelatedBlogsProps) {
  const { data: blogsData, isLoading } = useGetBlogsQuery({});

  // Filter related blogs based on tags and exclude current blog
  const getRelatedBlogs = () => {
    if (!blogsData || !blogsData.data) return [];

    return blogsData.data.data
      .filter((blog: any) => {
        // Exclude current blog
        if (blog._id === currentBlogId) return false;

        // Check if blog has any matching tags
        return blog.blogTags.some((tag: string) => tags.includes(tag));
      })
      .slice(0, 4); // Get only first 4 related blogs
  };

  // If no related blogs by tag, just get the most recent blogs
  const getRecentBlogs = () => {
    if (!blogsData || !blogsData.data) return [];

    return blogsData.data.data
      .filter((blog: any) => blog._id !== currentBlogId)
      .slice(0, 4);
  };

  const relatedBlogs = getRelatedBlogs();
  const blogsToShow = relatedBlogs.length > 0 ? relatedBlogs : getRecentBlogs();

  return (
    <div className="rounded-md sticky top-4">
      {/* <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 text-center">
        {relatedBlogs.length > 0 ? "সম্পর্কিত ব্লগ" : "সাম্প্রতিক ব্লগ"}
      </h3> */}

      <div>
        {isLoading ? (
          <>
            {[1, 2, 3, 4].map((i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </>
        ) : (
          <>
            {blogsToShow.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                কোন সম্পর্কিত ব্লগ পাওয়া যায়নি
              </p>
            ) : (
              <div className="space-y-4">
                {blogsToShow.map((blog: TBlog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))}
              </div>
            )}
          </>
        )}
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
}

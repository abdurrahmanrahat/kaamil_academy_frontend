"use client";

import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { useGetBlogsQuery } from "@/redux/api/blogApi";
import { TBlog } from "@/types";
import { BlogCard } from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

const Blogs = () => {
  const { data: blogsData, isLoading: isBlogLoading } = useGetBlogsQuery({});

  return (
    <Container className="py-16 lg:py-20">
      <SectionTitle text="ইসলামিক ব্লগ" />

      {isBlogLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogsData.data.data.slice(0, 3).map((blog: TBlog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Blogs;

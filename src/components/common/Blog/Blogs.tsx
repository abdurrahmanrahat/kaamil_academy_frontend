"use client";

import Container from "@/components/shared/Ui/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetBlogsQuery } from "@/redux/api/blogApi";
import { TBlog } from "@/types";
import { blogInitialTags } from "@/utils/tags";
import { BookOpen, Search } from "lucide-react";
import { useState } from "react";
import { BlogCard } from "../Home/Blogs/BlogCard";
import BlogCardSkeleton from "../Home/Blogs/BlogCardSkeleton";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { data: blogs, isLoading: isBlogLoading } = useGetBlogsQuery({});

  // Filter blogs based on search term and selected tag
  const filteredBlogs = blogs?.data.data.filter((blog: TBlog) => {
    const matchesSearch =
      blog.blogTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.blogDescription.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag ? blog.blogTags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  console.log("filteredBlogs", filteredBlogs);

  return (
    <Container className="py-16 lg:py-20">
      <div className="pb-12 lg:pb-16">
        <div className="mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            ইসলামিক ব্লগ
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            ইসলামিক জ্ঞান, শিক্ষা এবং দৈনন্দিন জীবনের গুরুত্বপূর্ণ বিষয়গুলি
            সম্পর্কে আমাদের নিয়মিত ব্লগ পড়ুন এবং নিজের দৈনন্দিন জীবনে প্রয়োগ
            করুন
          </p>

          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ব্লগ খুঁজুন..."
                className="w-full pl-8 lg:w-full border-0 bg-gray-100"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
              className={
                selectedTag === null
                  ? "bg-primary hover:bg-primary/90 text-white"
                  : "border-primary text-primary"
              }
            >
              <BookOpen className="h-4 w-4 mr-1" />
              সব
            </Button>

            {blogInitialTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className={
                  selectedTag === tag
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "border-primary text-primary"
                }
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {isBlogLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBlogs.map((blog: TBlog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}

      {filteredBlogs?.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-2xl font-medium text-gray-800">
            কোন ব্লগ পাওয়া যায়নি
          </h3>
          <p className="text-gray-500 mt-2">
            অন্য কিছু খুঁজে দেখুন অথবা সব ফিল্টার পরিষ্কার করুন
          </p>
        </div>
      )}
    </Container>
  );
};

export default Blogs;

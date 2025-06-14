"use client";

import { RelatedBlogs } from "@/components/common/Blog/RelatedBlogs";
import Container from "@/components/shared/Ui/Container";
import { MyLoader } from "@/components/shared/Ui/MyLoader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const params = useParams();
  const blogId = params.blogId as string;

  const { data: singleBlog, isLoading: isSingleBlogLoading } =
    useGetSingleBlogQuery(blogId);

  if (isSingleBlogLoading) {
    return <MyLoader text="Loading..." />;
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  if (!singleBlog) {
    return (
      <Container className="min-h-[80vh] w-full flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">
          ব্লগ পাওয়া যায়নি
        </h1>
        <p className="text-gray-600 mb-4">
          আপনি যে ব্লগটি খুঁজছেন তা পাওয়া যায়নি
        </p>
        <Link href="/blogs">
          <Button className="bg-primary hover:bg-primary/90">
            <ArrowLeft className="mr-1 h-4 w-4" />
            সব ব্লগ দেখুন
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="min-h-screen py-16 lg:py-20">
      <div className="pb-12">
        <div className="">
          <Link
            href="/blogs"
            className="inline-flex items-center text-primary font-medium mb-6"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            সব ব্লগ দেখুন
          </Link>

          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            {singleBlog.data.blogTitle}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(singleBlog.data.createdAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{singleBlog.data.authorDetails.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {singleBlog.data.blogTags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-primary text-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <div className="w-full mb-8 rounded-md">
            <Image
              src={singleBlog.data.blogImage}
              alt={singleBlog.data.blogTitle}
              width={600}
              height={400}
              className="object-cover rounded-md"
            />
          </div>

          <div
            className="prose prose-lg max-w-none blog-content"
            dangerouslySetInnerHTML={{
              __html: singleBlog.data.blogDescription.replace(
                /<p><\/p>/g,
                "<br />"
              ),
            }}
          />
        </div>

        {/* related blogs */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <RelatedBlogs
            currentBlogId={blogId}
            tags={singleBlog.data.blogTags}
          />
        </div>
      </div>
    </Container>
  );
}

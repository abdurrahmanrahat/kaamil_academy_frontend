"use client";

import EditBlogPage from "@/components/dashboard/Admin/ManageBlogs/EditBlogPage";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { useParams } from "next/navigation";

const SingleEditBlogPage = () => {
  const params = useParams();
  const blogId = params.blogId as string;

  return (
    <div className="min-h-screen py-8 md:py-12">
      <SectionTitle text="আর্টিকেল আপডেট করুন" />

      <div className="w-full max-w-[980px] mx-auto my-6">
        <EditBlogPage blogId={blogId} />
      </div>
    </div>
  );
};

export default SingleEditBlogPage;

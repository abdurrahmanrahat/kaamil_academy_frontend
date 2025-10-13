import { getSingleBlogFromDB } from "@/app/actions/blog";
import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import EditBlogForm from "./_components/EditBlogForm";

const SingleEditBlogPage = async (props: {
  params: Promise<{ blogId: string }>;
}) => {
  const params = await props.params;

  const blogId = params?.blogId;

  const singleBlogResponse = await getSingleBlogFromDB(blogId);

  if (!singleBlogResponse.success) {
    return (
      <Container className="min-h-[80vh] w-full flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">
          ব্লগ পাওয়া যায়নি
        </h1>
        <p className="text-gray-600 mb-4">
          আপনি যে ব্লগটি খুঁজছেন তা পাওয়া যায়নি
        </p>
        <Link href="/dashboard/admin/manage-blogs">
          <Button className="bg-primary hover:bg-primary/90">
            <ArrowLeft className="mr-1 h-4 w-4" />
            সব ব্লগ দেখুন
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-12">
      <SectionTitle text="আর্টিকেল আপডেট করুন" />

      <div className="w-full max-w-[980px] mx-auto my-6">
        <EditBlogForm blog={singleBlogResponse?.data} />
      </div>
    </div>
  );
};

export default SingleEditBlogPage;

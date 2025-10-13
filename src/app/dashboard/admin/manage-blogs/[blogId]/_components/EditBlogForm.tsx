"use client";

import { updateBlogInDB } from "@/app/actions/blog";
import KAForm from "@/components/shared/Forms/KAForm";
import KAImageUploader from "@/components/shared/Forms/KAImageUploader";
import KAInput from "@/components/shared/Forms/KAInput";
import KAMultiSelectWithExtra from "@/components/shared/Forms/KAMultiSelectWithExtra";
import KATextEditor from "@/components/shared/Forms/KATextEditor";
import { LoaderSpinner } from "@/components/shared/Ui/LoaderSpinner";
import { Button } from "@/components/ui/button";
import { TBlog } from "@/types";
import { blogInitialTags } from "@/utils/tags";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const img_hosting_token = process.env.NEXT_PUBLIC_imgBB_token;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const EditBlogForm = ({ blog }: { blog: TBlog }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleImageUpload = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });
      const imgRes = await res.json();

      if (imgRes.success) {
        return imgRes.data.display_url;
      } else {
        toast.error("Image upload failed");
        return null;
      }
    } catch (err: any) {
      toast.error(err.message || "Image upload failed");
      return null;
    }
  };

  const handleUpdateBlog = async (values: FieldValues) => {
    setIsLoading(true);

    const updatedData: { [key: string]: any } = {};

    if (values.image instanceof File) {
      const uploadedURL = await handleImageUpload(values.image);
      if (uploadedURL) updatedData.image = uploadedURL;
    }

    if (values.title) updatedData.title = values.title;
    if (values.description) updatedData.description = values.description;
    if (values.tags) updatedData.tags = values.tags;

    try {
      const res = await updateBlogInDB(blog._id, updatedData);

      setIsLoading(false);

      if (res.success) {
        toast.success(res.message);
      }
      router.push("/dashboard/admin/manage-blogs");
    } catch (error: any) {
      toast.error(
        error?.data?.errorSources?.[0]?.message || "Something went wrong."
      );

      setIsLoading(false);
    }
  };

  const defaultValues = {
    title: blog.title || "",
    image: blog.image || "",
    description: blog.description || "",
    tags: blog.tags || [],
  };
  return (
    <div>
      <KAForm onSubmit={handleUpdateBlog} defaultValues={defaultValues}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label htmlFor="title" className="block font-medium mb-[2px]">
              ব্লগ শিরোনাম
            </label>
            <KAInput name="title" />
          </div>

          <div>
            <label htmlFor="image" className="block font-medium mb-[2px]">
              ব্লগ কভার ইমেজ
            </label>
            <KAImageUploader
              name="image"
              className="w-full block py-[7px] px-3  text-[15px] focus:outline-none text-black border border-primary-100"
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="description"
            className="block text-start font-medium mb-[2px]"
          >
            ব্লগ বিস্তারিত বর্ণনা
          </label>

          <KATextEditor
            name="description"
            className="w-full block py-[7px] px-3 rounded text-[15px] focus:outline-none text-black border border-primary-100"
          />
        </div>

        <div className="mt-6">
          <label htmlFor="tags" className="block font-medium mb-[2px]">
            ব্লগ ট্যাগস
          </label>
          <KAMultiSelectWithExtra
            name="tags"
            className="border border-primary-100 rounded"
            initialTags={blogInitialTags}
          />
        </div>

        <div className="mt-8 flex justify-center items-center">
          <Button type="submit" className="h-11 cursor-pointer w-full">
            {isLoading ? (
              <span className="space-x-2 flex items-center">
                <LoaderSpinner />
                <span>Updating...</span>
              </span>
            ) : (
              "Update Blog"
            )}
          </Button>
        </div>
      </KAForm>
    </div>
  );
};

export default EditBlogForm;

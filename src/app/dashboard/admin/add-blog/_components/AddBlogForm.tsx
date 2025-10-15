"use client";

import { addBlogToDB } from "@/app/actions/blog";
import KAForm from "@/components/shared/Forms/KAForm";
import KAImageUploader from "@/components/shared/Forms/KAImageUploader";
import KAInput from "@/components/shared/Forms/KAInput";
import KAMultiSelectWithExtra from "@/components/shared/Forms/KAMultiSelectWithExtra";
import KATextEditor from "@/components/shared/Forms/KATextEditor";
import { LoaderSpinner } from "@/components/shared/Ui/LoaderSpinner";
import { Button } from "@/components/ui/button";
import { blogInitialTags } from "@/utils/tags";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(1, "Title required"),
  image: z.custom<File>((file) => file instanceof File, {
    message: "Image required",
  }),
  description: z.string().min(1, "Description required"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
});

const blogDefaultValues = {
  title: "",
  image: "",
  description: "",
  tags: [],
};

const img_hosting_token = process.env.NEXT_PUBLIC_imgBB_token;

const AddBlogForm = ({ userId }: { userId: string }) => {
  const [isUploadingBlog, setIsUploadingBlog] = useState(false);

  const router = useRouter();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const handleBlog = async (values: FieldValues) => {
    setIsUploadingBlog(true);
    const { image, ...restBlogValues } = values;

    // img hosting to imgBB
    const formData = new FormData();
    formData.append("image", image);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgRes) => {
        if (imgRes.success) {
          const imageURL = imgRes.data.display_url;

          //  new blog
          const blogData = {
            ...restBlogValues,
            image: imageURL,
            authorDetails: userId,
          };

          // Send new blog to database store
          try {
            const res = await addBlogToDB(blogData);

            if (res.success) {
              toast.success(res.message);

              router.push("/dashboard/admin/manage-blogs");
            } else {
              toast.error(res?.message || "Something went wrong!");
            }

            setIsUploadingBlog(false);
          } catch (error: any) {
            toast.error(error?.message || "Something went wrong!");

            setIsUploadingBlog(false);
          }
        }
      });
  };

  return (
    <KAForm
      onSubmit={handleBlog}
      defaultValues={blogDefaultValues}
      schema={blogSchema}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* blog title */}
        <div>
          <label
            htmlFor="title"
            className="block text-start font-medium mb-[2px]"
          >
            আর্টিকেল শিরোনাম{" "}
            <span className="text-red-600 font-semibold">*</span>
          </label>
          <KAInput name="title" />
        </div>

        {/* blog photo */}
        <div>
          <label
            htmlFor="image"
            className="block text-start font-medium mb-[2px]"
          >
            আর্টিকেল কাবার ইমেজ{" "}
            <span className="text-red-600 font-semibold">*</span>
          </label>

          <KAImageUploader name="image" className="" />
        </div>
      </div>

      {/* blog description */}
      <div className="flex flex-col gap-6 mt-6">
        <div>
          <label
            htmlFor="description"
            className="block text-start font-medium mb-[2px]"
          >
            আর্টিকেল বর্ণনা{" "}
            <span className="text-red-600 font-semibold">*</span>
          </label>

          <KATextEditor name="description" className="" />
        </div>

        {/* blog tags */}
        <div className="mt-6">
          <label
            htmlFor="tags"
            className="block text-start font-medium mb-[2px]"
          >
            ব্লগ ট্যাগ <span className="text-red-600 font-semibold">*</span>
          </label>
          <KAMultiSelectWithExtra
            name="tags"
            className="border border-primary-100 rounded"
            initialTags={blogInitialTags}
          />
        </div>
      </div>

      {/* submit button */}
      <div className="mt-8 flex justify-center items-center">
        <Button
          className="h-11 cursor-pointer w-full"
          type="submit"
          disabled={isUploadingBlog}
        >
          {isUploadingBlog ? (
            <span className="space-x-2 flex items-center">
              <LoaderSpinner />
              <span>Uploading...</span>
            </span>
          ) : (
            "Upload Blog"
          )}
        </Button>
      </div>
    </KAForm>
  );
};

export default AddBlogForm;

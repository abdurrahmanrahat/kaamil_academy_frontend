"use client";

import KAForm from "@/components/shared/Forms/KAForm";
import KAImageUploader from "@/components/shared/Forms/KAImageUploader";
import KAInput from "@/components/shared/Forms/KAInput";
import KAMultiSelectWithExtra from "@/components/shared/Forms/KAMultiSelectWithExtra";
import KATextEditor from "@/components/shared/Forms/KATextEditor";
import { LoaderSpinner } from "@/components/shared/Ui/LoaderSpinner";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { useGetCurrentUserByEmailQuery } from "@/redux/api/userApi";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/reducers/authSlice";
import { blogInitialTags } from "@/utils/tags";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const blogSchema = z.object({
  blogTitle: z.string().min(1, "Title required"),
  blogImage: z.custom<File>((file) => file instanceof File, {
    message: "Image required",
  }),
  blogDescription: z.string().min(1, "Description required"),
  blogTags: z.array(z.string()).min(1, "At least one tag is required"),
});

const blogDefaultValues = {
  blogTitle: "",
  blogImage: "",
  blogDescription: "",
  blogTags: [],
};

const img_hosting_token = process.env.NEXT_PUBLIC_imgBB_token;

const AddBlogPage = () => {
  const [isUploadingBlog, setIsUploadingBlog] = useState(false);

  const user = useAppSelector(useCurrentUser);
  const { data: currentUser } = useGetCurrentUserByEmailQuery(
    user?.email as string
  );
  const router = useRouter();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  // redux api
  const [addBlog, { isLoading: isAddBlogLoading }] = useAddBlogMutation();

  const handleBlog = async (values: FieldValues) => {
    setIsUploadingBlog(true);
    const { blogImage, ...restBlogValues } = values;

    // img hosting to imgBB
    const formData = new FormData();
    formData.append("image", blogImage);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgRes) => {
        if (imgRes.success) {
          const blogImageURL = imgRes.data.display_url;

          //  new blog
          const blogData = {
            ...restBlogValues,
            blogImage: blogImageURL,
            authorDetails: currentUser.data._id,
          };

          // Send new blog to database store
          try {
            const res = await addBlog(blogData).unwrap();

            if (res.success) {
              toast.success(res.message);
            }

            router.push("/dashboard/admin/manage-blogs");
            setIsUploadingBlog(false);
          } catch (error: any) {
            toast.error(
              error?.data?.errorSources[0].message || "Something went wrong!"
            );

            setIsUploadingBlog(false);
          }
        }
      });
  };

  return (
    <div className="min-h-screen py-8 md:py-12">
      <SectionTitle text="আর্টিকেল লিখুন" />

      <div className="w-full max-w-[980px] mx-auto my-6">
        <KAForm
          onSubmit={handleBlog}
          defaultValues={blogDefaultValues}
          schema={blogSchema}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* blog title */}
            <div>
              <label
                htmlFor="blogTitle"
                className="block text-start font-medium mb-[2px]"
              >
                আর্টিকেল শিরোনাম{" "}
                <span className="text-red-600 font-semibold">*</span>
              </label>
              <KAInput name="blogTitle" />
            </div>

            {/* blog photo */}
            <div>
              <label
                htmlFor="blogImage"
                className="block text-start font-medium mb-[2px]"
              >
                আর্টিকেল কাবার ইমেজ{" "}
                <span className="text-red-600 font-semibold">*</span>
              </label>

              <KAImageUploader name="blogImage" className="" />
            </div>
          </div>

          {/* blog description */}
          <div className="flex flex-col gap-6 mt-6">
            <div>
              <label
                htmlFor="blogDescription"
                className="block text-start font-medium mb-[2px]"
              >
                আর্টিকেল বর্ণনা{" "}
                <span className="text-red-600 font-semibold">*</span>
              </label>

              <KATextEditor name="blogDescription" className="" />
            </div>

            {/* blog tags */}
            <div className="mt-6">
              <label
                htmlFor="blogTags"
                className="block text-start font-medium mb-[2px]"
              >
                ব্লগ ট্যাগ <span className="text-red-600 font-semibold">*</span>
              </label>
              <KAMultiSelectWithExtra
                name="blogTags"
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
              disabled={isUploadingBlog || isAddBlogLoading}
            >
              {isUploadingBlog || isAddBlogLoading ? (
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
      </div>
    </div>
  );
};

export default AddBlogPage;

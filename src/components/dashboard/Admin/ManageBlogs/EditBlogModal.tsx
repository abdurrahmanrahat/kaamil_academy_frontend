"use client";

import KAForm from "@/components/shared/Forms/KAForm";
import KAImageUploader from "@/components/shared/Forms/KAImageUploader";
import KAInput from "@/components/shared/Forms/KAInput";
import KAMultiSelectWithExtra from "@/components/shared/Forms/KAMultiSelectWithExtra";
import KATextEditor from "@/components/shared/Forms/KATextEditor";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUpdateBlogMutation } from "@/redux/api/blogApi";
import { TBlog } from "@/types";
import { FieldValues } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "sonner";

const blogInitialTags = ["quran", "hadith", "islamic", "religion"];

const img_hosting_token = process.env.NEXT_PUBLIC_imgBB_token;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const EditBlogModal = ({ blog }: { blog: TBlog }) => {
  const [updateBlog] = useUpdateBlogMutation();

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
    const updatedData: { [key: string]: any } = {};

    if (values.blogImage instanceof File) {
      const uploadedURL = await handleImageUpload(values.blogImage);
      if (uploadedURL) updatedData.blogImage = uploadedURL;
    }

    if (values.blogTitle) updatedData.blogTitle = values.blogTitle;
    if (values.blogDescription)
      updatedData.blogDescription = values.blogDescription;
    if (values.blogTags) updatedData.blogTags = values.blogTags;

    const payload = {
      blogId: blog._id,
      updatedData,
    };

    try {
      const res = await updateBlog(payload).unwrap();

      if (res.success) {
        toast.success(res.message);
      }
    } catch (error: any) {
      toast.error(
        error?.data?.errorSources?.[0]?.message || "Something went wrong."
      );
    }
  };

  const defaultValues = {
    blogTitle: blog.blogTitle || "",
    blogImage: blog.blogImage || "",
    blogDescription: blog.blogDescription || "",
    blogTags: blog.blogTags || [],
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <FaRegEdit className="cursor-pointer w-5 h-5" />
      </DialogTrigger>
      <DialogContent className="max-w-[720px] max-h-[80%] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">Edit Blog</DialogTitle>
          <DialogDescription>
            Update only the fields you want to change.
          </DialogDescription>
        </DialogHeader>

        <KAForm onSubmit={handleUpdateBlog} defaultValues={defaultValues}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label htmlFor="blogTitle" className="block font-medium mb-[2px]">
                ব্লগ শিরোনাম
              </label>
              <KAInput name="blogTitle" />
            </div>

            <div>
              <label htmlFor="blogImage" className="block font-medium mb-[2px]">
                ব্লগ কভার ইমেজ
              </label>
              <KAImageUploader
                name="blogImage"
                className="w-full block py-[7px] px-3  text-[15px] focus:outline-none text-black border border-primary-100"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="blogDescription"
              className="block text-start font-medium mb-[2px]"
            >
              ব্লগ বিস্তারিত বর্ণনা
            </label>

            <KATextEditor
              name="blogDescription"
              className="w-full block py-[7px] px-3 rounded text-[15px] focus:outline-none text-black border border-primary-100"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="blogTags" className="block font-medium mb-[2px]">
              ব্লগ ট্যাগস
            </label>
            <KAMultiSelectWithExtra
              name="blogTags"
              className="border border-primary-100 rounded"
              initialTags={blogInitialTags}
            />
          </div>

          <div className="mt-8 flex justify-center items-center">
            <DialogClose asChild>
              <Button type="submit" className="h-11 cursor-pointer w-full">
                Update Blog
              </Button>
            </DialogClose>
          </div>
        </KAForm>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditBlogModal;

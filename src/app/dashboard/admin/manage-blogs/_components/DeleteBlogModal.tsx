"use client";

import { deleteBlogFromDB } from "@/app/actions/blog";
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
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

const DeleteBlogModal = ({ blogId }: { blogId: string }) => {
  const handleDeleteBlog = async () => {
    try {
      const res = await deleteBlogFromDB(blogId);

      if (res.success) {
        toast.success(res.message);
      }
    } catch (error: any) {
      toast.error(
        error?.data?.errorSources[0].message || "Something went wrong!"
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trash2 className="text-red-700 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">
            Blog Deletion
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to remove this blog? This action cannot be
            undone!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center space-x-4 mt-6">
          <DialogClose asChild>
            <Button variant="outline">Return</Button>
          </DialogClose>
          <DialogClose asChild onClick={handleDeleteBlog}>
            <Button variant="destructive">Delete</Button>
          </DialogClose>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBlogModal;

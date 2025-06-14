"use client";

import DeleteBlogModal from "@/components/dashboard/Admin/ManageBlogs/DeleteBlogModal";
import { MyLoader } from "@/components/shared/Ui/MyLoader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBlogsQuery } from "@/redux/api/blogApi";
import { TBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";

const ManageBlogs = () => {
  const { data: blogs, isLoading: isBlogLoading } = useGetBlogsQuery({});

  if (isBlogLoading) {
    return <MyLoader text="Loading..." />;
  }

  return (
    <div className="py-6 min-h-screen">
      <div>
        {blogs?.data.data.length > 0 ? (
          <Table className="border border-primary">
            <TableHeader className="">
              <TableRow className="bg-primary text-white">
                <TableHead className="text-base font-medium py-2">#</TableHead>
                <TableHead className="text-base font-medium py-2 min-w-[120px]">
                  Blog Image
                </TableHead>
                <TableHead className="text-base font-medium py-2 min-w-[200px]">
                  Blog Title
                </TableHead>

                <TableHead className="text-base font-medium py-2 min-w-[140px]">
                  Author Name
                </TableHead>

                <TableHead className="text-base font-medium py-2">
                  Edit
                </TableHead>
                <TableHead className="text-base font-medium py-2">
                  Delete
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs?.data.data.map((blog: TBlog, index: number) => (
                <TableRow key={blog._id} className="">
                  <TableCell className="font-semibold">{index + 1}</TableCell>
                  <TableCell>
                    <Image
                      src={blog.blogImage}
                      alt={blog.blogTitle.slice(0, 4)}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    {blog.blogTitle}
                  </TableCell>

                  <TableCell>{blog.authorDetails.name}</TableCell>

                  <TableCell>
                    {/* <EditBlogModal blog={blog} /> */}
                    <Link href={`/dashboard/admin/manage-blogs/${blog._id}`}>
                      <FaRegEdit className="cursor-pointer w-5 h-5" />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <DeleteBlogModal blogId={blog._id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex justify-center items-center h-screen w-full">
            <h2 className="text-2xl font-semibold">No Blog Found!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBlogs;

import { getAllBlogsFromDB } from "@/app/actions/blog";

import NoDataFound from "@/components/shared/Ui/NoDataFound";
import NoDataFoundBySearchFilter from "@/components/shared/Ui/NoDataFoundBySearchFilter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import DeleteBlogModal from "./_components/DeleteBlogModal";

const ManageBlogs = async () => {
  const blogsResponse = await getAllBlogsFromDB();

  return (
    <div className="py-6 min-h-screen">
      <div>
        {!blogsResponse?.success ? (
          <NoDataFound
            title="কোন ব্লগ পাওয়া যায়নি"
            description="বর্তমানে কোনো ব্লগ উপলব্ধ নেই। নতুন কিছু প্রকাশ হলে এখানে দেখতে পারবেন।"
          />
        ) : (
          <>
            {blogsResponse?.data?.data?.length > 0 ? (
              <Table className="">
                <TableHeader className="">
                  <TableRow className="bg-primary text-white">
                    <TableHead className="text-base font-medium py-3 min-w-[20px] text-center">
                      #
                    </TableHead>
                    <TableHead className="text-base font-medium py-3 min-w-[120px]">
                      Blog Image
                    </TableHead>
                    <TableHead className="text-base font-medium py-3 min-w-[200px]">
                      Blog Title
                    </TableHead>

                    <TableHead className="text-base font-medium py-3 min-w-[140px]">
                      Author Name
                    </TableHead>

                    <TableHead className="text-base font-medium py-3">
                      Edit
                    </TableHead>
                    <TableHead className="text-base font-medium py-3">
                      Delete
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogsResponse?.data?.data?.map(
                    (blog: TBlog, index: number) => (
                      <TableRow key={blog._id} className="">
                        <TableCell className="font-semibold text-center">
                          {index + 1}
                        </TableCell>
                        <TableCell>
                          <Image
                            src={blog.image}
                            alt={blog.title.slice(0, 4)}
                            width={80}
                            height={80}
                            className="rounded-full"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {blog.title}
                        </TableCell>

                        <TableCell>{blog.authorDetails.name}</TableCell>

                        <TableCell>
                          {/* <EditBlogModal blog={blog} /> */}
                          <Link
                            href={`/dashboard/admin/manage-blogs/${blog._id}`}
                          >
                            <FaRegEdit className="cursor-pointer w-5 h-5" />
                          </Link>
                        </TableCell>
                        <TableCell>
                          <DeleteBlogModal blogId={blog._id} />
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            ) : (
              <NoDataFoundBySearchFilter
                title="কোন ব্লগ পাওয়া যায়নি"
                description="অন্য কিছু খুঁজে দেখুন অথবা সব ফিল্টার পরিষ্কার করুন"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ManageBlogs;

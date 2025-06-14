import { CardContent } from "@/components/ui/card";
import { TBlog } from "@/types";
import { stripHtml, truncateText } from "@/utils/conversion";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({ blog }: { blog: TBlog }) {
  return (
    <div className="shadow-cardLightShadow rounded-md">
      <div className="aspect-video relative">
        <Image
          src={blog.blogImage || "/placeholder.svg?height=200&width=400"}
          alt={blog.blogTitle}
          fill
          className="object-cover rounded-t-md"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          {blog.blogTitle}
        </h3>
        <p className="text-muted-foreground text-sm">
          {truncateText(stripHtml(blog.blogDescription), 140)}
        </p>
      </CardContent>
      <div className="px-4 pt-0 pb-4">
        <Link href={`/blogs/${blog._id}`}>
          <button className="text-sm font-medium text-primary cursor-pointer">
            আরও পড়ুন
          </button>
        </Link>
      </div>
    </div>
  );
}

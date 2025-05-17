import { CardContent } from "@/components/ui/card";
import Image from "next/image";

interface BlogPost {
  _id: string;
  title: string;
  image: string;
  description: string;
}

interface BlogCardProps {
  blog: BlogPost;
}

export function BlogCard({ blog }: BlogCardProps) {
  // Truncate description to 100 characters
  const truncatedDescription =
    blog.description.length > 100
      ? `${blog.description.substring(0, 100)}...`
      : blog.description;

  return (
    <div className="shadow-cardLightShadow rounded-md">
      <div className="aspect-video relative">
        <Image
          src={blog.image || "/placeholder.svg?height=200&width=400"}
          alt={blog.title}
          fill
          className="object-cover rounded-t-md"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-muted-foreground text-sm">{truncatedDescription}</p>
      </CardContent>
      <div className="px-4 pt-0">
        <button className="text-sm font-medium text-primary cursor-pointer">
          আরও পড়ুন
        </button>
      </div>
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const BlogCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="overflow-hidden shadow-cardLightShadow">
        {/* Image skeleton */}
        <div className="relative">
          <Skeleton className="w-full h-48" />
          {/* Overlay text skeletons on image */}
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4 bg-white/20" />
              <Skeleton className="h-4 w-1/2 bg-white/20" />
            </div>
            <div className="flex justify-between items-end">
              <Skeleton className="h-4 w-1/3 bg-white/20" />
              <Skeleton className="h-8 w-8 rounded bg-white/20" />
            </div>
          </div>
        </div>

        {/* Content skeleton */}

        <CardContent className="pt-0">
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Author skeleton */}
          <div className="mt-4 pt-4">
            <Skeleton className="h-4 w-24" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCardSkeleton;

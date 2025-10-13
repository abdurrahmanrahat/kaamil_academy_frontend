"use client";

import { Button } from "@/components/ui/button";
import { blogInitialTags } from "@/utils/tags";
import { BookOpen } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogFiltering = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Local state to hold multiple selected tags
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Initialize tags from URL
  useEffect(() => {
    const currentTags = searchParams.get("tags");
    if (currentTags) {
      setSelectedTags(currentTags.split(","));
    } else {
      setSelectedTags([]);
    }
  }, [searchParams]);

  // Handle tag toggle
  const handleTagToggle = (tag: string | null) => {
    let updatedTags: string[] = [];

    if (tag === null) {
      // “সব” clicked → clear all
      updatedTags = [];
    } else {
      if (selectedTags.includes(tag)) {
        // remove tag if already selected
        updatedTags = selectedTags.filter((t) => t !== tag);
      } else {
        // add tag if not selected
        updatedTags = [...selectedTags, tag];
      }
    }

    setSelectedTags(updatedTags);

    const params = new URLSearchParams(searchParams.toString());

    // only set query if there’s at least one tag selected
    if (updatedTags.length > 0) {
      params.set("tags", updatedTags.join(","));
    } else {
      params.delete("tags");
    }

    const newUrl = params.toString() ? `/blogs?${params.toString()}` : "/blogs";
    router.replace(newUrl, { scroll: false });
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {/* All / Clear Button */}
      <Button
        variant={selectedTags.length === 0 ? "default" : "outline"}
        size="sm"
        onClick={() => handleTagToggle(null)}
        className={
          selectedTags.length === 0
            ? "bg-primary hover:bg-primary/90 text-white"
            : "border-primary text-primary hover:bg-primary/10"
        }
      >
        <BookOpen className="h-4 w-4 mr-1" />
        সব
      </Button>

      {/* Dynamic Multi-select Tags */}
      {blogInitialTags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <Button
            key={tag}
            variant={isSelected ? "default" : "outline"}
            size="sm"
            onClick={() => handleTagToggle(tag)}
            className={
              isSelected
                ? "bg-primary hover:bg-primary/90 text-white"
                : "border-primary text-primary hover:bg-primary/10"
            }
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
};

export default BlogFiltering;

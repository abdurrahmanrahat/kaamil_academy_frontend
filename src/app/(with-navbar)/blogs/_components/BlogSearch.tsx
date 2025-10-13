"use client";

import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from existing URL params on mount
  useEffect(() => {
    setSearchTerm(searchParams.get("searchTerm") || "");
  }, [searchParams]);

  // Handle search instantly as user types
  const handleSearch = (value: string) => {
    setSearchTerm(value);

    const params = new URLSearchParams();
    if (value.trim()) {
      params.append("searchTerm", value.trim());
    }

    router.replace(`/blogs?${params.toString()}`, { scroll: false });
  };

  // handle Enter key press (for better UX)
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const params = new URLSearchParams();
      if (searchTerm.trim()) {
        params.append("searchTerm", searchTerm.trim());
      }
      router.replace(`/blogs?${params.toString()}`, { scroll: false });
    }
  };

  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="ব্লগ খুঁজুন..."
        className="w-full pl-8 lg:w-full border-0 bg-gray-100 focus-visible:ring-1 focus-visible:ring-primary"
      />
    </div>
  );
};

export default BlogSearch;

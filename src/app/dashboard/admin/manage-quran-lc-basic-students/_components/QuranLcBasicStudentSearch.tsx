"use client";

import { Input } from "@/components/ui/input";
import useDebounced from "@/hooks/useDebounced";
import { Search as SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const QuranLcBasicStudentSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounced(searchTerm, 600);

  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize from existing URL params on mount
  useEffect(() => {
    const existing = searchParams.get("searchTerm") || "";
    setSearchTerm(existing);
  }, [searchParams]);

  // Update URL whenever debounced value changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedSearchTerm.trim()) {
      params.set("searchTerm", debouncedSearchTerm.trim());
    } else {
      params.delete("searchTerm");
    }

    const newUrl = params.toString()
      ? `/dashboard/admin/manage-quran-lc-basic-students?${params.toString()}`
      : `/dashboard/admin/manage-quran-lc-basic-students`;

    router.replace(newUrl, { scroll: false });
  }, [debouncedSearchTerm, router, searchParams]);

  // Handle Enter press for instant search
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const params = new URLSearchParams();

      if (searchTerm.trim()) {
        params.set("searchTerm", searchTerm.trim());
      }

      router.replace(
        `/dashboard/admin/manage-quran-lc-basic-students?${params.toString()}`,
        { scroll: false }
      );
    }
  };

  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // 🔹 no direct router call here
        onKeyDown={handleKeyPress}
        placeholder="Find students by username or number..."
        className="w-full pl-8 lg:w-full border-0 bg-gray-100 focus-visible:ring-1 focus-visible:ring-primary"
      />
    </div>
  );
};

export default QuranLcBasicStudentSearch;

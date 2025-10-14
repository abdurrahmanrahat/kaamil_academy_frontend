"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSelectPlaceholder from "@/hooks/useSelectPlaceholder";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const QuranLcBasicStudentStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userStatusPlaceholder, allStudentsPlaceholder } =
    useSelectPlaceholder();

  const [studentStatus, setStudentStatus] = useState<string>("");

  // Initialize from URL
  useEffect(() => {
    const statusParam = searchParams.get("status");
    if (statusParam) {
      setStudentStatus(statusParam);
    } else {
      setStudentStatus("");
    }
  }, [searchParams]);

  // Handle selection change
  const handleSelectStatus = (currStatus: string) => {
    setStudentStatus(currStatus);

    const params = new URLSearchParams(searchParams.toString());

    if (currStatus === "all") {
      params.delete("status");
    } else {
      params.set("status", currStatus);
    }

    const newUrl = params.toString()
      ? `/dashboard/admin/manage-quran-lc-basic-students?${params.toString()}`
      : `/dashboard/admin/manage-quran-lc-basic-students`;

    router.replace(newUrl, { scroll: false });
  };

  return (
    <Select value={studentStatus} onValueChange={handleSelectStatus}>
      <SelectTrigger className="md:w-[124px] lg:w-[170px] cursor-pointer">
        <SelectValue placeholder={userStatusPlaceholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">{allStudentsPlaceholder}</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default QuranLcBasicStudentStatusFilter;

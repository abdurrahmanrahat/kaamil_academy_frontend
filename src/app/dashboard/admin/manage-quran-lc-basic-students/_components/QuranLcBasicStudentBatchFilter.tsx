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

const QuranLcBasicStudentBatchFilter = () => {
  const [studentsBatchNo, setStudentsBatchNo] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const { batchPlaceholder, allStudentsPlaceholder } = useSelectPlaceholder();

  // Initialize from URL param
  useEffect(() => {
    const batchParam = searchParams.get("batch");

    if (batchParam) {
      setStudentsBatchNo(batchParam);
    } else {
      setStudentsBatchNo("");
    }
  }, [searchParams]);

  // 🔹 Handle batch change
  const handleBatchChange = (currBatch: string) => {
    setStudentsBatchNo(currBatch);

    const params = new URLSearchParams(searchParams.toString());

    if (currBatch === "all") {
      params.delete("batch");
    } else {
      params.set("batch", currBatch);
    }

    const newUrl = params.toString()
      ? `/dashboard/admin/manage-quran-lc-basic-students?${params.toString()}`
      : "/dashboard/admin/manage-quran-lc-basic-students";

    router.replace(newUrl, { scroll: false });
  };

  return (
    <Select value={studentsBatchNo} onValueChange={handleBatchChange}>
      <SelectTrigger className="md:w-[124px] lg:w-[170px] cursor-pointer">
        <SelectValue placeholder={batchPlaceholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">{allStudentsPlaceholder}</SelectItem>
          <SelectItem value="batch-01">Batch 01</SelectItem>
          <SelectItem value="batch-02">Batch 02</SelectItem>
          <SelectItem value="batch-03">Batch 03</SelectItem>
          <SelectItem value="batch-04">Batch 04</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default QuranLcBasicStudentBatchFilter;

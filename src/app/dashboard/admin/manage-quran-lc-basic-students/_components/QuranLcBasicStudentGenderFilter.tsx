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

const QuranLcBasicStudentGenderFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { genderPlaceholder, allStudentsPlaceholder } = useSelectPlaceholder();

  const [studentGender, setStudentGender] = useState<string>("");

  // Initialize from URL param
  useEffect(() => {
    const genderParam = searchParams.get("userGender");

    if (genderParam) {
      setStudentGender(genderParam);
    } else {
      setStudentGender("");
    }
  }, [searchParams]);

  // Handle gender selection
  const handleGenderChange = (currGender: string) => {
    setStudentGender(currGender);

    const params = new URLSearchParams(searchParams.toString());

    if (currGender === "all") {
      params.delete("userGender");
    } else {
      params.set("userGender", currGender);
    }

    const newUrl = params.toString()
      ? `/dashboard/admin/manage-quran-lc-basic-students?${params.toString()}`
      : `/dashboard/admin/manage-quran-lc-basic-students`;

    router.replace(newUrl, { scroll: false });
  };

  return (
    <Select value={studentGender} onValueChange={handleGenderChange}>
      <SelectTrigger className="md:w-[124px] lg:w-[170px] cursor-pointer">
        <SelectValue placeholder={genderPlaceholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">{allStudentsPlaceholder}</SelectItem>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default QuranLcBasicStudentGenderFilter;

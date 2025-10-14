"use client";

import { updateQuranLCBasicStudentInDB } from "@/app/actions/quran-lc-basic";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { toast } from "sonner";

const StatusChangeDropdown = ({
  studentId,
  currentStatus,
}: {
  studentId: string;
  currentStatus: string;
}) => {
  const updateStatus = async (newStatus: string) => {
    try {
      const res = await updateQuranLCBasicStudentInDB(studentId, {
        status: newStatus,
      });

      if (res?.success) {
        toast.success(res.message);
      } else {
        toast.error(res?.message || "Something went wrong!");
      }
    } catch (error: any) {
      console.error("Error updating status:", error);
      toast.error(
        error?.data?.errorSources[0].message || "something went wrong!"
      );
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="hover:bg-transparent hover:text-current"
      >
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Ellipsis className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuRadioGroup
          value={currentStatus}
          onValueChange={updateStatus}
        >
          <DropdownMenuRadioItem
            value="default"
            className={`${
              currentStatus === "default" ? "text-green-500" : ""
            } cursor-pointer`}
          >
            Default
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="waiting"
            className={`${
              currentStatus === "waiting" ? "text-green-500" : ""
            } cursor-pointer`}
          >
            Waiting
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="completed"
            className={`${
              currentStatus === "completed" ? "text-green-500" : ""
            } cursor-pointer`}
          >
            Completed
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusChangeDropdown;

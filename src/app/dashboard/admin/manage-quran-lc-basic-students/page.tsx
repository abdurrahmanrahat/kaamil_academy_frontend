"use client";

import DeleteStudentModal from "@/components/dashboard/Admin/ManageQuranLCBasic/DeleteStudentModal";
import StatusChangeDropdown from "@/components/dashboard/Admin/ManageQuranLCBasic/StatusChangeDropdown";
import StudentDetailsModal from "@/components/dashboard/Admin/ManageQuranLCBasic/StudentDetailsModal";
import { MyLoader } from "@/components/shared/Ui/MyLoader";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useDebounced from "@/hooks/useDebounced";
import useSelectPlaceholder from "@/hooks/useSelectPlaceholder";
import { useGetQuranLCBasicStudentsQuery } from "@/redux/api/quran-lc-basicApi";
import { TQuranLCBasic } from "@/types/quran-lc-basic.type";
import { Search } from "lucide-react";
import { useState } from "react";

const ManageQuranLSStudent = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [studentStatus, setStudentStatus] = useState<string>("");
  const [studentsBatchNo, setStudentsBatchNo] = useState<string>("");
  const [studentGender, setStudentGender] = useState<string>("");

  const debouncedSearchTerm = useDebounced(searchTerm, 800);
  const {
    batchPlaceholder,
    genderPlaceholder,
    userStatusPlaceholder,
    allStudentsPlaceholder,
  } = useSelectPlaceholder();

  const query: Record<string, any> = {};

  if (searchTerm) {
    query["searchTerm"] = searchTerm;
  }
  if (studentStatus) {
    query["status"] = studentStatus;
  }
  if (studentsBatchNo) {
    query["batch"] = studentsBatchNo;
  }
  if (studentGender) {
    query["userGender"] = studentGender;
  }
  if (debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data: quranLCBasicStudents, isLoading } =
    useGetQuranLCBasicStudentsQuery({
      ...query,
    });

  if (isLoading) {
    return <MyLoader text="Loading..." />;
  }

  // for filtering
  const handleSelectUserStatus = (currStatus: string) => {
    if (currStatus === "all") {
      setStudentStatus("");
    } else {
      setStudentStatus(currStatus);
    }
  };
  const handleSelectUserBatchNo = (currBatch: string) => {
    if (currBatch === "all") {
      setStudentsBatchNo("");
    } else {
      setStudentsBatchNo(currBatch);
    }
  };
  const handleSelectUserGender = (currGender: string) => {
    if (currGender === "all") {
      setStudentGender("");
    } else {
      setStudentGender(currGender);
    }
  };

  return (
    <div className="py-6 min-h-screen">
      {/* search, filter */}
      <div className="md:flex justify-between gap-12 mb-10 mt-4">
        <div className="w-full mb-4 md:mb-0">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Find students by username or number"
              className="w-full pl-8 lg:w-full border-0 bg-gray-100"
            />
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-end">
          {/* batch no filtering */}
          <Select
            onValueChange={(currBatch) => handleSelectUserBatchNo(currBatch)}
          >
            <SelectTrigger className="md:w-[124px] lg:w-[170px] cursor-pointer">
              <SelectValue placeholder={batchPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="all">{allStudentsPlaceholder}</SelectItem>
                <SelectItem value="batch-01">Batch 01</SelectItem>
                <SelectItem value="batch-02">Batch 02</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* gender filtering */}
          <Select
            onValueChange={(currGender) => handleSelectUserGender(currGender)}
          >
            <SelectTrigger className="md:w-[124px] lg:w-[170px] cursor-pointer">
              <SelectValue placeholder={genderPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="all">{allStudentsPlaceholder}</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* student status filtering */}
          <Select
            onValueChange={(currStatus) => handleSelectUserStatus(currStatus)}
          >
            <SelectTrigger className="md:w-[124px] lg:w-[170px] cursor-pointer">
              <SelectValue placeholder={userStatusPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="all">{allStudentsPlaceholder}</SelectItem>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="waiting">Waiting</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        {quranLCBasicStudents?.data.data.length > 0 ? (
          <Table className="border">
            <TableHeader className="">
              <TableRow className="bg-primary text-white">
                <TableHead className="text-base text-white font-medium py-3">
                  #
                </TableHead>
                <TableHead className="text-base text-white font-medium py-3">
                  Username
                </TableHead>

                <TableHead className="text-base text-white font-medium py-3">
                  Payment Method
                </TableHead>
                <TableHead className="text-base text-white font-medium py-3">
                  Payment Digits
                </TableHead>
                <TableHead className="text-base text-white font-medium py-3">
                  Phone Number
                </TableHead>
                {/* <TableHead className="text-base text-white font-medium py-3">
                  WhatsApp
                </TableHead> */}
                <TableHead className="text-base text-white font-medium py-3">
                  Batch
                </TableHead>
                <TableHead className="text-base text-white font-medium py-3">
                  Status
                </TableHead>
                <TableHead className="text-base text-white font-medium py-3">
                  Info
                </TableHead>
                <TableHead className="text-base text-white font-medium py-3">
                  Action
                </TableHead>
                <TableHead className="text-base text-white font-medium py-3">
                  Delete
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quranLCBasicStudents?.data.data.map(
                (user: TQuranLCBasic, index: number) => (
                  <TableRow
                    key={user._id}
                    className={`${
                      user.status === "completed" &&
                      "bg-green-500 hover:bg-green-500 text-white"
                    } ${
                      user.status === "waiting" &&
                      "bg-red-400 hover:bg-red-500 text-white"
                    } `}
                  >
                    <TableCell className="font-semibold">{index + 1}</TableCell>
                    <TableCell className="font-medium">
                      {user.userName}
                    </TableCell>
                    <TableCell>{user.paymentMethod}</TableCell>
                    <TableCell>{user.RegFeeNumber}</TableCell>
                    <TableCell>{user.phoneNumber}</TableCell>
                    {/* <TableCell>{user.whatsAppNumber}</TableCell> */}
                    <TableCell>{user.batch}</TableCell>
                    <TableCell className="capitalize">{user.status}</TableCell>
                    <TableCell>
                      <StudentDetailsModal student={user} />
                    </TableCell>
                    <TableCell>
                      <StatusChangeDropdown
                        studentId={user._id}
                        currentStatus={user.status}
                      />
                    </TableCell>
                    <TableCell>
                      <DeleteStudentModal studentId={user._id} />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        ) : (
          <div className="flex justify-center items-center h-screen w-full">
            <h2 className="text-2xl font-semibold">No Student Found!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageQuranLSStudent;

// completed - green
// waiting - red

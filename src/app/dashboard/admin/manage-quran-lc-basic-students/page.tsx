import { getQuranLCBasicStudentsFromDB } from "@/app/actions/quran-lc-basic";
import NoDataFound from "@/components/shared/Ui/NoDataFound";
import NoDataFoundBySearchFilter from "@/components/shared/Ui/NoDataFoundBySearchFilter";
import KAPagination from "@/components/shared/Ui/Pagination/KAPagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TQuranLCBasic } from "@/types/quran-lc-basic.type";
import DeleteStudentModal from "./_components/DeleteStudentModal";
import QuranLcBasicStudentBatchFilter from "./_components/QuranLcBasicStudentBatchFilter";
import QuranLcBasicStudentGenderFilter from "./_components/QuranLcBasicStudentGenderFilter";
import QuranLcBasicStudentSearch from "./_components/QuranLcBasicStudentSearch";
import QuranLcBasicStudentStatusFilter from "./_components/QuranLcBasicStudentStatusFilter";
import StatusChangeDropdown from "./_components/StatusChangeDropdown";
import StudentDetailsModal from "./_components/StudentDetailsModal";

type TQuranLCBasicStudentParams = {
  searchTerm?: string;
  batch?: string;
  userGender?: string;
  status?: string;
  page?: string;
  limit?: string;
};

const QURAN_LC_BASIC_STUDENTS_DATA_LIMIT = "100";

const ManageQuranLCBasicStudentPage = async (props: {
  searchParams: Promise<TQuranLCBasicStudentParams>;
}) => {
  const searchParams = await props?.searchParams;
  const {
    searchTerm,
    batch,
    userGender,
    status,
    page = "1",
    limit = QURAN_LC_BASIC_STUDENTS_DATA_LIMIT,
  } = searchParams || {};

  const params: Record<string, string> = {};

  if (searchTerm) {
    params.searchTerm = searchTerm;
  }
  if (batch) {
    params.batch = batch;
  }
  if (userGender) {
    params.userGender = userGender;
  }
  if (status) {
    params.status = status;
  }
  if (page) {
    params.page = page;
  }
  if (limit) {
    params.limit = limit;
  }

  const quranLCBasicResponse = await getQuranLCBasicStudentsFromDB(params);

  const totalData = quranLCBasicResponse?.data?.totalCount || 0;

  return (
    <div className="py-6 min-h-screen">
      {/* search, filter */}
      <div className="md:flex justify-between gap-12 mb-10 mt-4">
        <div className="w-full mb-4 md:mb-0">
          <QuranLcBasicStudentSearch />
        </div>

        <div className="flex gap-4 justify-center md:justify-end">
          {/* batch no filtering */}
          <QuranLcBasicStudentBatchFilter />

          {/* gender filtering */}
          <QuranLcBasicStudentGenderFilter />

          {/* student status filtering */}
          <QuranLcBasicStudentStatusFilter />
        </div>
      </div>

      <div>
        {!quranLCBasicResponse?.success ? (
          <NoDataFound
            title="কোন ছাত্র পাওয়া যায়নি"
            description="বর্তমানে কোনো ছাত্র জমা নেই। নতুন করে রেজিস্ট্রেশন করলে এখানে দেখতে পারবেন।"
          />
        ) : (
          <div>
            {quranLCBasicResponse?.data.data.length > 0 ? (
              <Table className="border">
                <TableHeader className="">
                  <TableRow className="bg-primary text-white">
                    <TableHead className="text-base text-white font-medium py-3">
                      #
                    </TableHead>
                    <TableHead className="text-base text-white font-medium py-3">
                      Name
                    </TableHead>

                    <TableHead className="text-base text-white font-medium py-3">
                      Gander
                    </TableHead>
                    <TableHead className="text-base text-white font-medium py-3">
                      Pay. Method
                    </TableHead>
                    <TableHead className="text-base text-white font-medium py-3">
                      Reg. Fee No.
                    </TableHead>
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
                  {quranLCBasicResponse?.data.data.map(
                    (user: TQuranLCBasic, index: number) => (
                      <TableRow
                        key={user._id}
                        className={`${
                          user.status === "completed" &&
                          "bg-green-600 hover:bg-green-600 text-white"
                        } ${
                          user.status === "pending" &&
                          "bg-red-500 hover:bg-red-600 text-white"
                        } `}
                      >
                        <TableCell className="font-semibold">
                          {index + 1}
                        </TableCell>
                        <TableCell className="font-medium">
                          {user.userName}
                        </TableCell>
                        <TableCell>{user.userGender}</TableCell>
                        <TableCell>
                          {user.paymentMethod ? user.paymentMethod : "N/A"}
                        </TableCell>
                        <TableCell>
                          {user.RegFeeNumber ? user.RegFeeNumber : "N/A"}
                        </TableCell>
                        <TableCell>{user.batch}</TableCell>
                        <TableCell className="capitalize">
                          {user.status}
                        </TableCell>
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
                          <DeleteStudentModal
                            studentId={user._id}
                            status={user.status}
                          />
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            ) : (
              <NoDataFoundBySearchFilter
                title="কোন ছাত্র পাওয়া যায়নি"
                description="অন্য কোনো ছাত্র খুঁজে দেখুন অথবা সব ফিল্টার পরিষ্কার করুন"
              />
            )}

            <div className="mt-8">
              <KAPagination
                totalData={totalData}
                dataLimit={Number(QURAN_LC_BASIC_STUDENTS_DATA_LIMIT)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageQuranLCBasicStudentPage;

// completed - green
// waiting - red

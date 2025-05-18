import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteQuranLCBasicStudentMutation } from "@/redux/api/quran-lc-basicApi";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

const DeleteStudentModal = ({ studentId }: { studentId: string }) => {
  // redux api
  const [deleteQuranLCBasicStudent] = useDeleteQuranLCBasicStudentMutation();

  const handleDeleteQuranLCBasicStudent = async () => {
    try {
      const res = await deleteQuranLCBasicStudent(studentId).unwrap();

      if (res.success) {
        toast.success(res.message);
      }
    } catch (error: any) {
      toast.error(
        error?.data?.errorSources[0].message || "something went wrong!"
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trash2 className="text-red-700 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-[480px] bg-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">
            Student Deletion
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to remove this student? This action cannot be
            undone!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center space-x-4 mt-6">
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Return
            </Button>
          </DialogClose>
          <DialogClose asChild onClick={handleDeleteQuranLCBasicStudent}>
            <Button variant="destructive" className="cursor-pointer">
              Delete
            </Button>
          </DialogClose>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteStudentModal;

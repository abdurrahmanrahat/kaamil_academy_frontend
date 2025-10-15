import { MyLoader } from "@/components/shared/Ui/MyLoader";

const ManageQuranLCBasicStudentLoadingPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <MyLoader text="Quran LC Basic Students Loading..." />
    </div>
  );
};

export default ManageQuranLCBasicStudentLoadingPage;

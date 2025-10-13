import { getMeFromDB } from "@/app/actions/users";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import AddBlogForm from "./_components/AddBlogForm";

const AddBlogPage = async () => {
  const currentUser = await getMeFromDB();
  console.log("currentUser", currentUser.data.user._id);

  return (
    <div className="min-h-screen py-8 md:py-12">
      <SectionTitle text="আর্টিকেল লিখুন" />

      <div className="w-full max-w-[980px] mx-auto my-6">
        <AddBlogForm userId={currentUser.data.user._id} />
      </div>
    </div>
  );
};

export default AddBlogPage;

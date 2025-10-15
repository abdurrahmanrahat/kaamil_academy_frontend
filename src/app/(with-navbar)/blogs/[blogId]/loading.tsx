import { MyLoader } from "@/components/shared/Ui/MyLoader";

const BlogLoadingPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <MyLoader text="Blog Loading..." />
    </div>
  );
};

export default BlogLoadingPage;

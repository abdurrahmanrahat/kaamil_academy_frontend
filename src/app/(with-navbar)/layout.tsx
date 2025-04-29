import Footer from "@/components/shared/Ui/Footer/Footer";
import Navbar2 from "@/components/shared/Ui/Navbar/Navbar2";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;

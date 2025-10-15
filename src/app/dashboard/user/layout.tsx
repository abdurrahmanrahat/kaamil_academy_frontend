import { Metadata } from "next";
import { ReactNode } from "react";
import UserLayout from "./layout/UserLayout";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "We provide Quran learning opportunities for general students",
};

const UserDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <UserLayout>{children}</UserLayout>
    </div>
  );
};

export default UserDashboardLayout;

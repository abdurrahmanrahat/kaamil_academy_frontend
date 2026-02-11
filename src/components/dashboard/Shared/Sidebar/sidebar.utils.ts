import {
  BookOpen,
  LayoutDashboard,
  List,
  MessageSquarePlus,
  Settings,
  Upload,
  Users,
} from "lucide-react";

export const userSidebarItems = [
  { text: "Dashboard", href: "/dashboard/user", icon: LayoutDashboard },
  {
    text: "My Courses",
    href: "/dashboard/user/cart-products",
    icon: BookOpen,
  },
];

export const adminSidebarItems = [
  { text: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
  {
    text: "Add Blog",
    href: "/dashboard/admin/add-blog",
    icon: Upload,
  },
  {
    text: "Add Course",
    href: "/dashboard/admin/add-course",
    icon: MessageSquarePlus,
  },
  {
    text: "Manage Courses",
    href: "/dashboard/admin/manage-courses",
    icon: Settings,
  },
  {
    text: "Manage Blogs",
    href: "/dashboard/admin/manage-blogs",
    icon: List,
  },
  {
    text: "Quran LC Basic Students",
    href: "/dashboard/admin/manage-quran-lc-basic-students?batch=batch-05",
    icon: Users,
  },
  { text: "Manage Users", href: "/dashboard/admin/manage-users", icon: Users },
];

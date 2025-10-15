"use client";

import { removeTokensFromCookies } from "@/app/actions/token";
import { Button } from "@/components/ui/button";
import { useLogoutUser } from "@/hooks/useLogoutUser";
import { IMAGES } from "@/image-data";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/reducers/authSlice";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import ActiveLink from "../ActiveLink";
import Container from "../Container";
import { navItems } from "./navbar.utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const user = useAppSelector(useCurrentUser);
  const router = useRouter();
  const logoutUser = useLogoutUser();

  const isAdmin = user?.role === "admin";
  // const isStudent = user?.role === "user";

  // logout user
  const handleLogout = async () => {
    await removeTokensFromCookies();
    logoutUser();

    router.push("/");

    toast.success("Logout successfully!");
  };

  // close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="relative w-full border-b border-gray-200" ref={navRef}>
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-2">
            {/* mobile menu toggle */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6 transition-all duration-300" />
              ) : (
                <Menu className="w-6 h-6 transition-all duration-300" />
              )}
            </button>

            {/* logo */}
            <Link href={`/`}>
              <Image
                src={IMAGES.shared.Logo}
                alt="kaamil_academy"
                width={180}
                height={80}
              />
            </Link>
          </div>

          {/* desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <>
              {navItems.map((item, index) => (
                <ActiveLink
                  href={item.href}
                  key={index}
                  exact={item.href === "/"}
                >
                  <span className="font-medium transition-colors duration-300 hover:text-primary">
                    {item.label}
                  </span>
                </ActiveLink>
              ))}
            </>

            <>
              {user && (
                <>
                  {isAdmin && (
                    <ActiveLink href={`/dashboard/admin`}>
                      <span className="font-medium transition-colors duration-300 hover:text-primary">
                        Dashboard
                      </span>
                    </ActiveLink>
                  )}

                  {/* {isStudent && (
                    <ActiveLink href={`/dashboard/user`}>
                      <span className="font-medium transition-colors duration-300 hover:text-primary">
                        Dashboard
                      </span>
                    </ActiveLink>
                  )} */}
                </>
              )}
            </>
          </div>

          {/* login/logout button */}
          <div className="flex items-center gap-4">
            <>
              {user ? (
                <Button className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Link href={`/login`}>
                  <Button className="cursor-pointer">Login</Button>
                </Link>
              )}
            </>
          </div>
        </div>

        {/* mobile menu dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-[64px] left-0 w-full z-[999] bg-white border-y border-primary/20"
            >
              <div className="w-[90%] mx-auto py-4 ">
                <div className="flex flex-col space-y-4">
                  <>
                    {navItems.map((item, index) => (
                      <ActiveLink
                        href={item.href}
                        key={index}
                        exact={item.href === "/"}
                      >
                        <span
                          className="font-medium transition-colors duration-300 hover:text-primary"
                          // onClick={() => setIsOpen(!isOpen)}
                        >
                          {item.label}
                        </span>
                      </ActiveLink>
                    ))}
                  </>

                  <>
                    {user && (
                      <>
                        {isAdmin && (
                          <ActiveLink href={`/dashboard/admin`}>
                            <span className="font-medium transition-colors duration-300 hover:text-primary">
                              Dashboard
                            </span>
                          </ActiveLink>
                        )}

                        {/* {isStudent && (
                          <ActiveLink href={`/dashboard/user`}>
                            <span className="font-medium transition-colors duration-300 hover:text-primary">
                              Dashboard
                            </span>
                          </ActiveLink>
                        )} */}
                      </>
                    )}
                  </>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};

export default Navbar;

"use client";

import { Button } from "@/components/ui/button";
import { authKey } from "@/constants/authKey";
import { IMAGES } from "@/image-data";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentUser } from "@/redux/reducers/authSlice";
import { removeUser } from "@/services/auth.services";
import axios from "axios";
import { Menu, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ActiveLink from "../ActiveLink";
import Container from "../Container";
import { navItems } from "./navbar.utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const user = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isAdmin = user?.role === "admin";
  const isStudent = user?.role === "user";

  // logout user
  const handleLogout = async () => {
    // 🎯 remove HttpOnly cookie from client via API
    await axios.post("/api/auth/remove-cookies", {
      accessToken: authKey,
      // refreshToken: "testToken", // send more name for removing
    });
    dispatch(logout());
    removeUser();

    router.push("/");
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
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
          <div className="hidden md:flex md:items-center md:gap-6">
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

                  {isStudent && (
                    <ActiveLink href={`/dashboard/user`}>
                      <span className="font-medium transition-colors duration-300 hover:text-primary">
                        Dashboard
                      </span>
                    </ActiveLink>
                  )}
                </>
              )}
            </>
          </div>

          {/* login/logout button */}
          <div className="flex items-center gap-4">
            <Sun />
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
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden absolute left-0 bg-white w-full z-[999] ${
            isOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
          } border-b border-gray-200`}
        >
          <div className="w-[90%] mx-auto py-4">
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

                    {isStudent && (
                      <ActiveLink href={`/dashboard/user`}>
                        <span className="font-medium transition-colors duration-300 hover:text-primary">
                          Dashboard
                        </span>
                      </ActiveLink>
                    )}
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

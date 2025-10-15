import { IMAGES } from "@/image-data";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-8">
      <Container className="pt-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/">
              <Image
                src={IMAGES.shared.WhiteLogo}
                alt="kaamil_academy"
                width={180}
                height={80}
              />
            </Link>
            <p className="my-6 text-gray-300">
              আধুনিক প্রযুক্তিনির্ভর ইসলামিক অনলাইন শিক্ষা প্ল্যাটফর্ম, যা
              সাধারণ শিক্ষিত ভাই-বোনদের ঘরে বসেই দ্বীনি জ্ঞানে সমৃদ্ধ হওয়ার
              সুযোগ করে দেয়।
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/share/1FAnmnz2yC"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://youtube.com/@kaamilacademyofficial?si=guAI4hLphkj-9kq4"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://www.instagram.com/kaamilacademy?igsh=YmpmMWc3cm42N250"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">দ্রুত লিঙ্ক</h3>

            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-white"
                >
                  কোর্সসমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="/teachers"
                  className="text-gray-300 hover:text-white"
                >
                  শিক্ষকমণ্ডলী
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-white">
                  ব্লগ
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  সাধারণ জিজ্ঞাসা
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">কোর্স ক্যাটাগরি</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses/quran"
                  className="text-gray-300 hover:text-white"
                >
                  কুরআন শিক্ষা
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/hadith"
                  className="text-gray-300 hover:text-white"
                >
                  হাদীস শিক্ষা
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/fiqh"
                  className="text-gray-300 hover:text-white"
                >
                  ফিকহ ও শরিয়াহ
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/arabic"
                  className="text-gray-300 hover:text-white"
                >
                  আরবি ভাষা
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/sirah"
                  className="text-gray-300 hover:text-white"
                >
                  সিরাত ও ইতিহাস
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">যোগাযোগ</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                <span className="text-gray-300">চট্টগ্রাম, বাংলাদেশ</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <span className="text-gray-300">+8801788880835</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <span className="text-gray-300">
                  kaamilacademyofficial@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 py-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} কামিল একাডেমি। সর্বস্বত্ব
            সংরক্ষিত।
          </p>
        </div>
      </Container>
    </footer>
  );
}

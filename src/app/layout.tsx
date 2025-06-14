import Providers from "@/lib/providers/Providers";
import type { Metadata } from "next";
import { Tiro_Bangla } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

// const roboto = Roboto({
//   variable: "--font-roboto",
//   subsets: ["latin"],
//   display: "swap",
// });

// Tiro bangla

// const notoBengali = Noto_Sans_Bengali({
//   subsets: ["bengali"],
//   weight: ["400", "500", "600", "700", "800"], // as needed
// });
const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Kaamil Academy",
  description: "A short description comes here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tiroBangla.className} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}

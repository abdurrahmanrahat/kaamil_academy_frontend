import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

// const roboto = Roboto({
//   variable: "--font-roboto",
//   subsets: ["latin"],
//   display: "swap",
// });

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"], // as needed
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
        className={`${notoBengali.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";
import FollowBar from "./components/FollowBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="grid grid-cols-4 h-full bg-slate-900 ">
          <SideBar />
        <div className="col-span-2 border-x ">{children}</div>
        <div>
          <FollowBar />
        </div>
        </div>
      </body>
    </html>
  );
}

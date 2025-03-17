import DashboardHeader from "@/components/shared/DashboardHeader";
import DashboardSidebar from "@/components/shared/DashboardSidebar";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} flex h-screen`}>
      <DashboardSidebar />
      <div className="flex-1 font-inter flex w-full flex-col overflow-hidden bg-[#F6F6F6]">
        <DashboardHeader />
        <main className="container flex-1 w-full mx-auto overflow-y-scroll bg-[#F6F6F6]">{children}</main>
      </div>
    </div>
  );
}

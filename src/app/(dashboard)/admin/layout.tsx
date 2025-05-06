import AdminDashboardHeader from "@/components/shared/AdminDashboardHeader";
import AdminDashboardSidebar from "@/components/shared/AdminDashboardSidebar";
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
      <AdminDashboardSidebar />
      <div className="flex-1 font-inter flex w-full flex-col overflow-hidden bg-[#ffff]">
        <AdminDashboardHeader />
        <main className="container flex-1 w-full mx-auto overflow-y-scroll bg-[#ffff]">{children}</main>
      </div>
    </div>
  );
}

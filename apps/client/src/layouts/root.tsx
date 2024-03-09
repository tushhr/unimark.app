import { Sidebar } from "@/components/sidebar";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}

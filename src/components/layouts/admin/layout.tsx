import DesktopSidebar from "@components/layouts/admin/navigation/desktop-sidebar";
import AdminHeader from "@components/layouts/admin/navigation/header";
import React from "react";

type AdminLayout = React.ComponentPropsWithoutRef<"main">;

function AdminLayout({ children }: AdminLayout) {
  return (
    <div>
      <DesktopSidebar />
      <div className="xl:ml-60">
        <AdminHeader />
        <main className="min-h-screen bg-gray-900 p-6">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;

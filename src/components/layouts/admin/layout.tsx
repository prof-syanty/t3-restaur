import DesktopSidebar from "@components/layouts/admin/navigation/desktop-sidebar";
import AdminHeader from "@components/layouts/admin/navigation/header";
import { siteSettings } from "@settings/site-settings";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type AdminLayout = React.ComponentPropsWithoutRef<"main">;

interface IAdminLayoutContext {
  miniDrawer: boolean;
  toggleMiniDrawer: () => void;
  size: {
    normal: number;
    mini: number;
  };
}

export const AdminLayoutContext = React.createContext<IAdminLayoutContext>({
  miniDrawer: false,
  toggleMiniDrawer: () => {
    /*  */
  },
  size: {
    ...siteSettings.sidebar.size,
  },
});

function AdminLayout({ children }: AdminLayout) {
  const [miniDrawer, setMiniDrawer] = useState(false);
  const toggleMiniDrawer = () => setMiniDrawer(!miniDrawer);
  const { mini, normal } = { ...siteSettings.sidebar.size };
  return (
    <AdminLayoutContext.Provider
      value={{
        miniDrawer,
        toggleMiniDrawer,
        size: {
          ...siteSettings.sidebar.size,
        },
      }}
    >
      <div className="bg-body">
        <DesktopSidebar />
        <div className={twMerge(`xl:ml-${miniDrawer ? mini : normal}`)}>
          <AdminHeader />
          <main className="min-h-screen p-6">{children}</main>
        </div>
      </div>
    </AdminLayoutContext.Provider>
  );
}

export default AdminLayout;

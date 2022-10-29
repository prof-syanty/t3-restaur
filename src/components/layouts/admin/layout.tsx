import DesktopSidebar from "@components/layouts/admin/navigation/desktop-sidebar";
import AdminHeader from "@components/layouts/admin/navigation/header";
import { siteSettings } from "@settings/site-settings";
import React, { useEffect, useState } from "react";

type AdminLayout = React.ComponentPropsWithoutRef<"main">;

interface IAdminLayoutContext {
  miniDrawer: boolean;
  toggleMiniDrawer: () => void;
  drawerWidth: number;
}

export const AdminLayoutContext = React.createContext<IAdminLayoutContext>({
  miniDrawer: false,
  toggleMiniDrawer: () => {
    /*  */
  },
  drawerWidth: 60,
});

function AdminLayout({ children }: AdminLayout) {
  const [miniDrawer, setMiniDrawer] = useState(false);
  const toggleMiniDrawer = () => setMiniDrawer(!miniDrawer);
  const [drawerWidth, setDrawerWidth] = useState(60);
  const {
    size: { mini, normal },
  } = siteSettings.sidebar;
  useEffect(() => {
    setDrawerWidth(miniDrawer ? mini : normal);
  }, [miniDrawer, mini, normal]);
  return (
    <AdminLayoutContext.Provider
      value={{
        miniDrawer,
        toggleMiniDrawer,
        drawerWidth,
      }}
    >
      <div className="bg-body">
        <DesktopSidebar />
        <div className={`xl:ml-${drawerWidth.toString()}`}>
          <AdminHeader />
          <main className="min-h-screen p-6">{children}</main>
        </div>
      </div>
    </AdminLayoutContext.Provider>
  );
}

export default AdminLayout;

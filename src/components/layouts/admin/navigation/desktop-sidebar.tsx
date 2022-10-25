import useAdminLayoutCtx from "@components/layouts/admin/hooks/useAdminLayoutCtx";
import SidebarContent from "@components/layouts/admin/navigation/sidebar-content";
import { twMerge } from "tailwind-merge";

function DesktopSidebar() {
  const {
    miniDrawer,
    size: { mini, normal },
  } = useAdminLayoutCtx();
  return (
    <aside
      className={twMerge(
        "fixed left-0 hidden h-full space-y-2 border-r p-3 xl:block",
        `w-${miniDrawer ? mini : normal}`
      )}
    >
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;

import { CategoryIcon, DashboardIcon } from "@components/icons";
import useAdminLayoutCtx from "@components/layouts/admin/hooks/useAdminLayoutCtx";
import AsideItem from "@components/ui/aside-item";
import Logo from "@components/ui/logo";

function SidebarContent() {
  const { miniDrawer } = useAdminLayoutCtx();
  return (
    <>
      <div className="flex items-center justify-center space-x-5 py-4">
        <Logo />
        {!miniDrawer && <span>T3-RESTAUR</span>}
      </div>
      <div className="divide-y divide-gray-700">
        <ul className="space-y-1 pt-2 pb-4 text-sm">
          <AsideItem
            text="Dashboard"
            href={"/admin"}
            icon={<DashboardIcon size={20} />}
          />
          <AsideItem
            text="Category"
            href={"/admin/category/all"}
            icon={<CategoryIcon size={20} />}
          />
        </ul>
      </div>
    </>
  );
}

export default SidebarContent;

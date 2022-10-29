import {
  DrawerClose,
  DrawerOpen,
  MailIcon,
  OrdersIcon,
  SearchIcon,
} from "@components/icons";
import useAdminLayoutCtx from "@components/layouts/admin/hooks/useAdminLayoutCtx";
import AuthMenu from "@components/layouts/admin/navigation/auth-menu";
import LanguageMenu from "@components/layouts/admin/navigation/lang-menu";
import MobileSidebar from "@components/layouts/admin/navigation/mobile-sidebar";
import SearchInput from "@components/layouts/admin/navigation/search-input";
import IconButton from "@components/ui/button/icon-button";
import NavLink from "@components/ui/link/nav-link";
import Logo from "@components/ui/logo";

/* eslint-disable @next/next/no-img-element */

function AdminHeader() {
  const { miniDrawer, toggleMiniDrawer } = useAdminLayoutCtx();
  return (
    <>
      <header className="sticky top-0 border-gray-300 bg-body shadow-md xl:border-b xl:shadow-none">
        <div className="max-w-screen-3xl mx-auto p-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <IconButton
              flat
              className="hidden xl:flex"
              onClick={toggleMiniDrawer}
            >
              {miniDrawer ? (
                <DrawerOpen size={20} />
              ) : (
                <DrawerClose size={20} />
              )}
            </IconButton>
            <div className="xl:hidden">
              <Logo />
            </div>
            <MobileSidebar />

            <div className=" flex flex-1 items-center justify-end gap-8">
              <SearchInput />
              <div className="hidden items-center gap-4 text-gray-500 sm:flex">
                <IconButton className="lg:hidden" flat>
                  <SearchIcon size={20} />
                </IconButton>
                <LanguageMenu />
                <NavLink icon={<MailIcon size={20} />} href="/admin/orders" />
                <NavLink icon={<OrdersIcon size={20} />} href="/admin/orders" />
              </div>

              <AuthMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default AdminHeader;

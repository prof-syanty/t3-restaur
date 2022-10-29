import { CloseIcon, DrawerClose, DrawerOpen } from "@components/icons";
import SidebarContent from "@components/layouts/admin/navigation/sidebar-content";
import IconButton from "@components/ui/button/icon-button";
import Drawer from "@components/ui/drawer/drawer";
import DrawerToggle from "@components/ui/drawer/drawer-toggle";

function MobileSidebar() {
  return (
    <div className="xl:hidden">
      <DrawerToggle>
        {({ isDrawerOpen, toggleDrawer }) => (
          <>
            <IconButton flat onClick={toggleDrawer}>
              {isDrawerOpen ? (
                <DrawerClose size={20} />
              ) : (
                <DrawerOpen size={20} />
              )}
            </IconButton>
            <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}>
              <div className="flex justify-end">
                <IconButton onClick={toggleDrawer}>
                  <CloseIcon size={20} />
                </IconButton>
              </div>
              <SidebarContent />
            </Drawer>
          </>
        )}
      </DrawerToggle>
    </div>
  );
}

export default MobileSidebar;

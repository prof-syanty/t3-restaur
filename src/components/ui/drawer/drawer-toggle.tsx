import { ReactElement, useState } from "react";

export interface DrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

interface DrawerToggleProps {
  children: (props: DrawerProps) => ReactElement;
}

function DrawerToggle({ children }: DrawerToggleProps) {
  const [isOpen, toggleIsOpen] = useState(false);
  return children({
    isDrawerOpen: isOpen,
    toggleDrawer: () => toggleIsOpen(!isOpen),
  });
}

export default DrawerToggle;

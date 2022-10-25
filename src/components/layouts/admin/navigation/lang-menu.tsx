/* eslint-disable jsx-a11y/alt-text */
import { DownIcon } from "@components/icons";
import DropdownMenu, {
  DropdownMenuItem,
} from "@components/ui/menu/dropdown-menu";

const menuItems: DropdownMenuItem[] = [
  {
    href: "/english",
    text: "English",
  },
  {
    href: "/nepali",
    text: "Nepali",
  },
];
function LanguageMenu() {
  return (
    <DropdownMenu
      triggerButton={
        <button type="button" className="flex h-full items-center ">
          <span>En</span>
          <DownIcon />
        </button>
      }
      menuItems={menuItems}
    />
  );
}

export default LanguageMenu;

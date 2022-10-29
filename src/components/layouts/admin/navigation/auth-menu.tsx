/* eslint-disable jsx-a11y/alt-text */
import { DotIcon } from "@components/icons";
import DropdownMenu, {
  DropdownMenuItem,
} from "@components/ui/menu/dropdown-menu";
import { siteSettings } from "@settings/site-settings";
import Image from "next/image";

const menuItems: DropdownMenuItem[] = [
  {
    href: "/profile",
    text: "Profile",
  },
  {
    href: "/settings",
    text: "Settings",
  },
];
function AuthMenu() {
  return (
    <DropdownMenu
      triggerButton={
        <button
          type="button"
          className="transitionin line-flex group flex w-full shrink-0 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:bg-slate-200"
        >
          <div className="relative">
            <Image
              {...siteSettings.avatar}
              objectFit="cover"
              className=" flex-shrink-0 rounded-full"
            />
            <span className="absolute bottom-1 right-0 flex rounded-full bg-green-600 text-green-600 outline outline-white ">
              <DotIcon size={10} />
            </span>
          </div>

          <p className="ml-2 hidden text-left text-xs sm:block">
            <strong className="block font-medium">Eric Frusciante</strong>

            <span className="text-gray-400"> eric@frusciante.com </span>
          </p>
        </button>
      }
      menuItems={menuItems}
    />
  );
}

export default AuthMenu;

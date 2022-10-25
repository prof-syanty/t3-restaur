/* eslint-disable jsx-a11y/alt-text */
import DropdownLink from "@components/ui/link/dropdown-link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

export interface DropdownMenuItem {
  href: string;
  text: string;
  icon?: string;
}

interface DropdownMenuProps {
  triggerButton: ReactNode;
  menuItems: DropdownMenuItem[];
}

function DropdownMenu({ triggerButton, menuItems }: DropdownMenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button as={Fragment}>{triggerButton}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {menuItems &&
              menuItems.map(({ href, text, icon }, i) => (
                <Menu.Item key={i}>
                  <DropdownLink href={href}>
                    {icon} {text}
                  </DropdownLink>
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownMenu;

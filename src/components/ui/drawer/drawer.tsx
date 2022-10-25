import { DrawerProps } from "@components/ui/drawer/drawer-toggle";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface IDrawer extends DrawerProps {
  children: ReactNode;
}

function Drawer({ children, isDrawerOpen, toggleDrawer }: IDrawer) {
  return (
    <Transition show={isDrawerOpen} as={Fragment}>
      <Dialog onClose={toggleDrawer} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 -translate-x-10"
          enterTo="opacity-100 translate-x-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-10"
        >
          <div className="fixed inset-0 overflow-y-auto">
            {/* Container to center the panel */}
            <div className="flex min-h-screen justify-start">
              <Dialog.Panel className="w-72 bg-white p-4">
                {children}
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default Drawer;

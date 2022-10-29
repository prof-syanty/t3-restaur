import React from "react";
import { twMerge } from "tailwind-merge";

type IconButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  flat?: boolean;
};

function IconButton({ children, className, flat, ...other }: IconButtonProps) {
  return (
    <button
      {...other}
      className={twMerge(
        "flex items-center justify-center rounded-full bg-gray-100 p-2 text-gray-400",
        flat && "bg-transparent",
        className
      )}
    >
      {children}
    </button>
  );
}

export default IconButton;

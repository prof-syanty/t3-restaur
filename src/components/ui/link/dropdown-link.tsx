import Link, { LinkProps } from "next/link";
import { forwardRef, HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react/display-name
const DropdownLink = forwardRef<
  HTMLAnchorElement,
  LinkProps & HTMLProps<HTMLAnchorElement>
>((props, ref) => {
  const { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a
        ref={ref}
        {...rest}
        className={twMerge(
          "group flex w-full items-center space-x-5 rounded-md px-2 py-2 text-sm hover:bg-gray-500 hover:text-gray-300"
        )}
      >
        {children}
      </a>
    </Link>
  );
});

export default DropdownLink;

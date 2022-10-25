import NextLink, { NextLinkProps } from "@components/ui/link/next-link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

interface AsideItemProps extends NextLinkProps {
  items?: [];
}

function AsideItem(props: AsideItemProps) {
  const router = useRouter();
  const { href } = props;

  return (
    <li>
      <NextLink
        {...props}
        className={twMerge(
          "rounded-md p-2 py-3 text-gray-800 hover:bg-gray-600 hover:text-gray-200",
          router.pathname === href &&
            "bg-gray-700 text-gray-100 hover:bg-gray-700"
        )}
      />
    </li>
  );
}

export default AsideItem;

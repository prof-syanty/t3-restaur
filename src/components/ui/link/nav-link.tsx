import NextLink, { NextLinkProps } from "@components/ui/link/next-link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

function NavLink(props: NextLinkProps) {
  const router = useRouter();
  const { href } = props;

  return (
    <NextLink
      {...props}
      className={twMerge(
        "flex shrink-0 space-x-0 rounded-lg p-2.5 text-gray-500 hover:bg-gray-700 hover:text-gray-200",
        router.pathname === href ? "text-gray-800" : ""
      )}
    />
  );
}

export default NavLink;

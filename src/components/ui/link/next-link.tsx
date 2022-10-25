import useAdminLayoutCtx from "@components/layouts/admin/hooks/useAdminLayoutCtx";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type NextLinkProps = LinkProps &
  React.ComponentPropsWithoutRef<"a"> & {
    text?: string | ReactNode;
    icon?: ReactNode;
  };

function NextLink({ href, className, text, icon }: NextLinkProps) {
  const { miniDrawer } = useAdminLayoutCtx();
  return (
    <Link href={href}>
      <a
        className={twMerge(
          "flex items-center",
          miniDrawer ? "justify-center" : "space-x-5",
          className
        )}
      >
        <span> {icon}</span> <span>{!miniDrawer && text}</span>
      </a>
    </Link>
  );
}

export default NextLink;

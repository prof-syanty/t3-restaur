/* eslint-disable jsx-a11y/alt-text */
import { siteSettings } from "@settings/site-settings";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  const { href, ...other } = siteSettings.logo;
  return (
    <Link href={href}>
      <a>
        <Image {...other} />
      </a>
    </Link>
  );
}

export default Logo;

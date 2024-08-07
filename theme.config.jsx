/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Image from "next/image";
import Link from "next/link";
import logo from "~/svg/vACCLogo_en.svg";

/** @type {import("nextra-theme-docs").DocsThemeConfig} */
const themeConfig = {
  project: {
    link: "https://github.com/shuding/nextra",
  },
  chat: {
    link: "https://discord.gg/rr5dpuh"
  },
  footer: {
    text:       <span>
    MIT 2006-{new Date().getFullYear()} ©{' '}
    <Link href="https://lv-vacc.org" target="_blank">
      Latvia vACC
    </Link>
    .
  </span>
  },
  logo: <Image src={logo} alt="Latvia vACC" />,
  primaryHue: 350.73,
  primarySaturation: 64.4,
};

export default themeConfig;

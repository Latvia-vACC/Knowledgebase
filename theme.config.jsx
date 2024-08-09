/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "nextra-theme-docs";
import logo_light from "~/svg/vACCLogo_en.svg";
import logo_dark from "~/svg/vACCLogo_en_white_text.svg";

const Logo = () => {
  const { theme, systemTheme } = useTheme();
  return <Image src={theme === "system" ? systemTheme === 'dark' ? logo_dark : logo_light : theme === "dark" ? logo_dark : logo_light} alt="Latvia vACC" />
}

/** @type {import("nextra-theme-docs").DocsThemeConfig} */
const themeConfig = {
  docsRepositoryBase: "https://github.com/Latvia-vACC/Knowledgebase/tree/master",
  project: {
    link: "https://github.com/Latvia-vACC/Knowledgebase",
  },
  chat: {
    link: "https://discord.gg/rr5dpuh"
  },
  search: {
    placeholder: "Search knowledgebase..."
  },
  editLink: {
    text: "Edit this page on GitHub →"
  },
  footer: {
    text: <span>
    MIT 2006-{new Date().getFullYear()} ©{' '}
    <Link href="https://lv-vacc.org" target="_blank">
      Latvia vACC
    </Link>
    .
  </span>
  },
  logo: Logo,
  primaryHue: 350.73,
  primarySaturation: 64.4,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        themeColor: "#9d2235",
        titleTemplate: '%s –  Latvia vACC Knowledgebase'
      }
    }

    return {
      themeColor: "#9d2235",
    }
  }
};

export default themeConfig;

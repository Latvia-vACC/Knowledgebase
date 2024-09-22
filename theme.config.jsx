/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "nextra-theme-docs";
import logo_light from "~/svg/vACCLogo_en.svg";
import logo_dark from "~/svg/vACCLogo_en_white_text.svg";

const Logo = () => {
  const { theme, systemTheme } = useTheme();

  return (
    <Image
      src={
        theme === "system"
          ? systemTheme === "dark"
            ? logo_dark
            : logo_light
          : theme === "dark"
            ? logo_dark
            : logo_light
      }
      alt="Latvia vACC"
      width="192"
    />
  );
};

/** @type {import("nextra-theme-docs").DocsThemeConfig} */
const themeConfig = {
  docsRepositoryBase:
    "https://github.com/Latvia-vACC/Knowledgebase/tree/master",
  project: {
    link: "https://github.com/Latvia-vACC/Knowledgebase",
  },
  chat: {
    link: "https://discord.gg/rr5dpuh",
  },
  search: {
    placeholder: "Search knowledgebase...",
  },
  feedback: {
    content: "Any feedback? Click here! →",
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  toc: {
    backToTop: true,
    title: "Table of Contents",
  },
  footer: {
    text: (
      <span>
        MIT 2006-{new Date().getFullYear()} ©{" "}
        <Link href="https://lv-vacc.org" target="_blank">
          Latvia vACC
        </Link>
      </span>
    ),
  },
  // banner: {
  //   key: "not-real",
  //   text: <span className="whitespace-normal overflow-visible text-wrap">❗ Attention! Latvia vACC is a part of the VATSIM Network. No resources, materials, or information provided by Latvia vACC should be used for real world aviation! ❗</span>
  // },
  logo: Logo,
  primaryHue: {
    light: 350.73,
    dark: 342,
  },
  primarySaturation: {
    light: 64.4,
    dark: 100,
  },
  head: (
    <>
      <meta name="theme-color" content="#9d2235" />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();

    if (asPath !== "/") {
      // @ts-expect-error This will not be undefined
      const sanitisedPath = asPath
        .split("/")
        .at(-1)
        .replaceAll("-", " ")
        .split(" ");
      for (let i = 0; i < sanitisedPath.length; i++) {
        sanitisedPath[i] =
          // @ts-expect-error This will not be undefined
          sanitisedPath[i].at(0).toUpperCase() + sanitisedPath[i].slice(1);
      }

      return {
        themeColor: "#9d2235",
        titleTemplate: "%s – Latvia vACC Knowledgebase",
        openGraph: {
          images: [
            {
              url: `https://kb.lv-vacc.org/api/og?title=${sanitisedPath.join(" ")}`,
            },
          ],
        },
      };
    }

    return {
      themeColor: "#9d2235",
      openGraph: {
        images: [
          {
            url: "https://kb.lv-vacc.org/api/og?title=Welcome to Latvia vACC!",
          },
        ],
      },
    };
  },
};

export default themeConfig;

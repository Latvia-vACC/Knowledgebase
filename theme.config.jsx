/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useConfig, useTheme } from "nextra-theme-docs";
import logo_light from "~/svg/vACCLogo_en.svg";
import logo_dark from "~/svg/vACCLogo_en_white_text.svg";

const Logo = () => {
  const { theme, systemTheme } = useTheme();

  return (
    <>
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
        className="min-w-[192px]"
      />
      <span className="sr-only">Home - Latvia vACC Knowledgebase</span>
    </>
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
    placeholder: "Search...",
  },
  feedback: {
    content: "Any feedback? Click here! →",
  },
  editLink: {
    content: "Edit this page on GitHub →",
  },
  toc: {
    backToTop: true,
    title: "Table of Contents",
  },
  footer: {
    content: (
      <span>
        Apache License 2.0 ©{" "}
        <Link
          href="https://lv-vacc.org"
          target="_blank"
          className="text-latvia-carmine underline"
        >
          Latvia vACC
        </Link>{" "}
        2006-{new Date().getFullYear()}
      </span>
    ),
  },
  banner: {
    key: "not-real",
    content: (
      <span className="h-fit overflow-visible whitespace-normal text-wrap">
        ❗ Attention! Latvia vACC is a part of the VATSIM Network. No resources,
        materials, or information provided by Latvia vACC should be used for
        real world aviation! ❗
      </span>
    ),
  },
  logo: Logo,
  color: {
    hue: {
      light: 350.73,
      dark: 342,
    },
    saturation: {
      light: 64.4,
      dark: 64.4,
    },
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  head: function useHead() {
    const { frontMatter } = useConfig();
    const { asPath } = useRouter();

    const url = `https://kb.lv-vacc.org${asPath}`;

    if (!frontMatter.title || !frontMatter.description)
      throw new Error(
        "MDX frontmatter must have at least 'title' and 'description' defined!",
      );

    return (
      <>
        <title>
          {asPath === "/"
            ? frontMatter.title
            : `${frontMatter.title} - Latvia vACC Knowledgebase`}
        </title>
        <meta property="description" content={frontMatter.description} />
        <meta name="theme-color" content="#9d2235" />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content={`https://kb.lv-vacc.org/api/og?title=${asPath === "/" ? "" : frontMatter.title}&logoOnly=${asPath === "/" ? 1 : 0}`}
        />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description} />
      </>
    );
  },
};

export default themeConfig;

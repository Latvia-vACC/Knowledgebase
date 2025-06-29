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
        className="sm:min-w-[192px]"
      />
      <span className="sr-only">Home – Latvia vACC Knowledgebase</span>
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
      <div className="flex w-full flex-wrap gap-20">
        <div className="flex flex-col gap-1 tracking-wide">
          <h4 className="font-bold">vACC Resources</h4>
          <Link
            href="https://lv-vacc.org"
            target="_blank"
            className="tracking-wide transition-opacity hover:opacity-80"
          >
            Home Page
          </Link>
          <Link
            href="https://training.lv-vacc.org"
            target="_blank"
            className="tracking-wide transition-opacity hover:opacity-80"
          >
            OneTest ✅
          </Link>
        </div>
        <div className="flex flex-col gap-1 tracking-wide">
          <h4 className="font-bold">Contact</h4>
          <Link
            href="https://lv-vacc.org/contact"
            target="_blank"
            className="tracking-wide transition-opacity hover:opacity-80"
          >
            vACC Staff
          </Link>
          <Link
            href="mailto:tech@lv-vacc.org"
            target="_blank"
            className="tracking-wide transition-opacity hover:opacity-80"
          >
            Tech Department
          </Link>
          <Link
            href="mailto:atd@lv-vacc.org"
            target="_blank"
            className="tracking-wide transition-opacity hover:opacity-80"
          >
            ATC Training Department
          </Link>
        </div>
        <span>
          Apache License 2.0
          <br />© <span className="text-latvia-carmine">Latvia vACC</span>{" "}
          2006-
          {new Date().getFullYear()}
        </span>
      </div>
    ),
  },
  banner: {
    key: "vatsim",
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
            : `${frontMatter.title} – Latvia vACC Knowledgebase`}
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
        <meta
          property="og:site_name"
          content={`Latvia vACC Knowledgebase${asPath === "/" ? "" : ` ${frontMatter.title}`}`}
        />
        <meta
          property="og:image:alt"
          content={`Latvia vACC Knowledgebase${asPath === "/" ? "" : ` ${frontMatter.title}`}`}
        />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="twitter:title"
          content={`Latvia vACC Knowledgebase${asPath === "/" ? "" : ` ${frontMatter.title}`}`}
        />
        <meta
          property="twitter:description"
          content={frontMatter.description}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={`https://kb.lv-vacc.org/api/og?title=${asPath === "/" ? "" : frontMatter.title}&logoOnly=${asPath === "/" ? 1 : 0}`}
        />
        <meta
          property="twitter:image:alt"
          content={`Latvia vACC Knowledgebase${asPath === "/" ? "" : ` ${frontMatter.title}`}`}
        />
        <meta property="twitter:image:width" content="1920" />
        <meta property="twitter:image:height" content="1080" />
        <meta property="twitter:image:type" content="image/png" />
      </>
    );
  },
};

export default themeConfig;

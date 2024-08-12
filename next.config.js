/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

// @ts-expect-error Types
import nextra from 'nextra';
import { remarkMdxDisableExplicitJsx } from 'nextra/mdx-plugins/remark-mdx-disable-explicit-jsx';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  mdxOptions: {
    remarkPlugins: [
      [
        remarkMdxDisableExplicitJsx,
        { whiteList: ['table', 'thead', 'tbody', 'tr', 'th', 'td'] }
      ]
    ]
  }
})


/** @type {import("next").NextConfig} */
const config = {
  transpilePackages: ["geist"],
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "lv"]
  // }
};

export default withNextra(config);

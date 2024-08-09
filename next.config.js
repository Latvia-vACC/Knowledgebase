/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

// @ts-expect-error Types
import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
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

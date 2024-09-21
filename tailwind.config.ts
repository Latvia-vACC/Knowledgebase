import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./theme.config.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      colors: {
        latvia: {
          carmine: "#9d2235",
          dark: "#212121",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

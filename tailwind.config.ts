import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "theme.config.jsx"],
  theme: {
    extend: {
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

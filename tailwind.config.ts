import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "#EEEEEE",
        primary: "#3B1E54",
        secondary: "#9B7EBD",
        default: "#D4BEE4",
      },
    },
  },
  plugins: [],
};
export default config;

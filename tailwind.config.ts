import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-900": "#000",
        "black-700": "#111",
        "black-500": "#1d1d1f",
        white: "#fff",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1.0625rem", // 17px
        lg: ["1.1875rem", "1.21"], // 21px
        xl: "1.3125rem", // 24px,
        "2xl": "1.5rem", // 24px
        "3xl": "1.75rem", // 28px
        "4xl": "2.5rem", // 40px
        "5xl": ["4.5rem", "1.05"], // 72px
      },
    },
  },
  plugins: [],
};
export default config;

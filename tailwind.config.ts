import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#AD1FEA",
        blue: "#4661E6",
        "blue-dark": "#4661E6",
        gray: "#F2F4FF",
        "gray-light": "#F7F8FD",
        "gray-blue": "#3A4374",
        "gray-dark": "#647196",
        white: "#FFFFFF",
        orange: "#F49F85",
        "blue-light": "##62BCFA",
      },
    },
  },
};
export default config;

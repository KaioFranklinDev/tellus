import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#03304F',
        primarylow: '#084C77',
        secondary: '#fff',
        destac: '#FEDA15'

      },
    },
  },
  plugins: [],
};
export default config;

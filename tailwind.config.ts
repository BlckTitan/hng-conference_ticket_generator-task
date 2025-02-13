import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        backgroundGreen: '#02191d',
        backgroundGreenLight: '#197686',
        borderGreenLight: '#08252b',
        borderGreen: '#0e464f',
        borderGreenDark: '#08252B',
      },
    },
  },
  plugins: [],
} satisfies Config;

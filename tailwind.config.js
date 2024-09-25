/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainGold: "#C5A363",
      },
      fontFamily: {
        secondFontFamily: "Acumin Pro",
      },
      fontSize: {
        xl: "64px",
        l: "32px",
        md: "16px",
        sm: "12px",
        "responsive-xl": [
          "48px",
          {
            // Default for larger screens
            lineHeight: "1.2",
            "@screen lg": {
              fontSize: "64px", // For lg screens
            },
            "@screen md": {
              fontSize: "48px", // For md screens
            },
            "@screen sm": {
              fontSize: "32px", // For sm screens
            },
            "@screen xs": {
              fontSize: "24px", // For extra small screens
            },
          },
        ],
      },
    },
  },
  plugins: [],
};

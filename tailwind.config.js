/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],

        mono: ["JetBrains Mono", "monospace"],

        serif: ["Merriweather", "serif"],

        display: ["Merriweather", "serif"],

        body: ["Inter", "sans-serif"],

        handwriting: ["Dancing Script", "cursive"],

        cursive: ["Dancing Script", "cursive"],

        heading: ["Merriweather", "serif"],

        title: ["Merriweather", "serif"],

        subtitle: ["Merriweather", "serif"],

        tagline: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};

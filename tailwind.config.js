/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#070707",
          raised: "#0d0d0f",
          panel: "#101013",
          line: "#1d1d21",
        },
        paper: {
          DEFAULT: "#F3F1EC",
          dim: "#B7B6B2",
          faint: "#7A7A7D",
        },
        crimson: {
          DEFAULT: "#C81E3A",
          bright: "#FF3B54",
          deep: "#7A0F22",
        },
        violet: {
          DEFAULT: "#4B3B8F",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

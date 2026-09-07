/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "void" = background surfaces (light, warm-scientific — NOT dark
        // despite the token name, kept for continuity with existing code)
        void: {
          DEFAULT: "#F7F7F5", // page background — warm scientific white
          raised: "#EFEFED", // secondary surface
          panel: "#FFFFFF", // card surface
          line: "#DFDDD8", // hairline borders
        },
        // "paper" = text (dark, on the light surfaces above)
        paper: {
          DEFAULT: "#171717",
          dim: "#5B5B5B",
          faint: "#8A8A87",
        },
        crimson: {
          DEFAULT: "#9F1239", // labels, hairlines, small accents — AA on white
          bright: "#E11D48", // hover states, buttons, large display accents
          deep: "#4C0519", // darkest hairline / orbital accents
        },
        // kept for continuity with earlier code; now a soft cool-gray wash
        // rather than a saturated violet, per the light/editorial direction
        violet: {
          DEFAULT: "#8B8FA3",
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
      boxShadow: {
        card: "0 1px 2px rgba(23,23,23,0.04), 0 12px 28px -16px rgba(23,23,23,0.12)",
        "card-hover": "0 2px 4px rgba(23,23,23,0.05), 0 20px 36px -16px rgba(23,23,23,0.16)",
      },
    },
  },
  plugins: [],
};

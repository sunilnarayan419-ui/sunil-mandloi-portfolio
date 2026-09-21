/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "void" = light surfaces — warm ivory/gray, deliberately NOT pure
        // white. This is the "light canvas" half of the light+dark rhythm.
        void: {
          DEFAULT: "#F2EFE7", // page background — warm ivory
          raised: "#E7E2D6", // secondary/alternating section surface
          panel: "#F8F6F0", // card surface, warm off-white (not #FFFFFF)
          line: "#DCD5C6", // warm hairline borders
        },
        // "graphite" = dark anchor surfaces used for a handful of sections
        // (Philosophy, Contact, Footer) to give the page controlled dark
        // contrast against the warm-light canvas — "light canvas, dark
        // anchors" per the design direction.
        graphite: {
          DEFAULT: "#211D18", // dark anchor section background
          raised: "#2B2620", // card/panel on a dark section
          deep: "#161310", // darkest — footer
          line: "#3E362C", // hairline borders on dark sections
        },
        // "paper" = ink (text) on the light "void" surfaces
        paper: {
          DEFAULT: "#1B1712",
          dim: "#5A5348",
          faint: "#6B6458", // darkened from #8F8779 to pass WCAG AA (4.5:1) for small labels
        },
        // "mist" = light text used on the dark "graphite" surfaces
        mist: {
          DEFAULT: "#F3F0E8",
          dim: "#C9C1B0",
          faint: "#A39C8D", // lightened from #8F887A so small text on graphite-raised passes AA
        },
        crimson: {
          DEFAULT: "#9F1239", // labels, hairlines, small accents
          bright: "#E11D48", // hover states, buttons, large display accents
          soft: "#F4607B", // small text on graphite (passes AA; crimson-bright does not)
          deep: "#4C0519", // darkest hairline / orbital accents
        },
        // soft cool-gray wash used as a secondary ambient accent
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
        card: "0 1px 2px rgba(27,23,18,0.05), 0 12px 28px -16px rgba(27,23,18,0.16)",
        "card-hover": "0 2px 4px rgba(27,23,18,0.06), 0 20px 36px -16px rgba(27,23,18,0.22)",
        "card-dark": "0 1px 2px rgba(0,0,0,0.3), 0 16px 32px -16px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

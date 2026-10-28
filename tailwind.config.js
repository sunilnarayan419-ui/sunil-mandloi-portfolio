/** @type {import('tailwindcss').Config} */
// Colours are CSS variables (see src/index.css) so light and dark mode share one set of utilities.
const c = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: c("bg"),
        surface: c("surface"),
        sunk: c("sunk"),
        ink: c("ink"),
        muted: c("muted"),
        faint: c("faint"),
        line: c("line"),
        accent: c("accent"),
        "accent-soft": c("accent-soft"),
        "accent-ink": c("accent-ink"),
        amber: c("amber"),
        "amber-soft": c("amber-soft"),
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["'IBM Plex Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { prose: "66ch" },
    },
  },
  plugins: [],
};

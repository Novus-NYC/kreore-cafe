import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // Tone classes are built from data (`tone-${coffee.tone}`), so Tailwind can't see them.
  safelist: ["tone-noir", "tone-pureza", "tone-milk", "tone-bourbon", "tone-gesha", "tone-pacamara"],
  theme: {
    extend: {
      colors: {
        k: {
          noir: "#16120F",
          pureza: "#F5EFE6",
          milk: "#FBF8F3",
          bourbon: "#EBC1CB",
          gesha: "#B8914A",
          pacamara: "#F1D35B",
          bean: "#5A3B2A",
          rose: "#9C3D57",
          line: "rgba(22,18,15,.18)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        motto: ["clamp(4.25rem, 11vw, 12rem)", { lineHeight: "0.86", letterSpacing: "-0.02em" }],
        d1: ["clamp(3.25rem, 8vw, 8.5rem)", { lineHeight: "0.88", letterSpacing: "-0.02em" }],
        d2: ["clamp(2.6rem, 5.2vw, 5.25rem)", { lineHeight: "0.94", letterSpacing: "-0.015em" }],
        d3: ["clamp(2rem, 3.4vw, 3.4rem)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        d4: ["clamp(1.6rem, 2.2vw, 2.2rem)", { lineHeight: "1.08" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        lead: ["clamp(1.25rem, 1.6vw, 1.5rem)", { lineHeight: "1.4" }],
      },
      maxWidth: {
        wrap: "1360px",
      },
      transitionTimingFunction: {
        label: "cubic-bezier(.2,.7,.2,1)",
      },
    },
  },
  plugins: [],
}
export default config

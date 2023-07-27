/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#e879f9",
          secondary: "#f3f4f6",
          accent: "#bc1a22",
          neutral: "#1C1C26",
          info: "#FFFFFF",
          success: "#12814A",
          warning: "#C17F06",
          error: "#F23B26",
          "base-100": "#16181c",
        },
      },
    ],
  },
};

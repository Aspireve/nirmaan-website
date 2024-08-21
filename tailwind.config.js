/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "DM Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        "primary-black": "#000000",
        "secondary-white": "#c7c7c7",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
    },
    textShadow: {
      sm: "1px 1px 2px rgba(255, 255, 255, 0.5)",
      lg: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      xl: "3px 3px 6px rgba(0, 0, 0, 0.5)",
      neon: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff",
      "3d": "2px 2px 0 #000, 4px 4px 0 #444, 6px 6px 0 #666",
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

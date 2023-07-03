/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary": "#2962FF",
      "secondary": "#455A64",
      "danger": "#D3302F",
      "warning": "#F7552F",
      "neutral": "#E0E0E0",
      "neutral-dark": "#AEAEAE",
      "white": "#FFF",
      "black": "#000",
    }
  },
  plugins: [],
}


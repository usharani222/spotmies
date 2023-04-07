/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0098a3",
        secundary: "#0098a3",
        bg2: "#e2e8f0",
        bg1: "#171717",
        text_color1: "#e2e8f0",
        text_color2: "#e2e8f0",
      },
    },
  },
  plugins: [],
};

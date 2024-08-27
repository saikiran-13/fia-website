/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#f8f8ff",
        color1: "#ffffff",
        color2: "#cce4fd",
        color3: "#77b6fb",
        color4: "#2382f7",
        color5: "#196bde",
        color6: "#0f3375",
      },
      backgroundImage: {
        "indian-gradient": "linear-gradient(90deg, #FF9933, #FFFFFF, #138808)",
      },
      textColor: {
        "indian-gradient": "transparent",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [],
};

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        currentColor: "currentColor",
        background: "#001d39",
        foreground: "#0f3b65",
        red: "#d0274b",
        "button-gradient-green": "#37d28a",
        "button-gradient-blue": "#22a2a1",
        "text-transparent-button": "#3397c5",
        "text-heading-left": "#79c7c5",
        "text-heading-right": "#39a6d4",
        white: "#fff",
        "text-faint": "#426a97",
        star: "#507AA3",
        checkbox: "#3ba4d2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

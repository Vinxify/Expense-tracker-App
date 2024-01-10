/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
    // themes: [
    //   {
    //     mytheme: {
    //       primary: "#ffffff",

    //       secondary: "#ffffff",

    //       accent: "#ffffff",

    //       neutral: "#ffffff",

    //       "base-100": "#ffffff",

    //       info: "#ff00ff",

    //       success: "#ffffff",

    //       warning: "#ff0000",

    //       error: "#ffffff",
    //     },
    //   },
    // ],
  },
};

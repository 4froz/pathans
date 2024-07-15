/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        cartOpenAnim: "cartOpenAnim 0.2s ease-in",
        cartCloseAnim: "cartCloseAnim 0.2s ease-in",
        login: "login 0.2s ease-in-out",
        loginClose: "loginClose 0.2s ease-in-out",
      },
      keyframes: {
        login: {
          "0%": { transform: "translate(-27rem,0px)" },
          "100%": { transform: "translate(0rem,0px)" },
        },
        loginClose: {
          "0%": { transform: "translate(0rem,0px)" },
          "100%": { transform: "translate(-27rem,0px)" },
        },
      },
      screens: {
        re: "1300px",
        se: "1150px",
      },
    },
  },
  plugins: [],
};

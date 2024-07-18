/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        cartOpenAnim: "cartOpenAnim 0.4s forwards",
        cartCloseAnim: "cartCloseAnim 0.2s ease-in",
        login: "login 0.4s forwards",
        loginClose: "loginClose 0.4s forwards",
        shine: 'shine 0.4s forwards',
        close: 'close 0.4s forwards',
      },
      keyframes: {
        shine: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '0' },
        },
        cartOpenAnim: {
        "0%": { right:-1000 },
          "100%": { right:0 },
        },
        close: {
          "0%": { right:0 },
          "100%": { right:-1000 },
        },
        login: {
          "0%": { left:-1000 },
          "100%": { left:0 },
        },
        loginClose: {
          "0%": { left:0 },
          "100%": { left:-1000 },
        },
        fadeIn: {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        },
        fadeOut: {
          "0%": {
            opacity: 0.5
          },
          "100%": {
            opacity: 0
          }
        }
        
      },
      screens: {
        re: "1300px",
        se: "1150px",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        brown: "#614e42",
        beige: 'beige',
        black: {
          100: "#28221e",
          200: "#000",
        },
        beige: "#f2ebe3",
        grey: "#DBDBDB",
      },
      fontFamily: {
        "body-b1": "Lexend",
        "clash-grotesk": "ClashGrotesk-Medium",
        inter: "Inter",
      },
      borderRadius: {
        "31xl": "50px",
        "4xs-1": "8.1px",
      },
    },
    fontSize: {
      base: "16px",
      "4xl": "18px",
      "5xl": "24px",
      "6xl": "32px",
      xl: "20px",
      "29xl": "48px",
      "17xl": "36px",
      "37xl": "56px",
      "13xl": "32px",
      "45xl": "64px",
    },
  },
  corePlugins: {
    preflight: false,
  },
}

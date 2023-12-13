/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        "normal": "0px 1px 10px 0px #0000000D",
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      letterSpacing: {
        "tightest": "-0.065em"
      },
      spacing: {
        "22" : "5.5rem",
        "30" : "7.5rem",
      },
      container: {
        center: true,
        DEAFULT: "1rem",
        lg: "0.625rem"
      },
      backgroundImage: {
        "home-desktop": "url(../images/headerBgDesktop.webp)",
        "home-mobile": "url(../images/headerBgMobile.webp)",
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container:{
      "center": true,
      "padding": {
        DEFAULT: "1rem",
        lg : "0.625rem",
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    }
  ],
}

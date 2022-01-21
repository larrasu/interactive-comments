const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      primary: {
        blue: "hsl(238, 40%, 52%)",
        "soft-red": "hsl(358, 79%, 66%)",
        "gray-blue": "hsl(239, 57%, 85%)",
        "pale-red": "hsl(357, 100%, 86%)",
      },
      neutral: {
        "dark-blue": "hsl(212, 24%, 26%)",
        "gray-blue": "hsl(211, 10%, 45%)",
        gray: "hsl(223, 19%, 93%)",
        "light-gray": "hsl(228, 33%, 97%)",
      },
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: ["Rubik", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      desktop: "1440px",
    },
    extend: {},
  },
  plugins: ["@tailwindcss/forms"],
};

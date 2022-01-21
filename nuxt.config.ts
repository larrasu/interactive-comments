import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt"],
  css: ["@/assets/css/main.css"],
  meta: {
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/images/favicon-32x32.png",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap",
      },
    ],
  },
});

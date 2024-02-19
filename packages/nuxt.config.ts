export default defineNuxtConfig({
  modules: ["@nuxt/image", "@nuxtjs/i18n", "@nuxtjs/sitemap"],
  image: {
    quality: 80,
    format: ["webp"],
    dir: "assets/images",
  },
  i18n: {},
  site: {},
});

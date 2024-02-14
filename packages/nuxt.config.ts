export default defineNuxtConfig({
  modules: ["@nuxt/image"],
  image: {
    quality: 80,
    format: ["webp"],
    dir: "assets/images",
  },
});

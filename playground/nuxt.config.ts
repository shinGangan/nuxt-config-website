export default defineNuxtConfig({
  extends: [
    // use local env
    "../packages",
    // use from external repo
    // "github:shinGangan/nuxt-config-website/packages",
  ],

  $development: {
    devtools: { enabled: true },
  },
  i18n: {
    // lazy: true,
    langDir: "locales/",
    defaultLocale: "ja",
    locales: [
      {
        code: "ja",
        iso: "ja-JP",
        name: "日本語",
        file: "ja.ts",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.ts",
      },
    ],
  },
});

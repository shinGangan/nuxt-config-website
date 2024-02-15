export default defineNuxtConfig({
  extends: ["../packages"],

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

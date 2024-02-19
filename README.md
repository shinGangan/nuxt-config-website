# nuxt-config-website

## About

Extend nuxt configs of Nuxt modules commonly used when creating websites. (Next SEO, GoogleFonts, I18n, etc.).

## Usage

```ts
// nuxt.config.ts

export default defineNuxtConfig({
  extends: ["github:shinGangan/nuxt-config-website/packages"],
});
```

## Modules

|                      Modules                      |              Usage               |
| :-----------------------------------------------: | :------------------------------: |
|         [![@nuxt/image]][nuxt-image-href]         | Used for Hero Header Image, etc. |
| [![@nuxtjs/google-fonts]][nuxt-google-fonts-href] |                                  |
|         [![@nuxtjs/i18n]][nuxt-i18n-href]         |   Internationalization module.   |
|                                                   |                                  |
|          [![@nuxtjs/seo]][nuxt-seo-href]          |                                  |
|     [![nuxt-simple-robots]][nuxt-robots-href]     |                                  |
|      [![@nuxtjs/sitemap]][nuxt-sitemap-href]      |                                  |
|      [![nuxt-og-image]][nuxt-og-image-href]       |                                  |

## License

This repository is licensed under the [MIT License](./LICENSE).

<!--
  Badges
-->

[@nuxt/image]: https://img.shields.io/badge/@nuxt/image-v1.3.x-00DC82?style=plastic&logo=nuxt.js
[nuxt-image-href]: https://image.nuxt.com/
[@nuxtjs/google-fonts]: https://img.shields.io/badge/@nuxtjs/google--fonts-00DC82?style=plastic&logo=nuxt.js&color=6A6A6A
[nuxt-google-fonts-href]: https://google-fonts.nuxtjs.org/
[@nuxtjs/i18n]: https://img.shields.io/badge/@nuxtjs/i18n-v8.1.x-00DC82?style=plastic&logo=nuxt.js
[nuxt-i18n-href]: https://i18n.nuxtjs.org/
[@nuxtjs/seo]: https://img.shields.io/badge/@nuxtjs/seo-00DC82?style=plastic&logo=nuxt.js&color=6A6A6A
[nuxt-seo-href]: https://nuxtseo.com/
[nuxt-simple-robots]: https://img.shields.io/badge/nuxt--simple--robots-00DC82?style=plastic&logo=nuxt.js&color=6A6A6A
[nuxt-robots-href]: https://nuxtseo.com/robots/getting-started/installation
[@nuxtjs/sitemap]: https://img.shields.io/badge/@nuxtjs/sitemap-v5.1.x-00DC82?style=plastic&logo=nuxt.js
[nuxt-sitemap-href]: https://nuxtseo.com/sitemap/getting-started/installation
[nuxt-og-image]: https://img.shields.io/badge/nuxt--og--image-00DC82?style=plastic&logo=nuxt.js&color=6A6A6A
[nuxt-og-image-href]: https://nuxtseo.com/og-image/getting-started/installation

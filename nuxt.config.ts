// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-delay-hydration",
  ],
  extends: [
    'nuxt-seo-kit'
  ],
  css: ["@/resources/scrollbars.css"],
  runtimeConfig: {
    public: {
      githash: process.env.CF_PAGES_COMMIT_SHA || "unknown",
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://serwery.pages.dev',
      siteName: 'Lista serwerów',
      siteDescription: 'Dodaj swój serwer na listę, aby inni użytkownicy mogli go znaleźć.',
      language: 'pl', // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  delayHydration: {
    mode: "manual",
    debug: process.env.NODE_ENV === "development",
  },
  routeRules: {
    "/_nuxt/**": {
      headers: { "Cache-Control": "max-age=31536000, immutable" },
    },
    "/**/*.js": { headers: { "Cache-Control": "max-age=31536000, immutable" } },
    "/**/*.mjs": {
      headers: { "Cache-Control": "max-age=31536000, immutable" },
    },
    "/**/*.css": {
      headers: { "Cache-Control": "max-age=31536000, immutable" },
    },
    "/**/*.json": {
      headers: { "Cache-Control": "max-age=31536000, immutable" },
    },
    "/**/*.xml": {
      headers: { "Cache-Control": "max-age=31536000, immutable" },
    },
    "/**/*.svg": {
      headers: { "Cache-Control": "max-age=31536000, immutable" },
    },
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/logo.svg" }],
    },
  },
});

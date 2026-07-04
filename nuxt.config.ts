export default defineNuxtConfig({
  compatibilityDate: "2026-07-04",
  devtools: { enabled: true },
  ssr: true,
  typescript: {
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? "/api/v1",
    },
  },
  routeRules: {
    "/": { prerender: true },
    "/products/**": { swr: 300 },
    "/categories/**": { swr: 300 },
    "/cart/**": { ssr: false },
    "/checkout/**": { ssr: false },
    "/account/**": { ssr: false },
  },
  app: {
    head: {
      titleTemplate: "%s · Terra Commerce",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
})

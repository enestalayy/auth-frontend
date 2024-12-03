// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
  ],
  plugins: ["~/plugins/fingerprint.client.ts", "~/plugins/init.server.ts"],
  runtimeConfig: {
    apiUrl: process.env.API_URL,
    apiKey: process.env.API_KEY,
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});

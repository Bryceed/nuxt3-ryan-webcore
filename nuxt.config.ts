import { resolve } from "node:path"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "vuetify-nuxt-module",
    "@unocss/nuxt",
  ],
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  },
  runtimeConfig: {
    authJs: {
      secret: process.env.AUTH_SECRET
    },
    googleFonts: {
      families: {
        Inter: true
      }
    }
  },
})
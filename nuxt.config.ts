import { resolve } from "node:path"

// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-expect-error
export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    modules: [
        "@nuxt/ui",
        "@nuxtjs/google-fonts",
        "vuetify-nuxt-module",
        "@unocss/nuxt",
        "@sidebase/nuxt-auth"
    ],
    alias: {
        cookie: resolve(__dirname, "node_modules/cookie")
    },
    ui: {
        icons: ['mdi', 'simple-icons'],
        button: {
            default: {
            color: 'orange'
            }
        },
        buttonGroup: {
            rounded: true,
            shadow: false,
        }
    },
    auth: {
        provider: {
            type: 'authjs'
        }
    },
    runtimeConfig: {
        authJs: {
            secret: process.env.AUTH_SECRET
        },
        googleFonts: {
            families: {
                Inter: true
            }
        },
        port: 8080,
    },
    devServer: {
        port: 3001,
    },
    server: {
        port: 3000,
    },
})
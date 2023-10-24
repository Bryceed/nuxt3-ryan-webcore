import { resolve } from "node:path"

// https://nuxt.com/docs/api/configuration/nuxt-config
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
        origin: "http://localhost:8080",
        provider: {
            type: 'authjs'
        },
        globalAppMiddleware: true,
    },
    runtimeConfig: {
        authJs: {
            secret: process.env.AUTH_SECRET,
            providers: {
                discord: {
                    clientId: process.env.DISCORD_CLIENT_ID,
                    clientSecret: process.env.DISCORD_CLIENT_SECRET
                }
            }
        },
        googleFonts: {
            families: {
                Inter: true
            }
        },
        port: 8080,
    },
    devServer: {
        // https: {
        //     key: './myserver+3-key.pem',
        //     cert: './myserver+3.pem',
        // }
    },
    server: {
        port: 3000,
    },
})
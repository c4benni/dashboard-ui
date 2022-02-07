const description = 'A minimal Dashboard interface by C4Benni'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'dashboard-ui',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },

            {
                hid: 'description',
                name: 'description',
                content: description,
            },
            {
                hid: 'twitter-app-country',
                property: 'twitter:app:country',
                content: 'NG',
            },
            {
                hid: 'twitter-site',
                property: 'twitter:site',
                content: '@c4benn',
            },
            {
                hid: 'twitter-image',
                property: 'twitter:image',
                content: '~static/icon.png',
            },
            {
                hid: 'twitter-card',
                property: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                hid: 'twitter-title',
                property: 'twitter:title',
                content: description,
            },
            {
                hid: 'twitter-desc',
                property: 'twitter:description',
                content: description,
            },
        ],
        link: [{
                hid: 'favicon',
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.png',
            },
            {
                hid: 'google-api-preconnect',
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
            {
                hid: 'g-static-preconnect',
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
            },
            {
                hid: 'inter-google-fonts',
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{ path: '~/components', extensions: ['vue'] }],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/pwa', 'portal-vue/nuxt'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    server: {
        port: 8008, // default: 3000
        host: '0.0.0.0', // default: localhost
    },
}
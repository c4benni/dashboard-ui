const description = 'A minimal Dashboard interface by C4Benni'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - Untitled UI',
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
                href: 'https://res.cloudinary.com/c4benn/image/upload/v1644484839/untitledUi/favicon.png',
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
    css: ['@assets/css/main.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{ path: '~/components', extensions: ['vue'] }],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxt/postcss8',
        'nuxt-vite',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/pwa', 'portal-vue/nuxt'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },

    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    router: {
        middleware: 'redirect',
    },

    server: {
        port: 8008, // default: 3000
        host: '0.0.0.0', // default: localhost
    },
}
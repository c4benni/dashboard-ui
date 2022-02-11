const plugin = require('tailwindcss/plugin')
const theme = require('./tailwind.theme')

module.exports = {
    mode: 'jit',
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: 'class',
    theme,
    plugins: [
        plugin(function({ addVariant, e }) {
            addVariant('can-hover', ['@media (pointer: fine) and (hover: hover)'])
            addVariant('no-hover', ['@media (pointer: coarse) and (hover: none)'])
            addVariant('supports-blur', ['@supports (backdrop-filter: blur(1px))'])
            addVariant('not-supports-blur', [
                '@supports not (backdrop-filter: blur(1px))',
            ])
            addVariant('landscape', '@media (orientation: landscape)')
            addVariant('portrait', '@media (orientation: portrait)')
        }),
    ],
    // important: true,
}
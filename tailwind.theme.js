// const colors = require('tailwindcss/colors')

module.exports = {
    screens: {
        xxs: '0',
        xs: '349px',
        sm: '599px',
        md: '959px',
        lg: '1279px',
        xl: '1919px',
    },
    colors: {
        primary: {
            700: '#6941C6',
            600: '#7F56D9',
            50: '#F9F5FF',
        },
        success: {
            700: '#027A48',
            50: '#ECFDF3',
        },
        gray: {
            900: '#101828',
            700: '#344054',
            500: '#667085',
            300: '#D0D5DD',
            200: '#EAECF0',
            100: '#F2F4F7',
            50: '#F9FAFB',
        },
        white: '#FFF',
    },
    borderRadius: {
        none: '0px',
        sm: '6px',
        DEFAULT: '8px',
        full: '9999px',
    },
    // helper to get spacings in multiples of 2 from 0 to 96;
    spacing: {
        ...Object.fromEntries(
            Array.from({
                    length: 49,
                },
                (_, index) => {
                    return [index, `${index * 2}px`]
                }
            )
        ),
    },
    boxShadow: {
        xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        sm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
        md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
    },
}
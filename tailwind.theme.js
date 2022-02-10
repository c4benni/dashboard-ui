// utitlity function to get key value pairs of classes;
function getEntries(length, map) {
    return Object.fromEntries(
        Array.from({
                length,
            },
            (_, index) => {
                return map(index)
            }
        )
    )
}

module.exports = {
    screens: {
        xxs: '0',
        xs: '349px',
        sm: '599px',
        md: '959px',
        lg: '1279px',
        xl: '1919px',
    },
    fontFamily: {
        sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
        xs: [
            '12px',
            {
                lineHeight: '18px',
            },
        ],
        sm: [
            '14px',
            {
                lineHeight: '20px',
            },
        ],
        base: [
            '16px',
            {
                lineHeight: '24px',
            },
        ],
        md: [
            '18px',
            {
                lineHeight: '28px',
            },
        ],
        lg: [
            '24px',
            {
                lineHeight: '32px',
            },
        ],
        xl: [
            '30px',
            {
                lineHeight: '38px',
            },
        ],
        '2xl': [
            '36px',
            {
                lineHeight: '44px',
                letterSpacing: '-2%',
            },
        ],
    },
    colors: {
        primary: {
            800: '#53389E',
            700: '#6941C6',
            600: '#7F56D9',
            500: '#9E77ED',
            400: '#B692F6',
            300: '#D6BBFB',
            200: '#E9D7FE',
            100: '#F4EBFF',
            50: '#F9F5FF',
            25: '#FCFAFF',
        },
        success: {
            700: '#027A48',
            600: '#039855',
            500: '#12B76A',
            100: '#D1FADF',
            50: '#ECFDF3',
        },
        error: {
            800: '#912018',
            700: '#B42318',
            600: '#D92D20',
            500: '#F04438',
            300: '#FDA29B',
            200: '#FECDCA',
            100: '#FEE4E2',
            50: '#FEF3F2',
            25: '#FFFBFA',
        },
        gray: {
            900: '#101828',
            800: '#1D2939',
            700: '#344054',
            600: '#475467',
            500: '#667085',
            400: '#98A2B3',
            300: '#D0D5DD',
            200: '#EAECF0',
            100: '#F2F4F7',
            50: '#F9FAFB',
            25: '#FCFCFD',
        },
        white: '#FFF',
        black: '#000',
    },
    borderRadius: {
        none: '0px',
        sm: '6px',
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
    },
    // helper to get spacings in multiples of 2 from 0 to 400;
    spacing: {
        ...getEntries(201, (index) => [index, `${index * 2}px`]),
        ...getEntries(201, (index) => [`-${index}`, `-${index * 2}px`]),
    },
    boxShadow: {
        xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        sm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
        md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    },
    zIndex: {
        ...getEntries(20, (index) => [index, `${index}`]),
    },
}
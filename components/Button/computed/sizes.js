// returns matching sizes when `hierarchy` is link or not;
// returns everything relating to sizing of a button, from
// spacing to typography, minus font-weight
export default function sizes() {
    const T_SM = 'text-sm'
    const T_BASE = 'text-base'
    const T_MD = 'text-md'

    if (this.isLink) {
        switch (this.size.toLowerCase()) {
            case 'lg' || 'xl':
                return `${T_BASE} h-12`
            case '2xl':
                return `${T_MD} h-14`
            default:
                return `${T_SM} h-10`
        }
    } else {
        const iconOnly = this.getIcon === 'only'

        switch (this.size.toLowerCase()) {
            case 'sm':
                return iconOnly ? 'h-18 w-18 p-4' : `h-18 py-4 px-7 ${T_SM}`
            case 'lg':
                return iconOnly ? 'h-22 w-22 p-6' : `h-22 py-5 px-9 ${T_BASE}`
            case 'xl':
                return iconOnly ? 'h-24 w-24 p-7' : `py-6 px-10 h-24 ${T_BASE}`
            case '2xl':
                return iconOnly ? 'h-28 w-28 p-8' : `h-30 py-8 px-14 ${T_MD}`
            default:
                return iconOnly ? 'h-20 w-20 p-5' : `h-20 py-5 px-8 ${T_SM}`
        }
    }
}
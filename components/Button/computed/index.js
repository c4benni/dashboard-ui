import errorColors from './errorColors'
import primaryColors from './primaryColors'
import { trimmedLowerCase } from '~/components/utils'

export default {
    primaryColors,
    errorColors,

    getTag() {
        if (this.to) {
            return 'NuxtLink'
        }

        if (this.href) {
            return 'a'
        }

        return this.tag
    },

    anchorAttrs() {
        if (this.getTag === 'a') {
            return {
                _target: 'blank',
                rel: 'noopener',
            }
        }
        return {}
    },

    nuxtLinkProps() {
        if (['NuxtLink', 'nuxt-link'].includes(this.getTag)) {
            return {
                to: this.to || '#',
            }
        }
        return {}
    },

    isLink() {
        return this.hierarchy.toLowerCase() === 'link'
    },

    isRaised() {
        return (!this.isLink &&
            !/^tertiary\s(?:gray|color)$|^link\s(?:gray|color)$/i.test(this.hierarchy)
        )
    },

    // returns matching sizes when `hierarchy` is link or not;
    // returns everything relating to sizing of a button, from
    // spacing to typography, minus font-weight
    sizes() {
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
            switch (this.size.toLowerCase()) {
                case 'sm':
                    return `h-18 px-4 py-7 ${T_SM}`
                case 'lg':
                    return `h-22 px-x py-9 ${T_BASE}`
                case 'xl':
                    return `px-6 py-10 h-24 ${T_BASE}`
                case '2xl':
                    return `h-30 px-8 py-14 ${T_MD}`
                default:
                    return `h-20 px-5 py-8 ${T_SM}`
            }
        }
    },

    // returns matching colors depending on button states: hover,
    // active, focus, disabled. `hover` will only be possible on
    // devices that can hover. Eg not mobile.
    colors() {
        if (this.destructive) {
            return this.errorColors
        }
        return this.primaryColors
    },

    getIcon() {
        return trimmedLowerCase(this.icon)
    },

    dotBackground() {
        const hierarchy = trimmedLowerCase(this.hierarchy)

        if (hierarchy === 'primary') {
            return 'bg-white'
        }

        if (this.disabled) {
            if (this.destructive) {
                return 'bg-error-300'
            }
            switch (hierarchy) {
                case 'secondary color':
                    return 'bg-primary-300'
                default:
                    return 'bg-gray-300'
            }
        }

        return 'bg-success-500'
    },
}
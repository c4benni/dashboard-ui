import errorColors from './errorColors'
import primaryColors from './primaryColors'
import sizes from './sizes'
import { htmlAnchorAttrs, trimmedLowerCase } from '~/components/utils'

export default {
    primaryColors,
    errorColors,
    sizes,

    getSize() {
        return trimmedLowerCase(this.size)
    },

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
            return htmlAnchorAttrs
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
        return /^link\s(?:gray|color)$/.test(trimmedLowerCase(this.hierarchy))
    },

    // for applying border, focus ring, and shadow.
    isRaised() {
        return (!this.isLink &&
            !/^tertiary\s(?:gray|color)$|^link\s(?:gray|color)$/.test(
                trimmedLowerCase(this.hierarchy)
            )
        )
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
        if (this.icon) return trimmedLowerCase(this.icon)
        return ''
    },

    // returns dynamic background for dots when icon === dot
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

    // returns sizes and spacing for icon wrapper, and size for icon component.
    iconSizeAndSpace() {
        if (this.iconSize) {
            return this.iconSize
        }

        const isTrailing = this.getIcon === 'trailing'

        if (trimmedLowerCase(this.size) === '2xl') {
            const size = '20'

            return {
                wrapper: `h-12 w-12 ${isTrailing ? 'ml-6' : 'mr-6'}`,
                icon: {
                    height: size,
                    width: size,
                },
            }
        }
        const size = '16.7'

        return {
            wrapper: `h-10 w-10 ${isTrailing ? 'ml-4' : 'mr-4'}`,
            icon: {
                height: size,
                width: size,
            },
        }
    },

    focusableTag() {
        return /button|a/.test(this.getTag)
    },
}
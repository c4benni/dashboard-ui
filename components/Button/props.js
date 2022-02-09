import { trimmedLowerCase, undefinedProp, undefinedStringProp } from '../utils'

const errorPrefix = 'Button [prop] -'

const arrayError = (prop, validValues) =>
    console.error(
        `${errorPrefix} ${prop}: Expected one of ${validValues}. Got ${prop}`
    )

export default {
    to: undefinedProp([String, Object]),
    href: undefinedStringProp,
    disabled: Boolean,
    text: Boolean,
    autofocus: Boolean,
    destructive: Boolean,
    block: Boolean,
    iconName: undefinedStringProp,
    label: undefinedStringProp,
    title: undefinedStringProp,
    icon: {
        type: String,
        default: undefined,
        validator: (prop) => {
            const validValues = ['leading', 'trailing', 'dot', 'only']

            if (typeof prop === 'string') {
                if (validValues.includes(trimmedLowerCase(prop))) {
                    return true
                }

                arrayError(prop, validValues)
            } else return true
        },
    },
    tag: {
        type: String,
        default: 'button',
    },
    size: {
        type: String,
        default: 'md',
        validator: (prop) => {
            const validValues = ['sm', 'md', 'lg', 'xl', '2xl', 'custom']

            if (validValues.includes(trimmedLowerCase(prop))) {
                return true
            }

            arrayError(prop, validValues)
        },
    },
    hierarchy: {
        type: String,
        default: 'primary',
        validator: (prop) => {
            const validValues = [
                'primary',
                'secondary color',
                'secondary gray',
                'tertiary color',
                'tertiary gray',
                'link color',
                'link gray',
            ]

            if (validValues.includes(trimmedLowerCase(prop))) {
                return true
            }

            arrayError(prop, validValues)
        },
    },
}
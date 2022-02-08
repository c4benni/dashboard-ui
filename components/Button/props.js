import { trimmedLowerCase, undefinedProp, undefinedStringProp } from '../utils'

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
        validator: (prop) =>
            typeof prop === 'string' ?
            ['leading', 'trailing', 'dot', 'only'].includes(
                trimmedLowerCase(prop)
            ) :
            true,
    },
    tag: {
        type: String,
        default: 'button',
    },
    size: {
        type: String,
        default: 'md',
        validator: (prop) => ['sm', 'md', 'lg', 'xl', '2xl'].includes(trimmedLowerCase(prop)),
    },
    hierarchy: {
        type: String,
        default: 'primary',
        validator: (prop) => [
            'primary',
            'secondary color',
            'secondary gray',
            'tertiary color',
            'tertiary gray',
            'link color',
            'link gray',
        ].includes(trimmedLowerCase(prop)),
    },
}
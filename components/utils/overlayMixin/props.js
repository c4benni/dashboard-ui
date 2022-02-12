import { undefinedProp, undefinedStringProp } from '..'

const backdropWillChange = 'will-change-[opacity]'
const backdropActiveTransition = `${backdropWillChange} transition-opacity duration-300`
const backdropBeforeTransition = `opacity-[0!important] ${backdropWillChange}`

export const defaultBackdropTransition = {
    enterClass: backdropBeforeTransition,
    enterActiveClass: `${backdropActiveTransition}`,
    leaveClass: backdropWillChange,
    leaveActiveClass: backdropActiveTransition,
    leaveToClass: backdropBeforeTransition,
}

export const getDefaultTransitionClasses = (
    contentTransform = 'scale-[1.15]'
) => {
    const contentWillChange = 'will-change-[opacity,transform]'
    const contentActiveTransition = `${contentWillChange} transition-[opacity,transform] transform-gpu duration-300`
    const contentBeforeTransition = `${contentTransform} opacity-0 ${contentWillChange}`

    return {
        enterClass: contentBeforeTransition,
        enterActiveClass: `${contentActiveTransition}`,
        leaveClass: contentWillChange,
        leaveActiveClass: contentActiveTransition,
        leaveToClass: contentBeforeTransition,
    }
}

export const defaultTransitionClasses = getDefaultTransitionClasses()

export default {
    transitionName: undefinedStringProp,
    modelValue: undefinedProp(Boolean),
    backdropColor: {
        type: String,
        default: 'bg-[#344054B2]',
    },
    showBackdrop: {
        type: Boolean,
        default: true,
    },
    lockBodyScroll: {
        type: Boolean,
        default: true,
    },
    backdropTransition: {
        type: Object,
        default: () => defaultBackdropTransition,
    },
    transition: {
        type: Object,
        default: () => defaultTransitionClasses,
    },
}
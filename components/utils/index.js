import Breakpoint from './breakpoint'

export const breakpointConfig = {
    xxs: '0',
    xs: '349px',
    sm: '599px',
    md: '959px',
    lg: '1279px',
    xl: '1919px',
}

export function initBreakpoint() {
    if (this.$store.state.breakpoint.inactive) {
        const dispatch = (payload) =>
            this.$store.dispatch('updateBreakpoint', payload)

        const breakpoints = new Breakpoint({
            config: breakpointConfig,
            useOrientation: true,
            onChange: (evt) => {
                dispatch(evt)
            },
        })

        dispatch(breakpoints)
    }
}

export const requiredProp = (type) => ({
    type,
    required: true,
})

export const undefinedProp = (type) => ({
    type,
    default: undefined,
})

export const requiredStringProp = requiredProp(String)
export const undefinedStringProp = undefinedProp(String)

export const trimmedLowerCase = (string) => string.toLowerCase().trim()

export function capitalize(string) {
    if (typeof string === 'string') {
        return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`
    }
    return ''
}

export function camelCase(string) {
    if (typeof string === 'string') {
        return `${string.slice(0, 1).toLowerCase()}${string
      .slice(1)
      .replace(/-[a-z]/g, (x) => `${x.slice(1)}`.toUpperCase())}`
  }
  return ''
}

export function kebabCase(string) {
  if (typeof string === 'string') {
    return string
      .replace(/[A-Z]/g, (x) => `-${x}`)
      .replace(/^-|-$/g, '')
      .toLowerCase()
  }
  return ''
}

export const htmlAnchorAttrs = {
  target: '_blank',
  rel: 'noreferrer noopener',
}

export function nextAnimFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(resolve)
  })
}

export const mediaListener = ({ media, callback }) => {
  try {
    media.addEventListener('change', callback)
  } catch (e) {
    // older browser work around. Hey safari iphone 8!
    if (/undefined is not a function/i.test(e.message)) {
      media?.addListener?.(callback)
    }
  }
}
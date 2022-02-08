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
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
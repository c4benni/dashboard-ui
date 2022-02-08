import { trimmedLowerCase } from '~/components/utils'

// returns colors to match a destructive button alone
export default function errorColors() {
    const defaultFocusRing = 'focus:ring-error-100'

    switch (trimmedLowerCase(this.hierarchy)) {
        case 'secondary color':
            return this.disabled ?
                'bg-error-25 border-error-25 text-error-300' :
                `bg-error-50 border-error-50 text-error-700 can-hover:hover:bg-error-100 can-hover:hover:border-error-100 ${defaultFocusRing} focus:bg-error-50`
        case 'secondary gray':
            return `bg-white ${
        this.disabled
          ? 'border-error-200 text-error-300'
          : `border-error-300 text-error-700 can-hover:hover:bg-error-50 can-hover:hover:text-error-800 focus:ring-error-50 focus:text-error-700`
      }`
    case 'tertiary color':
      return this.disabled
        ? `text-error-300`
        : `text-error-700 can-hover:hover:bg-error-50`
    case 'tertiary gray':
      return this.disabled
        ? `text-error-300`
        : `text-error-700 can-hover:hover:bg-error-50 can-hover:hover:text-error-800 focus:text-error-700`
    case 'link color':
      return this.disabled
        ? `text-gray-300`
        : `text-error-700 can-hover:hover:text-error-800`
    case 'link gray':
      return this.disabled
        ? `text-gray-300`
        : `text-error-700 can-hover:hover:text-error-800 focus:text-error-700`
    default:
      return `text-white ${
        this.disabled
          ? 'bg-error-200 border-error-200'
          : `bg-error-600 border-error-600 can-hover:hover:bg-error-700 can-hover:hover:border-error-700 focus:bg-error-600 focus:border-error-600 ${defaultFocusRing}`
      }`
  }
}
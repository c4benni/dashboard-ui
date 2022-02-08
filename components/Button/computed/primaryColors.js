import { trimmedLowerCase } from '~/components/utils'

// returns colors to match a non destructive button alone
export default function primaryColors() {
    const defaultFocusRing = 'focus:ring-primary-100'

    switch (trimmedLowerCase(this.hierarchy)) {
        case 'secondary color':
            return this.disabled ?
                'bg-primary-25 border-primary-25 text-primary-300' :
                `bg-primary-50 border-primary-50 text-primary-700 can-hover:hover:bg-primary-100 can-hover:hover:border-primary-100 ${defaultFocusRing}`
        case 'secondary gray':
            return `bg-white ${
        this.disabled
          ? 'border-gray-200 text-gray-300'
          : `border-gray-300 text-gray-700 can-hover:hover:bg-gray-50 focus:ring-gray-100 can-hover:hover:text-gray-800 focus:text-gray-700`
      }`
    case 'tertiary color':
      return this.disabled
        ? `text-gray-300`
        : `text-primary-700 can-hover:hover:bg-primary-50`
    case 'tertiary gray':
      return this.disabled
        ? `text-gray-300`
        : `text-gray-500 can-hover:hover:bg-gray-50 can-hover:hover:text-gray-600 focus:text-gray-500`
    case 'link color':
      return this.disabled
        ? `text-gray-300`
        : `text-primary-700 can-hover:hover:text-primary-800`
    case 'link gray':
      return this.disabled
        ? `text-gray-300`
        : `text-gray-500 can-hover:hover:text-gray-600`
    default:
      return `text-white ${
        this.disabled
          ? 'bg-primary-200 border-primary-200'
          : `bg-primary-600 border-primary-600 can-hover:hover:bg-primary-700 can-hover:hover:border-primary-700 focus:bg-primary-600 focus:border-primary-600 ${defaultFocusRing}`
      }`
  }
}
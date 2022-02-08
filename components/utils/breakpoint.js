import Vue from 'vue'
import { mediaListener } from '.'

// breakpoint hook. Accepts an object of {breakpointName: breakpointValue}
// to match with tailwind's.
// uses mediaQuery to avoid unnecessary debouncing, and ultimately update quicker and with better performance and browser support than resize observer or listener.
// To be initialized on beforeMount in default layout, or any other layout that initializes the app, then onUpdate should trigger vuex state.breakpoint to update globally.Also, before installing, check to see if vuex has breakpoint already.If so, bail.

const setParseBreakpoints = (config, orientation) => {
        // get entries and sort the values from low to high;
        const sortedEntries = Object.entries(config).sort((entry1, entry2) => {
            const a = parseInt(entry1[1])
            const b = parseInt(entry2[1])

            return a > b ? 1 : -1
        })

        const output = []

        if (orientation) {
            output.push('<orientation>(orientation: landscape)')
        }

        sortedEntries.forEach((entry, index) => {
                    const br = entry[0]
                    const minWidth = parseInt(entry[1])
                    const maxWidth = parseInt((sortedEntries[index + 1] || [])[1] || '')

                    output.push(
                            `<${br}>(min-width:${minWidth}px)${
        maxWidth ? ` and (max-width:${maxWidth - 1}px)` : ''
      }`
    )
  })

  return output
}

let installed = false

let parsedBreakpoints

function getBreakpointMediaName(val) {
  const regExp = /^<.+>/g
  return val.match?.(regExp)?.[0]?.replace?.(/<|>/g, '') || ''
}

function updateBreakpointMediaListener(e) {
  const name = e.name
  const isOrientation = /orientation/.test(name)
  const matches = e.matches
  const data = isOrientation ? (matches ? 'landscape' : 'portrait') : name

  const update = () => {
    if (isOrientation) {
      this.output.orientation = data
    } else {
      this.output.is = data
    }
    e.onChange?.(this.output)
  }

  if (isOrientation) {
    update()
  } else if (e.matches) {
    update()
  }
}

function mounted(onChange) {
  if (!installed) {
    parsedBreakpoints.forEach((br, index) => {
      const brNameWrap = /^<.+>/g
      const mediaQuery = window.matchMedia(br.replace(brNameWrap, ''))
      const matches = mediaQuery.matches
      const name = getBreakpointMediaName(br)

      updateBreakpointMediaListener.call(this, {
        matches,
        name,
        index,
        onChange,
      })

      mediaListener({
        media: mediaQuery,
        callback: async (e) => {
          await Vue.nextTick()

          updateBreakpointMediaListener.call(this, {
            matches: e.matches,
            index,
            name,
            onChange,
          })
        },
      })
    })
  }
}
class BreakpointWrapper {
  constructor({ config, useOrientation, onChange }) {
    if (!config) {
      throw new Error(
        'A config object of breakpoints must be defined. Eg {sm: 0, md: 960}'
      )
    } else if (Object.keys(config).length < 2) {
      throw new SyntaxError('Config object must have at least 2 breakpoints')
    } else if (!installed) {
      parsedBreakpoints = setParseBreakpoints(config, useOrientation || false)

      mounted.call(this, onChange)

      Object.freeze(this)

      installed = true
    }
  }

  output = {
    is: '',
    orientation: '',
  }

  get is() {
    return this.output.is
  }

  get orientation() {
    return this.output.orientation
  }
}

// main class. Created to avoid mistakenly reassigning a property.
export default class Breakpoint {
  // mimic a proxy to avoid reassigning
  constructor(arg) {
    const breakpointWrapper = new BreakpointWrapper(arg)

    Object.defineProperty(this, 'is', {
      get() {
        return breakpointWrapper.is
      },
    })

    if (breakpointWrapper.orientation) {
      Object.defineProperty(this, 'orientation', {
        get() {
          return breakpointWrapper.orientation
        },
      })
    }
  }
}
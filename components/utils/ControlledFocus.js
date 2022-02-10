import eventKey from './eventKey'
import { isHTML } from '.'

// mimic tabing experience.
export default class ControlledFocus {
    constructor({
        //   parent component; MUST BE HTMLElement.
        // the root will then look for all children with querySelector,
        // then filter nodes to get those that can be focused.
        root,
        //   children to tab through. MUST BE VALID CSS PROP.
        children,
        // cycle the tabing. Useful in dialog
        loop = true,
        // prevent page from jumping to focused elements offsetTop
        preventScroll = false,
        // use closest option when targeting elements that arent deeply nested. Eg
        //   target only div, not button. markup: <div tabindex=0><button/></div>
        closest,
    }) {
        if (isHTML(root)) {
            this.$children = root.querySelectorAll(`${children}`)
        }

        this.loop = loop
        this.preventScroll = preventScroll
        this.closest = closest || children

        // get nodes that can be focused.
        // check if $children exist, then filter all to see if they're validHTML, and can be focused.
        this.focusableNodes =
            this.$children && [...this.$children].filter((x) => {
                const validFocusable =
                    isHTML(x) &&
                    x.tabIndex > -1 &&
                    x.getAttribute('tabindex') > -1 &&
                    !x.getAttribute('disabled')

                return validFocusable ?
                    this.closest ?
                    x.closest(this.closest) :
                    x :
                    false
            })

        // get the current index of the focused element in focusableNodes
        if (this.focusableNodes) {
            this.index =
                this.focusableNodes.length &&
                this.focusableNodes.indexOf(
                    this.focusableNodes.find((x) =>
                        x.isSameNode(x.ownerDocument.activeElement)
                    )
                )
        }
    }

    // move forward and destroy
    forward(count = 0) {
        if (!this.focusableNodes.length) {
            return
        }
        const getIndex =
            this.index + 1 + count > this.focusableNodes.length - 1 ?
            this.loop ?
            0 :
            this.focusableNodes.length - 1 :
            this.index + 1 + count

        this.focusableNodes[getIndex].focus({ preventScroll: this.preventScroll })

        this.destroy()
    }

    // move backward and destroy
    backward(count = 0) {
        if (!this.focusableNodes.length) {
            return
        }

        const getIndex =
            this.index - 1 - count < 0 ?
            this.loop ?
            this.focusableNodes.length - 1 :
            0 :
            this.index - 1 - count

        this.focusableNodes[getIndex].focus({ preventScroll: this.preventScroll })

        this.destroy()
    }

    // clear nodes to avoid memory leaks
    destroy() {
        this.$children = null
        this.focusableNodes = null
    }
}

// quickly use ControlledFocus
export function hackTabKey(e, cb = () => {}, evtKey) {
    const key = evtKey || eventKey(e)

    if (key === 'tab') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault()

            cb(e, key)
        }
    }

    return key
}
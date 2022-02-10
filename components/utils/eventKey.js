// helper function to get event keys
export default function eventKey(e) {
    // backspace
    if (
        /^backspace/i.test(e.code) ||
        e.keyCode === 8 ||
        /^backspace/i.test(e.key)
    ) {
        return 'backspace'
    }

    // delete
    if (/^delete/i.test(e.code) || e.keyCode === 46 || /^delete/i.test(e.key)) {
        return 'delete'
    }

    // arrow-up
    if (/^arrowup$/i.test(e.code) || e.keyCode === 38) {
        return 'arrow-up'
    }

    if (/^arrowleft$/i.test(e.code) || e.keyCode === 37) {
        return 'arrow-left'
    }

    if (/^arrowdown$/i.test(e.code) || e.keyCode === 40) {
        return 'arrow-down'
    }

    if (/^arrowright$/i.test(e.code) || e.keyCode === 39) {
        return 'arrow-right'
    }

    if (/^space$/i.test(e.code) || e.keyCode === 32) {
        return 'spacebar'
    }

    // enter key
    if (/^enter$/i.test(e.code) || e.keyCode === 13) {
        return 'enter'
    }

    if (/^escape$/i.test(e.code) || e.keyCode === 27) {
        return 'esc'
    }

    if (/^tab$/i.test(e.code) || e.keyCode === 9) {
        return 'tab'
    }

    return ''
}
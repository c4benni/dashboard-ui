export default {
    isActive() {
        if (this.isActive && !this.contentLeaving) {
            this.renderRoot = true
        } else {
            this.renderContentAndBackdrop = false
        }
    },
    async renderRoot(n) {
        if (n) {
            await this.rootOpen()
        }
    },
    lockBodyScroll(n) {
        if (n) {
            this.lockBody()
        } else this.unlockBodyScroll()
    },
}
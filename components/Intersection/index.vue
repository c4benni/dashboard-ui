<script>
// helper component to easily use Intersection Observer.
// Really needed as an app will grow and more complex components will be added.

import { isHTML } from '../utils'
import { defaultConfig, inactiveEntry } from './utils'

export default {
  name: 'Intersection',
  props: {
    once: Boolean,
    disabled: Boolean,
    config: {
      type: Object,
      default: () => defaultConfig,
    },
  },
  emits: ['once-intersected', 'update:entry'],
  data: () => ({
    //   observer won't happen if component isn't mounted.
    // might change this to use the appMounted vuex state instead.
    isMounted: false,

    //   set initial state of entry to an object with inactive: true;
    // used to check if Observer has started or not;
    entry: inactiveEntry,

    // the intersection observer class;
    observer: null,
  }),
  watch: {
    disabled() {
      this.refresh()
    },
    once() {
      this.refresh()
    },
  },
  beforeMount() {
    this.onMount()
  },
  activated() {
    this.onMount()
  },
  beforeDestroy() {
    this.cleanup()
  },
  deactivated() {
    this.cleanup()
  },
  methods: {
    callback(entries) {
      for (const entry of entries) {
        const setPayload = () => {
          this.entry = entry
          this.$emit('update:entry', entry)
        }

        const callback = () => {
          if (this.once) {
            setPayload()
            if (entry.isIntersecting) {
              this.$emit('once-intersected')
              this.disconnect()
            }

            return
          }

          setPayload()
        }

        callback()
      }
    },
    async connect() {
      //  bail if this.observer is truthy, or props.disabled or not mounted; or this.$el isn't valid HTMLElement
      const elem = this.$el

      if (this.observer || this.disabled || !this.isMounted || !isHTML(elem)) {
        return
      }

      const initialOptions = {
        ...defaultConfig,
        ...this.config,
      }

      const options = {
        ...initialOptions,
        threshold: /string|number/i.test(typeof initialOptions.threshold)
          ? parseFloat(initialOptions.threshold)
          : initialOptions.threshold,
      }

      await this.$nextTick()

      this.observer = new IntersectionObserver(this.callback, options)

      this?.observer?.observe(elem)
    },
    async observe() {
      if (!this.isMounted) {
        return
      }

      this.entry = {}
      await this.$nextTick()

      this.connect()
    },
    disconnect() {
      const elem = this.$el
      if (isHTML(elem)) {
        this.observer?.unobserve(elem)
      }

      this.observer?.disconnect()

      this.$nextTick(() => {
        this.observer = null

        this.observer = null
      })
    },
    refresh() {
      this.cleanup()
      this.$nextTick(() => {
        this.onMount()
      })
    },
    onMount() {
      this.isMounted = true
      this.observe()
    },
    cleanup() {
      this.disconnect()
      this.entry = inactiveEntry
      this.isMounted = false
    },
  },

  render() {
    const el = this.$scopedSlots?.default?.(this.entry)
    return el
  },
}
</script>

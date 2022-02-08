<template>
  <li
    class="shadow-sm bg-white border border-gray-200 rounded h-79 md:h-88 py-10 px-8 md:py-12 md:px-12"
  >
    <figure class="grid">
      <!-- header row -->
      <header class="flex justify-between items-center mb-10 md:mb-12">
        <UiText tag="h4" class="text-gray-900" weight="500" :label="title" />

        <button
            aria-label="dropdown menu"
            class="rounded transition-[box-shadow,opacity] outline-none bg-white h-10 w-10 p-0 border-none border-gray-300 focus:border can-hover:hover:bg-gray-50 focus:bg-gray-25 active:opacity-80 focus:ring-4 ring-gray-100 inline-flex justify-center ml-4"
        >
          <Icon
            name="MoreVertical"
            title="Menu"
            class="text-gray-400"
            height="20"
            width="20"
          />
        </button>
      </header>

      <!-- body -->
      <div class="grid grid-cols-[1fr,auto] w-full items-end">
        <div class="grid gap-y-8">
          <UiText
            tag="h5"
            class="text-gray-900"
            weight="600"
            :size="isMobile ? 'xl' : '2xl'"
            :label="getTotal"
          />

          <figcaption
            :aria-label="captionLabel"
            class="text-gray-500 text-sm font-medium h-10 flex items-center justify-start"
          >
            <Icon
              width="20"
              height="20"
              :name="getTrend === 'up' ? 'ArrowUp' : 'ArrowDown'"
              class="inline-block mr-2"
              :class="[
                {
                  'text-success-500': getTrend === 'up',
                  'text-error-500': getTrend === 'down',
                },
              ]"
            />

            <UiText
              tag="span"
              size="sm"
              weight="500"
              class="text-success-700 inline-block h-full mr-4"
              :label="`${percent}%`"
            />

            vs {{ period }}
          </figcaption>
        </div>

        <Component
          :is="getTrend === 'up' ? 'ChartsUp' : 'ChartsDown'"
          :height="isMobile ? '48' : '64'"
          :width="isMobile ? '96' : '128'"
        />
      </div>
    </figure>
  </li>
</template>

<script>
import { mapState } from 'vuex'
import { requiredProp, requiredStringProp, trimmedLowerCase } from '../utils'
export default {
  name: 'MetricItem',
  props: {
    title: requiredStringProp,
    total: requiredProp(Number),
    percent: {
      type: Number,
      required: true,
      validator: (prop) => prop >= 0 && prop <= 100,
    },
    trend: {
      type: String,
      required: true,
      validator: (prop) => ['up', 'down'].includes(trimmedLowerCase(prop)),
    },
    period: {
      type: String,
      default: 'last month',
    },
  },
  computed: {
    ...mapState(['breakpoint']),
    isMobile() {
      return this.breakpoint.isMobile
    },
    captionLabel() {
      return `${this.getTrend} ${this.percent}% vs ${this.period}`
    },
    getTrend() {
      return trimmedLowerCase(this.trend)
    },
    getTotal() {
      if (typeof this.total === 'number') {
        return this.total.toLocaleString()
      }
      return ''
    },
  },
}
</script>

<style></style>

<template>
    <div
        role="progressbar"
        :aria-valuenow="value"
        :aria-valuemax="max"
        :aria-valuemin="min"
        :title=" `${percentage}%`"
        class="h-4 w-44 rounded-[4px] bg-primary-50 relative Progress"
        :style="{
            '--percent': `${percentage}%`
        }"
    />
</template>

<script>
export default {
    name:'Progress',
    props:{
        value: {
            type:Number,
            required:true,
        },
        max:{
            type: Number,
            default: 100
        },
        min:{
            type: Number,
            default: 0
        }
    },
    computed:{
        percentage(){
            return this.value/(this.max - this.min) * 100
        }
    }
}
</script>

<style scoped lang="postcss">
    .Progress::before{
        @apply bg-primary-600 rounded-[inherit] h-full absolute left-0 top-0 pointer-events-none;
        content: '';
        width: var(--percent);
    }
</style>

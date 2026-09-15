<template>
<div class="vsk-charts-grid muk-chart__wrapper">
   <template v-for="(item, index) in items" :key="item.id || index">
      <muk-chart :="item"/>
   </template>
</div>
</template>

<script setup lang="ts">
/* COMPONENTS  */
import { MukChart } from 'modular-ui-kit-vue';
/* CHART JS */
import type { ChartData, ChartOptions, ChartType } from 'chart.js';

export interface ChartItem{
   id?: string | number
   title?: string
   loading?: boolean
   emptyText?: string
   height?: string
   type?: ChartType
   data: ChartData | null
   options?: ChartOptions
   [key: string]: any
}

defineProps<{
   items: ChartItem[]
}>()
</script>

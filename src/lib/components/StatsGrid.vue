<template>
<div class="vsk-stats-grid">
   <div class="muk-metric-card__wrapper">
      <template v-for="(item, index) in items" :key="item.id || index">
         <muk-metric-card :="item">
            <template #icon v-if="$slots[`icon-${item.id}`] || $slots.icon">
               <slot :name="`icon-${item.id}`">
                  <slot name="icon" :item="item"></slot>
               </slot>
            </template>
         </muk-metric-card>
      </template>
   </div>
</div>
</template>

<script setup lang="ts">
/* COMPONENTS  */
import {  MukMetricCard } from 'modular-ui-kit-vue';

/* Props */
export interface StatItem {
   id?: string | number
   title: string
   value: string
   change?: string | number
   changePeriod?: string
   invert?: boolean
   loading?: boolean
   [key: string]: any
}

defineProps<{
   items: StatItem[]
}>()
</script>

<template>
<div class="vsk-data-wrapper">
   <div v-if="loading" class="vsk-data-wrapper__loading">
      <slot name="sleleton">
         <muk-skeleton width="100" height="100"/>
      </slot>
   </div>
   <div v-else-if="error" class="vsk-data-wrapper__error">
      <slot name="error">
         <muk-error-state>
            <template #action>
               <muk-button @click="$emit('retry')" variant="ghost">Try again</muk-button>
            </template>
         </muk-error-state>
      </slot>
   </div>
   <div v-else-if="!items || items.length === 0" class="vsk-data-wrapper__empty">
      <slot name="empty">
         <muk-empty-state/>
      </slot>
   </div>
   <template v-else>
      <slot :items="items"></slot>
   </template>
</div>
</template>

<script setup lang="ts" generic="T">
/* COMPONENTS */
import { MukEmptyState, MukErrorState, MukSkeleton, MukButton } from 'modular-ui-kit-vue';

/* PROPS & EMITS */
defineProps<{
   loading?: boolean
   error?: boolean | string | null
   items?: T[] | null
}>()

defineEmits<{
   (e: 'retry'): void
}>()
</script>

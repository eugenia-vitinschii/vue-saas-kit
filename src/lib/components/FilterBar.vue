<template>
<div class="vsk-filter-bar">
   <Transition name="fade">
   <div v-if="$slots.chips" class="vsk-filter-bar__header muk-section">
      <div class="vsk-filter-bar__chips">
         <slot name="chips"></slot>
      </div>
   </div>
   </Transition>
   <div class="vsk-filter-bar__filters muk-section">
      <div v-if="$slots.search" class="vsk-filter-bar__search">
         <slot name="search"></slot>
      </div>
      <div v-if="$slots.filters" class="vsk-filter-bar__group">
         <slot name="filters"></slot>
      </div>
      <slot name="reset" :on-reset="emitReset">
         <muk-button v-if="showReset" variant="danger" size="sm" @click="emitReset">reset</muk-button>
      </slot>
   </div>
      <div v-if="$slots.actions"  class="vsk-filter-bar__actions">
         <slot name="actions"></slot>
      </div>
</div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import { MukButton } from 'modular-ui-kit-vue';

/* PROPS & EMITS */
withDefaults(
   defineProps<{
      showReset?: boolean
   }>(),
   {
      showReset: true
   }
)

const emit = defineEmits<{
   (e: 'reset'): void
}>()

const emitReset = () => {
   emit('reset')
}
</script>

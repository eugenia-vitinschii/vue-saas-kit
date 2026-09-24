<template>
<div class="vsk-filter-bar">
   <div class="vsk-filter-bar__filters">
      <div v-if="$slots.search" class="vsk-filter-bar__search">
         <slot name="search"></slot>
      </div>
      <div v-if="$slots.filters" class="vsk-filter-bar__group">
         <slot name="filters"></slot>
      </div>
      <slot name="reset"></slot>
   </div>
      <div v-if="$slots.actions"  class="vsk-filter-bar__actions">
         <slot name="actions"></slot>
      </div>
</div>
</template>

<script setup lang="ts">

</script>

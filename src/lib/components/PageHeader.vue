<template>
<div class="vsk-page-header">
   <div class="vsk-page-header__breadcrumbs">
      <slot name="bradrumbs">
         <nav class="muk-breadcrumbs" v-if="breadcrumbs && breadcrumbs.length">
            <ul class="muk-breadcrumbs__list">
            <li class="muk-breadcrumbs__item"  v-for="(crumb, index) in breadcrumbs" :key="index">
               <muk-text as="a" :href="crumb.to">{{ crumb.label }}</muk-text>
               <muk-text  as="span" class="muk-breadcrumbs__item-separator" v-if="index < breadcrumbs.length -1">/</muk-text>
            </li>
            </ul>
         </nav>
      </slot>
   </div>
   <div class="vsk-page-header__main">
      <div class="vsk-page-header__main--title">
         <slot name="title">
         <muk-text as="h1" type="muk-heading">{{ title }}</muk-text>
         <muk-text variant="muted">{{ description}}</muk-text>
      </slot>
      </div>
      <div class="vsk-page-header__main--actions">
         <slot name="actions"></slot>
      </div>

   </div>
</div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import { MukText} from 'modular-ui-kit-vue';

export interface BreacrumbItem{
   label: string
   to?: string
}
/* PROPS */
defineProps<{
   title?: string
   description?: string
   breadcrumbs?: BreacrumbItem[]
}>()
</script>

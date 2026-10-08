<template>
   <table class="muk-table">
      <thead>
         <tr>
            <th v-for="n in (buttons ? columns - 1 :columns)" :key="n">
               <muk-skeleton width="128px" height="25px" />
            </th>
            <th v-if="buttons">
               <muk-skeleton width="128px" height="25px" />
            </th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="n in rows" :key="n">
            <td v-for="n in (buttons? columns - 1 : columns)" :key="n">
               <muk-skeleton width="136px" height="32px" />
            </td>
            <td v-if="buttons" class="muk-table__actions" :class="[`muk-table__actions--${actionsType}`]">
               <muk-skeleton width="100px" height="25px" v-for="n in buttons" :key="n" />
            </td>
         </tr>
      </tbody>
   </table>
</template>

<script setup lang="ts">
import { MukSkeleton } from 'modular-ui-kit-vue';

import type { ActionsLayoutType } from '../../types'

interface Props{
   rows: number
   buttons?: number
   columns: number
   actionsType?: ActionsLayoutType
}
withDefaults(defineProps<Props>(), {
   actionsType: 'column',
   buttons: 0
})
</script>

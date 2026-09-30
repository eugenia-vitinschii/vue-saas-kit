<template>
   <table class="muk-table table-skeleton">
      <thead>
         <tr>
            <th v-for="n in columns" :key="n">
               <muk-skeleton width="128px" height="25px" />
            </th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="n in rows" :key="n">
            <td v-for="n in (columns - 1)" :key="n">
               <muk-skeleton width="136px" height="32px" />
            </td>
            <td class="table-skeleton__actions">
               <muk-skeleton width="100px" height="25px" v-for="n in buttons" :key="n" />
            </td>
         </tr>
      </tbody>
   </table>
</template>

<script setup lang="ts">
import { MukSkeleton } from 'modular-ui-kit-vue';

const props = defineProps<{
   rows: number
   buttons: number
   columns: number
}>()
</script>


<style lang="sass">
.table-skeleton__actions
   display: flex
   flex-direction: column
   gap: 5px
</style>
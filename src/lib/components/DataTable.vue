<template>
<div class="vsk-data-table muk-table-wrapper muk-section">
   <table class="muk-table">
      <thead>
         <tr>
            <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
            <th v-if="$slots.actions || showActions">Actions</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="(item, rowIndex) in items" :key="item.id || rowIndex">
            <td v-for="col in columns" :key="col.key">
               <slot :name="`cell-${col.key}`" :item="item" :value="item[col.key]">{{ item[col.key] }}</slot>
            </td>
            <td v-if="$slots.actions || showActions">
               <div class="muk-table__actions" :class="[`muk-table__actions--${actionsType}`]">
                  <slot name="actions" :item="item"></slot>
               </div>
            </td>
         </tr>
      </tbody>
   </table>
   <div v-if="pagination" class="vsk-data-table__pagination">
      <slot name="pagination"></slot>
   </div>
</div>
</template>

<script setup lang="ts">

export type ActionsLayoutType = 'column' | 'row'

export interface TableColumn {
   key: string
   label: string
}

withDefaults(
   defineProps<{
      columns?: TableColumn[]
      items?: Record<string, any>[]
      actionsType?: ActionsLayoutType
      showActions?: boolean
      pagination?: boolean
   }>(),
   {
      columns: () => [],
      items: () => [],
      actionsType: 'column',
      showActions: false,
      pagination: false
   }
)
</script>

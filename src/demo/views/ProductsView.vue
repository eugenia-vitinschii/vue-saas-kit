<template>
<div>
    <page-header title="Products" description="Manage your store products and inventory" :breadcrumbs="[{ label: 'Dashboard', to: '/'}, { label: 'Products'}]">
      <template #actions>
         <muk-icon-button  variant="secondary" size="md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M480-480ZM202-65l-56-57 118-118h-90v-80h226v226h-80v-89L202-65Zm278-15v-80h240v-440H520v-200H240v400h-80v-400q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H480Z"/></svg>
          <template #text> export</template>
         </muk-icon-button>
          <muk-icon-button variant="success"  size="md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            <template #text>add product</template>
          </muk-icon-button>
      </template>
    </page-header>
    <data-table :columns="productColumns" :items="productsList" pagination>
      <template #cell-status="{value}">
        <muk-badge :text="value" size="sm" :variant="getStatusVariant(value)">
          <template #icon>
            <svg v-if="value === 'In Stock'" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            <svg  v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-400v-360h80v360h-80Zm0 200v-80h80v80h-80Z"/></svg>
          </template>
        </muk-badge>
      </template>
      <template #actions>
        <muk-icon-button size="sm" variant="danger">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
          <template #text>delete</template>
        </muk-icon-button>
        <muk-icon-button size="sm" variant="secondary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
          <template #text>edit</template>
        </muk-icon-button>
      </template>
      <template #pagination>
         <muk-pagination :total-pages="13" :page="currentPage" @change="currentPage = $event" />
      </template>
    </data-table>
</div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue';

/* COMPONENTS  */
import {  MukIconButton, MukPagination, MukBadge } from 'modular-ui-kit-vue';
import PageHeader from '../../lib/components/PageHeader.vue';
import DataTable from '../../lib/components/DataTable.vue';

export interface ProductItem {
  id: string
  name: string
  sku: string
  category: string
  price: string
  stock: number
  status: 'In Stock' | 'Low Stock' | 'Out of Stock'
}

const productColumns = [
  { key: 'name', label: 'Product Name' },
  { key: 'sku', label: 'SKU' },
  { key: 'category', label: 'Category' },
  { key: 'price', label: 'Price' },
  { key: 'stock', label: 'Stock' },
  { key: 'status', label: 'Status' }
]

const productsList = ref<ProductItem[]>([
  {
    id: '1',
    name: 'Wireless Noise-Canceling Headphones',
    sku: 'AUDIO-001',
    category: 'Electronics',
    price: '$299.00',
    stock: 45,
    status: 'In Stock'
  },
  {
    id: '2',
    name: 'Ergonomic Leather Chair',
    sku: 'FURN-104',
    category: 'Furniture',
    price: '$450.00',
    stock: 12,
    status: 'In Stock'
  },
  {
    id: '3',
    name: 'Mechanical Gaming Keyboard',
    sku: 'PERIPH-088',
    category: 'Electronics',
    price: '$129.50',
    stock: 3,
    status: 'Low Stock'
  },
  {
    id: '4',
    name: 'Minimalist Water Bottle 1L',
    sku: 'ACC-012',
    category: 'Accessories',
    price: '$24.00',
    stock: 0,
    status: 'Out of Stock'
  },
  {
    id: '5',
    name: '4K Ultra HD Monitor 27"',
    sku: 'DISP-055',
    category: 'Electronics',
    price: '$580.00',
    stock: 18,
    status: 'In Stock'
  },  {
    id: '11',
    name: 'Wireless Noise-Canceling Headphones',
    sku: 'AUDIO-001',
    category: 'Electronics',
    price: '$299.00',
    stock: 45,
    status: 'In Stock'
  },
  {
    id: '22',
    name: 'Ergonomic Leather Chair',
    sku: 'FURN-104',
    category: 'Furniture',
    price: '$450.00',
    stock: 12,
    status: 'In Stock'
  },
  {
    id: '33',
    name: 'Mechanical Gaming Keyboard',
    sku: 'PERIPH-088',
    category: 'Electronics',
    price: '$129.50',
    stock: 3,
    status: 'Low Stock'
  },
  {
    id: '44',
    name: 'Minimalist Water Bottle 1L',
    sku: 'ACC-012',
    category: 'Accessories',
    price: '$24.00',
    stock: 0,
    status: 'Out of Stock'
  },
  {
    id: '55',
    name: '4K Ultra HD Monitor 27"',
    sku: 'DISP-055',
    category: 'Electronics',
    price: '$580.00',
    stock: 18,
    status: 'In Stock'
  }
])

const getStatusVariant = (status: string) =>{
  switch (status){
    case 'In Stock': return 'success'
    case 'Low Stock': return 'warning'
    case 'Out of Stock': return 'danger'
    default: return 'secondary'
  }
}
const currentPage = ref(2)
</script>

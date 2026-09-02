<template>
<div class="vsk-wrapper">
  <admin-layout :user="user" :menu="menu">
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
    <muk-text>/* === Content === */</muk-text>
    <muk-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis autem dolorem rem?</muk-text>
  </admin-layout>
  </div>
</template>

<script setup lang="ts">
/* Vue */
import { ref } from 'vue'

/* COMPONENTS */
import { MukText, MukIconButton} from 'modular-ui-kit-vue';
import AdminLayout from './lib/components/AdminLayout.vue';
import PageHeader from './lib/components/PageHeader.vue';
/* Types */
import type { MenuItem, UserProfile } from '../src/lib/types/index.ts'

/* demo data */
const user = ref<UserProfile>({
  name: 'Eugenia Vitinschii',
  role: 'Admin',
  avatar: 'https://api.dicebear.com/10.x/bottts/svg?seed=Alice'
})

const menu = ref<MenuItem[]>([
  { id: '1', icon: '📊', label: 'Dashboard', to: '/' },
  { id: '2', icon: '📦', label: 'Products', to: '/products', badge: '128' },
  { id: '3', icon: '🛒', label: 'Orders', to: '/orders', badge: '5' },
  { id: '4', icon: '👥', label: 'Customers', to: '/customers' },
  { id: '5', icon: '⚙️', label: 'Settings', to: '/settings', badge: 'NEW' }
])
</script>

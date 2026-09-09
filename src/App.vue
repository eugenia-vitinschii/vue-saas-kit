<template>
<div class="vsk-wrapper">
  <admin-layout :user="user" :menu="menu">
    <router-view/>
  </admin-layout>
  </div>
</template>

<script setup lang="ts">
/* Vue */
import { ref } from 'vue'

/* COMPONENTS */
import AdminLayout from './lib/components/AdminLayout.vue';

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

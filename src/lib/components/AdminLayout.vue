<template>
<div class="vsk-layout">
   <!-- sidebar -->
   <aside class="vsk-sidebar" :class="{'vsk-sidebar--collapsed': isCollapsed}">
      <div class="vsk-sidebar__header">
         <div class="vsk-sidebar__logo">
            <slot name="logo">
            <muk-text type="muk-subheading" variant="primary">SaaS Kit</muk-text>
         </slot>
         </div>
      </div>
      <!-- nav  -->
      <nav class="vsk-sidebar__nav">
         <slot name="nav">
            <ul>
               <li v-for="item in menu" :key="item.id">
                  <a :href="item.to || '#'" >
                     <muk-text v-if="item.icon" as="span">{{ item.icon }}</muk-text>
                     <muk-text v-if="!isCollapsed" as="span">{{ item.label }} </muk-text>
                     <muk-text v-if="item.badge && !isCollapsed" as="span">{{ item.badge  }} </muk-text>
                  </a>
               </li>
            </ul>
         </slot>
      </nav>
   </aside>
   <!-- wrapper -->
    <div class="vsk-main-wrapper">
      <!-- header -->
       <header class="vsk-header">
         <div class="vsk-header__left">
             <muk-icon-button @click="toggleSidebar"> 
               <svg v-if="isCollapsed" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
               <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            </muk-icon-button>
            <slot name="header-left"></slot>
         </div>
         <div class="vsk-header__right">
            <div v-if="user" class="vsk-user-profile">
               <div v-if="user.avatar" class="vsk-user-profile__avatar">
                   <img :src="user.avatar" :alt="user.name">
               </div>
               <div class="vsk-user-profile__info">
                  <muk-text type="muk-caption">{{ user.name }}</muk-text>
                  <muk-text type="muk-caption" variant="secondary">{{ user.role}}</muk-text>
               </div>
            </div>
         </div>
       </header>
       <!-- content -->
        <main class="vsk-content">
         <slot></slot>
        </main>
    </div>
</div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue';

/* COMPONENTS */
import { MukText, MukIconButton } from 'modular-ui-kit-vue';
import type { MenuItem, UserProfile } from '../types';

const props = withDefaults(
   defineProps<{
      menu?: MenuItem[]
      user?: UserProfile
      collapsible?: boolean
   }>(),
   {
      collapsible: true
   }
)

const isCollapsed = ref(false)

const toggleSidebar = () => {
   isCollapsed.value = !isCollapsed.value
}

</script>

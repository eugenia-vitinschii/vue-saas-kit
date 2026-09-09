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
   <muk-text>/* === DATA TABLE === */</muk-text>
</div>
</template>

<script setup lang="ts">

/* COMPONENTS  */
import { MukText, MukIconButton } from 'modular-ui-kit-vue';
import PageHeader from '../../lib/components/PageHeader.vue';

</script>

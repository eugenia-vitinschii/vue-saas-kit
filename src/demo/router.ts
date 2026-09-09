import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         name: 'dashboard',
         component: () => import('./views/DashboardView.vue')
      },
      {
         path: '/products',
         name: 'products',
         component: () => import('./views/ProductsView.vue')
      },
   ]
})
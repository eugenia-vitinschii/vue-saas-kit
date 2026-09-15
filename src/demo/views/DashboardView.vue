<template>
<div>
    <page-header title="Dashboard" description="Overview of your store performance, sales metrics, and key activity.">
    </page-header>
   <stats-grid :items="metricsData">
    <template #icon-revenue><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M200-120q-33 0-56.5-23.5T120-200v-640h80v640h640v80H200Zm40-120v-360h160v360H240Zm200 0v-560h160v560H440Zm200 0v-200h160v200H640Z"/></svg></template>
    <template #icon-subscriptions><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z"/></svg></template>
    <template #icon-churn><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" ><path d="M280-320h400v-80H280v80Zm0-160h160v-60h-57q20-19 45-29.5t52-10.5q47 0 83.5 27.5T614-480h62q-14-70-69-115t-127-45q-39 0-75.5 15T340-582v-58h-60v160ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></template>
    <template #icon-avg-order><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z"/></svg></template>
    <template #icon-pending><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93ZM320-320v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T663-540L443-320H320Zm300-263-37-37 37 37ZM380-380h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg></template>
    <template #icon-conversion><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-160q-33 0-56.5-23.5T200-240v-370L40-800h760q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H280Zm-68-560 68 80v400h520v-480H212Zm328 460 56-56-44-44h168v-80H360l180 180ZM360-520h360L540-700l-56 56 44 44H360v80Zm146 40Z"/></svg></template>
   </stats-grid>
    <charts-grid :items="chartsData"/>
</div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue';

/* COMPONENTS  */
import PageHeader from '../../lib/components/PageHeader.vue';
import StatsGrid from '../../lib/components/StatsGrid.vue';
import ChartsGrid from '../../lib/components/ChartsGrid.vue';

/* TYPES */
import type { StatItem } from '../../lib/components/StatsGrid.vue';
import type { ChartItem } from '../../lib/components/ChartsGrid.vue';

const metricsData = ref<StatItem[]>([
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: '$350,959',
    change: '12.2',
    changePeriod: 'Since last month',
    invert: false,
    loading: false
  },
  {
    id: 'subscriptions',
    title: 'Active Subscriptions',
    value: '1,284',
    change: '8.4',
    changePeriod: 'Since last month',
    invert: false,
    loading: false
  },
  {
    id: 'churn',
    title: 'Bounce Rate',
    value: '24.5%',
    change: '3.1',
    changePeriod: 'Since last week',
    invert: true,
    loading: false
  },
  {
    id: 'avg-order',
    title: 'Avg. Order Value',
    value: '$84.20',
    change: '1.5',
    changePeriod: 'vs previous period',
    invert: true,
    loading: false
  },
  {
    id: 'pending',
    title: 'Pending Orders',
    value: '18',
    loading: true 
  },
  {
    id: 'conversion',
    title: 'Conversion Rate',
    value: '3.42%',
    change: '0.6',
    changePeriod: 'Since yesterday',
    invert: false,
    loading: false
  }
])

//charts data 

const chartsData = ref<ChartItem[]>([
  {
    id: 'monthly-revenue',
    title: 'Revenue Analytics ($)',
    type: 'line',
    height: '280px',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Monthly Recurring Revenue (MRR)',
          data: [12500, 15000, 14200, 18900, 22400, 21000, 26800],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: true,
          tension: 0.3
        }
      ]
    }
  },
  {
    id: 'new-customers',
    title: 'New Subscriptions',
    type: 'bar',
    height: '280px',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Signups',
          data: [42, 68, 55, 91, 73, 30, 24],
          backgroundColor: '#10b981',
          borderRadius: 6
        }
      ]
    }
  },
  {
    id: 'sales-by-category',
    title: 'Sales Distribution',
    type: 'doughnut',
    height: '280px',
    data: {
      labels: ['Electronics', 'Software', 'Services', 'Accessories'],
      datasets: [
        {
          data: [45, 30, 15, 10],
          backgroundColor: ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b']
        }
      ]
    }
  }
])

</script>
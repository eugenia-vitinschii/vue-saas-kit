# vue-saas-kit

An opinionated, production-ready UI & layout kit designed for building scalable SaaS applications at lightning speed. Built on top of **modular-ui-kit-vue (MUK)**, it seamlessly integrates with your design system, allowing you to customize and extend components without breaking visual consistency.

[![NPM Version](https://img.shields.io/npm/v/vue-saas-kit?color=42b883)](https://www.npmjs.com/package/vue-saas-kit)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-saas-kit?color=35495e)](https://www.npmjs.com/package/vue-saas-kit)
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/156a8f029e2ba34111c3cce1f1bab240/raw/clone.json&logo=github)](https://github.com/MShawon/github-clone-count-badge)

`vue-saas-kit` provides essential high-level architecture patterns—such as layout wrappers, state management wrappers, and dynamic tables—so you can focus on building core business logic rather than reinventing the wheel.

Install

```
npm i vue-saas-kit
```

### ⭐️`AdminLayout`⭐️

The root application shell for your SaaS dashboard. It features a collapsible sidebar with automated navigation rendering, a sticky top header with built-in collapse triggers and user profile support, and flexible content slotting.

#### Features & Highlights
* **Collapsible Sidebar:** Supports smooth toggling with an interactive collapse/expand button in the header.
* **Auto-rendered Navigation:** Pass a simple `menu` array to automatically generate nav links with optional icons and badges, or pass custom markup via slots.
* **User Profile Header:** Built-in support for displaying user avatars, names, and roles out of the box.
* **Extensible Slots:** Custom slots for `logo`, `nav`, `header-left`, and main page content.


#### Type Definitions

```ts
export interface MenuItem{
   id: string
   label: string
   icon?: string
   to?: string
   badge?: string | number
   children?: MenuItem[]
}
export interface UserProfile{
   name: string
   email?: string
   avatar?: string
   role?: string
}
```

#### Props

```ts
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
```
#### Slots

| Slot Name | Description |
| :--- | :--- |
| `logo` | Custom logo or app title in the sidebar header. |
| `nav` | Overrides the default menu list rendering. |
| `header-left` | Custom components (breadcrumbs, quick actions) next to the toggle button. |
| `default` | Main layout content slot for your page views. |


### ⭐️`PageHeader`⭐️

A standardized header component for SaaS page views. It handles breadcrumb navigation, main page titling, subtext/descriptions, and action buttons layout seamlessly.

#### Features & Highlights
- **Breadcrumbs Integration:** Automatically renders breadcrumb links with custom separators or accepts custom markup via slots.
- **Title & Description:** Renders main heading with muted subtext using MUK text primitives.
- **Action Area:** Dedicated right-aligned slot for page actions (e.g., "Create Item", "Export CSV", "Filters").

#### Type Definitions

```ts
export interface BreadcrumbItem {
  label: string
  to?: string
}
```
#### Props

```ts
defineProps<{
  title?: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
}>()
```

#### Slots

| Slot Name | Description |
| :--- | :--- |
| `breadcrumbs` | Overrides the default breadcrumb navigation list. |
| `title` | Overrides the main title and description block. |
| `actions` | Right-aligned container for page action buttons, search, or filters. |

### ⭐️`StatsGrid`⭐️

A dynamic metrics grid component built on top of MUK's `MukMetricCard`. Designed for dashboard overview pages to showcase key performance indicators (KPIs), trends, and analytics at a glance.

#### Features & Highlights
- **Smart Metric Cards:** Leverages MUK metric primitives supporting titles, values, percentage changes, and trend periods.
- **Trend Inversion (`invert`):** Automatically color-codes percentage changes (green/red) with full support for inverted logic (e.g., when a "+20%" increase in churn is bad/red, but an increase in revenue is good/green).
- **Flexible Icon Slotting:** Supports both global item icon fallbacks (`#icon`) and dynamic per-card slots (`#icon-[id]`).
- **Loading Skeleton Support:** Handles individual card loading states via prop forwarding.

#### Type Definitions

```ts
export interface StatItem {
  id?: string | number
  title: string
  value: string
  change?: string | number
  changePeriod?: string
  invert?: boolean
  loading?: boolean
  [key: string]: any
}
```

#### Props

```ts
defineProps<{
   items: StatItem[]
}>()
```

#### Slots

| Slot Name | Scope| Description |
| :--- | :--- | :--- |
| `icon` | { item: StatItem }| Default fallback slot for rendering icons inside all metric cards. |
| `icon-[id]` |-| Dynamic slot for rendering a specific icon for a metric item by its id.|


### ⭐️`ChartsGrid`⭐️

A responsive grid component designed to display multiple analytical charts side by side. Built on top of MUK's `MukChart` and integrated with Chart.js to handle loading states, empty states, and custom chart configurations effortlessly.

#### Features & Highlights
- **Multi-Chart Layout:** Renders an array of independent charts (line, bar, doughnut, pie, etc.) in a unified grid wrapper.
- **MUK Chart Primitive Integration:** Automatically inherits native loading skeletons, headers, heights, and empty state fallbacks for every chart item.
- **Chart.js Ecosystem:** Direct support for native Chart.js `type`, `data`, and `options` configurations.

#### Type Definitions

```ts
import type { ChartData, ChartOptions, ChartType } from 'chart.js'

export interface ChartItem {
  id?: string | number
  title?: string
  loading?: boolean
  emptyText?: string
  height?: string
  type?: ChartType
  data: ChartData | null
  options?: ChartOptions
  [key: string]: any
}
```
#### Props

```ts
defineProps<{
  items: ChartItem[]
}>()
```

### ⭐️`FilterBar`⭐️

A flexible layout wrapper designed to organize search inputs, filter controls, reset triggers, and action buttons into a structured toolbar. Built on top of MUK's `muk-section`, it relies entirely on named slots to provide complete freedom over UI controls.

#### Features & Highlights
- **Slot-First Architecture:** Complete flexibility to use MUK UI primitives (`muk-input`, `muk-select`, `muk-button`) or standard HTML form controls.
- **Conditional Rendering:** Internal wrappers automatically hide if corresponding slots are not provided.
- **Structured Layout:** Pre-defined sections for search, filter groups, reset actions, and secondary toolbar actions.

#### Slots

| Slot Name | Description |
| :--- | :--- |
| `search` | Main search input field (e.g., search bar or search icon input). |
| `filters` | Group of filtering controls (dropdowns, date pickers, multi-selects). |
| `reset` | Reset trigger button or link to clear active filters. |
| `actions` | Right-aligned action triggers (e.g., "Export", "Create", "Refresh"). |


#### Basic Usage

```vue
<template>
  <FilterBar>
    <!-- Search Slot -->
    <template #search>
      <muk-input
        v-model="searchQuery"
        placeholder="Search records..."
        icon="search"
      />
    </template>

    <!-- Filters Group Slot -->
    <template #filters>
      <muk-select
        v-model="selectedStatus"
        :options="statusOptions"
        placeholder="Status"
      />
      <muk-select
        v-model="selectedRole"
        :options="roleOptions"
        placeholder="Role"
      />
    </template>

    <!-- Reset Trigger Slot -->
    <template #reset>
      <muk-button variant="ghost" size="lg"  @click="resetFilters">
        Reset
      </muk-button>
    </template>

    <!-- Right Actions Slot -->
    <template #actions>
      <muk-button variant="primary" size="lg"  @click="exportData">
        Export CSV
      </muk-button>
    </template>
  </FilterBar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FilterBar } from 'vue-saas-kit'
import { MukInput, MukSelect, MukButton } from 'modular-ui-kit-vue'

const searchQuery = ref('')
const selectedStatus = ref(null)
const selectedRole = ref(null)

const statusOptions = [
  { label: 'Active', value: 'active' },
  { label: 'Pending', value: 'pending' },
]

const roleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'Member', value: 'member' },
]

const resetFilters = () => {
  searchQuery.value = ''
  selectedStatus.value = null
  selectedRole.value = null
}

const exportData = () => {
  // Export logic
}
</script>
```
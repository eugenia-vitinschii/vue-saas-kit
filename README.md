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
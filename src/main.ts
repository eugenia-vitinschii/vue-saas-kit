
import 'modular-ui-kit-vue/dist/modular-ui-kit-vue.css'
import './lib/styles/app.sass'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

const app = createApp(App)

// app.use(createPinia())
// app.use(router)

app.mount('#app')

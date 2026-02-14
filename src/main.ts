import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { theme } from './theme/theme'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(theme)

app.mount('#app')

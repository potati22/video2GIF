import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/reset.scss'

import { setupStore } from '@/store/index'

const app = createApp(App)

setupStore(app)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

import { router } from '@/router/index'

import 'virtual:svg-icons-register'
import { registerComponents } from '@/components/main'

import '@/styles/reset.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/dark/css-vars.css'

const app = createApp(App)

app.use(router)
registerComponents(app)

app.mount('#app')

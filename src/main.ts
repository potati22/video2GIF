import { createApp } from 'vue'
import App from './App.vue'

import { router } from '@/router/index'

import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'

import '@/styles/reset.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/dark/css-vars.css'

const app = createApp(App)

app.use(router)
app.component('SvgIcon', SvgIcon)

app.mount('#app')

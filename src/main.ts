import { createApp } from 'vue'
import App from './App.vue'

import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'

import '@/styles/reset.scss'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.mount('#app')

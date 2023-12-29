import type { App } from 'vue'

import HSvgIcon from '@/components/web/HSvgIcon.vue'
import HButton from '@/components/web/HButton.vue'
import HInput from '@/components/web/HInput.vue'

export function registerComponents(app: App<Element>) {
  app.component('HSvgIcon', HSvgIcon)
  app.component('HButton', HButton)
  app.component('HInput', HInput)
}

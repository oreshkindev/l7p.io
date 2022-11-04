import { createApp } from 'vue'
import App from './app.vue'
import { setupRouter } from './router'
import { setupI18n } from './i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = setupI18n({
  legacy: false,
  locale: 'en',
  globalInjection: true,
  fallbackLocale: 'ru',
  messages,
})
const router = setupRouter(i18n)

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')

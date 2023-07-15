import { createApp } from 'vue'
import App from './app.vue'
import { setupRouter } from './router'
import { setupI18n } from './i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = setupI18n({
  legacy: false,
  locale: 'en',
  globalInjection: true,
  fallbackLocale: 'zh',
  messages,
})
const router = setupRouter(i18n)

const app = createApp(App)
// use this directive to close the drop-down menu if you clicked outside it
app.directive('outside', {
  beforeMount(el, binding) {
    el.clickOutsideEvent = (evt: { stopPropagation: () => void; target: any }) => {
      evt.stopPropagation()
      // here I check that click was outside the el and his children
      if (!(el === evt.target || el.contains(evt.target))) {
        // and if it did, call method provided in attribute value
        binding.value(evt, el)
      }
    }
    window.requestAnimationFrame(() => {
      document.addEventListener('click', el.clickOutsideEvent)
    })
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
})
app.use(i18n)
app.use(router)
app.mount('#app')

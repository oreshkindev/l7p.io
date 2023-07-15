import { createRouter, createWebHistory } from 'vue-router'
import { getLocale, setI18nLanguage, loadLocaleMessages, SUPPORT_LOCALES } from '../i18n'

import type { Router, RouteRecordRaw } from 'vue-router'
import type { I18n } from 'vue-i18n'

import Home from './views/home.vue'
import FAQ from './views/faq.vue'
import Bussines from './views/bussines.vue'
import Privacy from './views/privacy-policy.vue'

export function setupRouter(i18n: I18n): Router {
  const locale = getLocale(i18n)

  // setup routes
  const routes: RouteRecordRaw[] = [
    {
      path: '/:locale/',
      name: 'home',
      component: Home,
    },
    {
      path: '/:locale/faq',
      name: 'faq',
      component: FAQ,
    },
    {
      path: '/:locale/bussines',
      name: 'bussines',
      component: Bussines,
    },
    {
      path: '/:locale/privacy-policy',
      name: 'privacy-policy',
      component: Privacy,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => `/${locale}`,
    },
  ]

  // create router instance
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      // always scroll to top
      return { top: 0 }
    },
  })

  // navigation guards
  router.beforeEach(async (to) => {
    const paramsLocale = to.params.locale as string

    // use locale if paramsLocale is not in SUPPORT_LOCALES
    if (!SUPPORT_LOCALES.includes(paramsLocale)) {
      return `/${locale}`
    }

    // load locale messages
    if (!i18n.global.availableLocales.includes(paramsLocale)) {
      await loadLocaleMessages(i18n, paramsLocale)
    }

    // set i18n language
    setI18nLanguage(i18n, paramsLocale)
  })

  return router
}

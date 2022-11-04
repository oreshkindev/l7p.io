import { createRouter, createWebHistory } from 'vue-router'
import { getLocale, setI18nLanguage, loadLocaleMessages, SUPPORT_LOCALES } from '../i18n'

import type { Router, RouteRecordRaw } from 'vue-router'
import type { I18n } from 'vue-i18n'

import Home from './views/home.vue'
import Aml from './views/aml.vue'
import Privacy from './views/privacy-policy.vue'
import Cookies from './views/cookies-policy.vue'
import Terms from './views/terms-and-conditions.vue'
import Contact from './views/contact-us.vue'

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
      path: '/:locale/aml',
      name: 'aml',
      component: Aml,
    },
    {
      path: '/:locale/privacy-policy',
      name: 'privacy-policy',
      component: Privacy,
    },
    {
      path: '/:locale/cookies-policy',
      name: 'cookies-policy',
      component: Cookies,
    },
    {
      path: '/:locale/terms-and-conditions',
      name: 'terms-and-conditions',
      component: Terms,
    },
    {
      path: '/:locale/contact-us',
      name: 'contact-us',
      component: Contact,
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

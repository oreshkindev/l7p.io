<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const { t, locale } = useI18n() // same as `useI18n({ useScope: 'global' })`
const router = useRouter()

const visible = ref(false)

/**
 * select locale value for language select form
 *
 * If you use the vue-i18n composer `locale` property directly, it will be re-rendering component when this property is changed,
 * before dynamic import was used to asynchronously load and apply locale messages
 * To avoid this, use the another locale reactive value.
 */
const currentLocale = ref(locale.value)
// sync to switch locale from router locale path
watch(router.currentRoute, (route) => {
  currentLocale.value = route.params.locale as string
})
/**
 * when change the locale, go to locale route
 *
 * when the changes are detected, load the locale message and set the language via vue-router navigation guard.
 * change the vue-i18n locale too.
 */
watch(currentLocale, (val) => {
  router.push({
    name: router.currentRoute.value.name!,
    params: { locale: val },
  })
})
</script>

<template>
  <header>
    <nav :class="{ visible: visible }" v-outside="() => (visible = false)">
      <router-link :to="{ name: 'home', params: { locale } }" @click="visible = false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 59.83" width="83" height="25">
          <path
            fill="var(--color-theme)"
            d="M200 59.83s-44.13-48.2-46.97-51.04c-2.85-2.85-6.17-5.05-9.88-6.56C139.57.78 135.79.04 131.92.04s-7.65.74-11.23 2.19c-3.71 1.5-7.03 3.71-9.88 6.56l-.09.09-6.99 7.62 8.92 8.57 7-7.63c6.83-6.73 17.85-6.7 24.64.09 3.3 3.3 5.12 7.69 5.12 12.36s-1.82 9.06-5.12 12.36c-6.79 6.79-17.82 6.82-24.64.09L89.03 8.98l-.09-.1-.09-.09C86 5.94 82.68 3.74 78.97 2.23 75.38.78 71.61.04 67.73.04S60.08.78 56.5 2.23c-3.71 1.5-7.03 3.71-9.88 6.56-2.85 2.85-5.05 6.17-6.56 9.88-.67 1.64-1.18 3.33-1.54 5.04L16.79 0H0s43.77 48.16 46.62 51.01c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56l.09-.09 7-7.63-8.44-9.12L80 42.35c-6.83 6.73-17.85 6.7-24.64-.09s-6.82-17.91 0-24.73c6.79-6.79 17.82-6.82 24.64-.09l30.61 33.37.09.1.09.09c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56 2.85-2.85 5.05-6.17 6.56-9.88.7-1.73 1.24-3.51 1.6-5.32l22.03 24.02h16.79Z"
          />
        </svg>
        <span>+ PAY</span>
      </router-link>

      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16" @click="visible = !visible">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </svg>

      <router-link :to="{ name: 'bussines', params: { locale } }" @click="visible = false">Business</router-link>
      <router-link :to="{ name: 'faq', params: { locale } }" @click="visible = false">F.A.Q</router-link>
      <a href="https://portal.vooladmcc.com/auth" target="_blank">Log In</a>
      <a href="https://portal.vooladmcc.com/auth/register/user" target="_blank">Sign Up</a>
    </nav>
  </header>

  <router-view />

  <footer>
    <nav>
      <router-link :to="{ name: 'privacy-policy', params: { locale } }">Privacy policy</router-link>
      <a href="https://portal.vooladmcc.com/legal/terms" target="_blank">Website Terms and Conditions</a>
      <a href="https://portal.vooladmcc.com/legal/termsofuse" target="_blank">Terms of Use</a>

      <span>© 2023 VOOLA PAY</span>
    </nav>
  </footer>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&family=Noto+Sans:wght@300&display=swap');

/* semantic color variables for this project */
:root {
  --border-radius: 50px;

  --color-background: #0a0b0d;

  --color-foreground: #18191b;

  --color-text: #ffffff;

  --color-theme: #4e94d7;

  --font: 15px;

  --font-family: 'Noto Sans', 'Noto Sans SC', sans-serif;

  --section-gap: 20px;

  --section-width: 1420px;
}

/* 
  resset
*/

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
  font: 300 var(--font) / 1.64 var(--font-family);
  transition: color 0.3s, background-color 0.3s;
}

h1 {
  font: 300 72px / 1.32 var(--font-family);
}

h3 {
  font: 300 42px / 1.32 var(--font-family);
}

h4 {
  font: 300 18px / 1.32 var(--font-family);
}

img {
  display: inherit;
  width: 100%;
}

p {
  color: #ffffff60;
  text-align: justify;
}

picture {
  display: inline-block;
}

::selection {
  background: #4e95d720;
}

/* 
  header
*/

header {
  background-color: var(--color-foreground);
  box-shadow: -5px 5px 25px 5px #00000080;
  inset: 0 auto auto;
  position: sticky;
  z-index: 9;
}

header > nav {
  margin: auto;
  max-width: var(--section-width);
}

header > nav {
  padding: var(--section-gap);
}

header > nav {
  display: flex;
  gap: var(--section-gap);
  place-items: center baseline;
}

header > nav > svg {
  display: none;
}

header > nav > a {
  border: 2px solid;
  border-color: #0000;
}

header > nav > a:hover {
  border-color: #0000 #0000 var(--color-theme);
}

header > nav > a:first-child {
  display: inherit;
  margin: 0 auto 0 0;
}

header > nav > a:first-child > span {
  color: #ffffff60;
  margin: -13px 0 0 -10px;
}

header > nav > a:first-child:hover {
  border-color: #0000;
}

header > nav > a:last-child {
  background-color: #ffffff08;
  border-radius: 25px;
  padding: 6px 20px;
}

header > nav > a:last-child:hover {
  background-color: var(--color-theme);
  border-color: #0000;
  color: var(--color-background);
}

/* 
  main
*/

main {
  margin: auto;
  max-width: var(--section-width);
}

main {
  padding: var(--section-gap);
}

/* 
  footer
*/

footer > nav {
  margin: auto;
  max-width: var(--section-width);
}

footer > nav {
  padding: var(--section-gap);
}

footer > nav {
  display: flex;
  gap: var(--section-gap);
  place-items: center baseline;
}

footer > nav > a {
  border: 2px solid;
  border-color: #0000;
}

footer > nav > a:hover {
  border-color: #0000 #0000 var(--color-theme);
}

footer > nav > span {
  color: #ffffff60;
  margin: 0 0 0 auto;
}

/* 
  media queries
*/

@media (max-width: 720px) {
  header > nav {
    display: grid;
    grid-template: auto / 1fr auto;
    place-items: center;
  }

  .visible > a {
    display: grid;
  }

  .visible > svg {
    color: #ffffff60;
  }

  header > nav > svg {
    display: grid;
    grid-column: 2 / 3;
  }

  header > nav > a:first-child {
    display: flex;
    grid-column: 1 / 2;
  }

  header > nav > a {
    display: none;
    grid-column: 1;
  }

  footer > nav {
    display: grid;
  }

  footer > nav > span {
    margin: 0;
  }
}
</style>

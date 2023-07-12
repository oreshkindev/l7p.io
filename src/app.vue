<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const { t, locale } = useI18n() // same as `useI18n({ useScope: 'global' })`
const router = useRouter()

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
    <router-link custom v-slot="{ href, navigate }" :to="{ name: 'home', params: { locale } }">
      <span @click="navigate" role="link">VOOLA PAY</span>
    </router-link>

    <nav>
      <router-link :to="{ name: 'bussines', params: { locale } }">Business</router-link>
      <!-- <router-link :to="{ name: 'company', params: { locale } }">Company</router-link> -->
      <router-link :to="{ name: 'faq', params: { locale } }">F.A.Q</router-link>

      <a href="https://portal.vooladmcc.com/auth" target="_blank">Log In</a> <span>/</span>
      <a href="https://portal.vooladmcc.com/auth/register/user" target="_blank">Sign Up</a>
    </nav>
  </header>

  <router-view />

  <footer>
    <nav>
      <!-- <router-link :to="{ name: 'aml', params: { locale } }">L7P AML</router-link> -->
      <!-- <router-link :to="{ name: 'privacy-policy', params: { locale } }">Privacy policy</router-link> -->
      <!-- <router-link :to="{ name: 'cookies-policy', params: { locale } }">Cookies policy</router-link> -->
      <!-- <router-link :to="{ name: 'terms-and-conditions', params: { locale } }">Terms and conditions</router-link> -->
      <!-- <router-link :to="{ name: 'contact-us', params: { locale } }">Contact us</router-link> -->
      <a href="https://portal.vooladmcc.com/legal/privacypolicy" target="_blank">Privacy policy</a>
      <a href="https://portal.vooladmcc.com/legal/terms" target="_blank">Website Terms and Conditions</a>
      <a href="https://portal.vooladmcc.com/legal/termsofuse" target="_blank">Terms of Use</a>

      © 2023 VOOLA PAY
    </nav>
  </footer>

  <!-- <div class="noise"></div> -->
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@font-face {
  font-family: 'Renner*';
  src: local('./assets/fonts/renner-light'), url('./assets/fonts/renner-light.otf') format('opentype');
  font-weight: 300;
}

@font-face {
  font-family: 'Renner*';
  src: local('./assets/fonts/renner-book'), url('./assets/fonts/renner-book.otf') format('opentype');
  font-weight: 400;
}

@font-face {
  font-family: 'Renner*';
  src: local('./assets/fonts/renner-medium'), url('./assets/fonts/renner-medium.otf') format('opentype');
  font-weight: 500;
}

:root {
  // project color palete
  --scheme-v1: #111111; // primary scheme
  --scheme-v2: #ffffff;
  --scheme-v3: #4e94d7;

  // project font-family
  --scheme-font: 'Renner*', 'Helvetica', sans-serif;
  --scheme-h: 76px;
  --scheme-m: 32px;
  --scheme-s: 18px;

  // project default template width
  --scheme-max-width: 1280px; // desktop
  --scheme-min-width: 320px; // 5 SE

  // project default template height
  --scheme-min-height: 568px; // 5 SE

  // project default template gap
  --scheme-gap: 20px;

  // project ex. header & footer height
  --scheme-offset: 100px;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

@media only screen and (max-width: 928px) {
  :root {
    --scheme-h: 42px;
    --scheme-m: 26px;
  }
}

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  background: var(--scheme-v1);
  color: var(--scheme-v2);

  display: flex;
  flex-direction: column;

  font: 300 17px / 1.64 var(--scheme-font);

  justify-content: space-between;
  margin: 0;
  overflow-x: hidden;
  position: relative;

  // user-select: none;
  ::selection {
    background: #ffffff90;
  }
}

header {
  align-items: center;
  display: flex;

  span {
    cursor: pointer;
    font: 300 var(--scheme-m) / 1.22 var(--scheme-font);
    margin: 0 auto 0 0;

    &:first-child {
      color: var(--scheme-v3);
    }
  }

  nav {
    display: inherit;
    gap: calc(var(--scheme-gap) * 2);
    align-items: center;

    svg {
      margin: 0 -20px 0 20px;
    }

    a {
      &:hover {
        color: var(--scheme-v3);
      }
    }

    span {
      font: inherit;
      margin: 0;
      text-transform: capitalize;
      cursor: default;
      margin: 0 -30px;
    }
  }

  @media only screen and (max-width: 928px) {
    align-items: baseline;
    flex-direction: column;
    gap: 20px;

    span {
      margin: 0 0;
    }
  }
}

header,
section,
footer {
  padding: var(--scheme-gap);
}

header,
section,
footer {
  margin: 0 auto;
  max-width: var(--scheme-max-width);
  width: 100%;
}

section {
  h1 {
    font: 300 var(--scheme-h) / 1.22 var(--scheme-font);
    margin: 0 0 40px;
    max-width: 620px;
  }

  h1 {
    span {
      color: var(--scheme-v3);
    }
  }

  h3 {
    font: 300 var(--scheme-m) / 1.22 var(--scheme-font);
  }

  ul {
    span {
      display: block;
      margin: 0 0 20px;
    }
  }

  p {
    font: 300 var(--scheme-s) / 1.72 var(--scheme-font);
    margin: 0 0 20px;
    max-width: 572px;
  }
}

footer {
  margin: 100px auto 0;

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--scheme-gap) * 2);

    a {
      border-bottom: 2px solid transparent;

      &.router-link-active,
      &:hover {
        border-bottom: 2px solid #ffffff90;
      }

      &:last-of-type {
        margin: 0 auto 0 0;
      }
    }

    @media only screen and (max-width: 928px) {
      flex-direction: column;
      gap: 20px;

      a {
        width: fit-content;
      }
    }
  }
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 300;
  margin: 0;
}

h1 {
  font: 300 var(--scheme-h) / 1.42 var(--scheme-font);
}

h2 {
  font: 300 var(--scheme-m) / 1.42 var(--scheme-font);

  margin: 0 0 40px;
}

h3 {
  font: 400 var(--scheme-s) / 1.42 var(--scheme-font);
}

a {
  color: inherit;
  text-decoration: none;
}

b {
  font-weight: 400;
}

p {
  margin: 0;
}

p {
  color: #ffffff90;
}

strong {
  font: inherit;
}

ul {
  margin: 0;
  padding: 0;

  li {
    list-style: disc;
    list-style-position: inside;
    padding: 10px;
  }
}

picture,
figure {
  margin: 0;

  img {
    display: block;
    // object-fit: cover;
    width: 100%;
  }
}

svg {
  fill: var(--scheme-v2);
  vertical-align: middle;
}

input,
button {
  background: none;
  border: none;
  box-shadow: none;

  font: var(--scheme-font);

  margin: 0;
  outline: none;
  padding: 0;
}

// set default button properties
button,
.button {
  background-color: var(--scheme-v3);
  border-radius: 50px;
  color: var(--scheme-v2);

  cursor: pointer;

  display: inline-block;

  font-size: var(--scheme-s);
  margin: 40px 0;
  padding: 16px 80px;
}

.noise {
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
  background-repeat: repeat;
  animation: noise 0.2s infinite;
  opacity: 0.9;
  visibility: visible;
  z-index: -1;
}

@keyframes noise {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -5%);
  }
  20% {
    transform: translate(-10%, 5%);
  }
  30% {
    transform: translate(5%, -10%);
  }
  40% {
    transform: translate(-5%, 15%);
  }
  50% {
    transform: translate(-10%, 5%);
  }
  60% {
    transform: translate(15%, 0);
  }
  70% {
    transform: translate(0, 10%);
  }
  80% {
    transform: translate(-15%, 0);
  }
  90% {
    transform: translate(10%, 5%);
  }
  100% {
    transform: translate(5%, 0);
  }
}
</style>

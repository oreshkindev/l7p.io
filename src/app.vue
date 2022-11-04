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
      <span @click="navigate" role="link">L7P</span>
    </router-link>

    <nav>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
        <path
          d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771"
        />
      </svg>

      <span>{{ currentLocale }}</span>
    </nav>
  </header>

  <router-view />

  <footer>
    <nav>
      <router-link :to="{ name: 'aml', params: { locale } }">L7P AML</router-link>
      <router-link :to="{ name: 'privacy-policy', params: { locale } }">Privacy policy</router-link>
      <router-link :to="{ name: 'cookies-policy', params: { locale } }">Cookies policy</router-link>
      <router-link :to="{ name: 'terms-and-conditions', params: { locale } }">Terms and conditions</router-link>
      <router-link :to="{ name: 'contact-us', params: { locale } }">Contact us</router-link>
      © 2022 L7P LTD
    </nav>
  </footer>

  <div class="noise"></div>
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
  --scheme-v1: #000000; // primary scheme
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
  --scheme-gap: 40px;

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

  cursor: crosshair;

  display: flex;
  flex-direction: column;

  font: 300 17px / 1.64 var(--scheme-font);

  justify-content: space-between;
  margin: 0;
  position: relative;

  // user-select: none;
  ::selection {
    background: hsla(0, 0%, 100%, 0.2);
  }
}

header {
  align-items: center;
  display: flex;

  span {
    font: 300 var(--scheme-m) / 1.22 var(--scheme-font);
    margin: 0 auto 0 0;
  }

  nav {
    display: inherit;
    gap: 20px;

    span {
      font: inherit;
      margin: 0;
      text-transform: capitalize;
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
  margin: 100px auto;

  h1 {
    font: 300 var(--scheme-h) / 1.22 var(--scheme-font);
    margin: 0 0 40px;
    max-width: 520px;
  }

  h3 {
    margin: 0 0 40px;
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
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: var(--scheme-gap);

    a {
      border-bottom: 2px solid transparent;

      &.router-link-active,
      &:hover {
        border-bottom: 2px solid hsla(0, 0%, 100%, 0.2);
      }

      &:nth-child(5) {
        margin: 0 auto 0 0;
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

strong {
  font: inherit;
}

ul {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
}

picture,
figure {
  margin: 0;

  img {
    display: block;
    // object-fit: cover;
    width: 100%;

    @media only screen and (max-width: 928px) {
      margin: auto;
      max-width: 280px !important;
    }
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

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import howItWorks from '@/components/howItWorks.vue'
import security from '@/components/security.vue'

const { t } = useI18n()
</script>

<template>
  <main>
    <section>
      <h1>
        Welcome to
        <span>VOOLA PAY</span>
        - the Bank of the Future in your pocket!
      </h1>

      <p>
        VOOLA PAY is a cutting-edge payment platform designed for individuals, freelancers and businesses, offering a range of features to manage your finances with ease. With our
        platform, you can enjoy the benefits of multi-currency accounts, make international and local payments, and access a comprehensive app for all your financial operations.
      </p>

      <picture>
        <img src="@/assets/images/card-blue-logo.png" alt="" />
      </picture>
    </section>

    <howItWorks></howItWorks>

    <security></security>
  </main>
</template>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
section {
  margin: 100px 0;
  position: relative;
}

section > picture {
  inset: 15% 0 auto auto;
  position: absolute;
  z-index: -1;
}

section > picture > img {
  box-shadow: 1px 10px 10px #00000040;
  max-width: 600px;
}

section > h1 {
  max-width: 600px;
}

section > h1 > span {
  color: var(--color-theme);
}

section > p {
  margin: var(--section-gap) 0;
  max-width: 532px;
}

@media (max-width: 720px) {
  section > picture {
    inset: 0;
    position: relative;
    z-index: 0;
  }
}
</style>

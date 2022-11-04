<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Backward from '../components/Backward.vue'

const { t } = useI18n()
</script>

<template>
  <main>
    <section>
      <h2>Contact Us</h2>

      <ul>
        <li>Address: <span>Suite 13074 43 Bedford Street, London, England, WC2E 9HA</span></li>

        <li>
          Mail: <span><a href="mailto:support@l7p.io">support@l7p.io</a></span>
        </li>
      </ul>
    </section>
  </main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p {
  max-width: 100%;
}
</style>

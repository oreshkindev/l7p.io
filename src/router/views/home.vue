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
      <h1 v-text="t('home.title')" />

      <p v-html="t('home.description')" />
    </section>
  </main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
main {
  &::after {
    background-image: url('../../assets/images/card.png');
    background-size: 740px;
    background-repeat: no-repeat;
    background-position: 80% 50%;

    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -2;

    @media only screen and (max-width: 928px) {
      background-position: 195% 75%;
    }
  }
}
</style>

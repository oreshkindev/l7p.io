<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Backward from '../components/Backward.vue'

const { t } = useI18n()

const array = [
  'Mali',
  'Morocco',
  'Nigeria',
  'Liberia',
  'Central African Republic',
  'Gaza Strip',
  'Guinea',
  'Senegal',
  'St Maarten',
  'Burundi',
  'Albania',
  'Sudan',
  'Cambodia',
  'United States Virgin Islands',
  'Barbados',
  'Cayman Islands',
  'Jamaica',
  'Ghana',
  'Congo, the Democratic Republic',
  'Guinea Bissau',
  'Haiti',
  'West Bank',
  'Zimbabwe',
  'Libya',
  'Russia',
  'Belarus',
  'South Sudan',
  'Panama',
  'Pakistan',
  'Iraq',
  'Somalia',
  'Nicaragua',
  'Myanmar',
  'Syria',
  'Yemen',
  'Afghanistan',
  'North Korea',
  'Islamic Republic of Iran',
]
</script>

<template>
  <main>
    <section>
      <h1>F.A.Q</h1>
    </section>

    <section>
      <h3>Registration</h3>

      <article>
        <h4>How to Register?</h4>

        <p>To register, simply fill out the online form and upload the required documents. This process should take approximately 10 minutes.</p>

        <p>
          Once you have answered a few questions, our team will review your application and may request additional documents if necessary. The account opening confirmation process
          typically takes less than 24 hours, but in some cases, if additional documentation or in-depth verification is required, it may take longer.
        </p>
      </article>

      <article>
        <h4>Why Can't I Register?</h4>

        <p>There could be several reasons why you are unable to register:</p>

        <ul>
          <li>Prohibited industry</li>

          <li>Inappropriate company type</li>

          <li>Residing in a country under sanctions</li>
        </ul>
      </article>

      <article>
        <h4>Which Industries are Not Supported?</h4>

        <p>Currently, VoolaPay does not provide services to the following sectors:</p>

        <ul>
          <li>Illegal gambling establishments</li>
          <li>Weapons traders</li>
          <li>Illegal drugs</li>
          <li>Anonymous accounts or customers who wish to keep their account under a fictional name</li>
          <li>Human trafficking</li>
          <li>Shell Banks, i.e., banks without physical presence or staff</li>
          <li>Online adult content, webcam, offensive adult content, and live adult content categories</li>
          <li>Adult advertising</li>
          <li>Child pornography</li>
          <li>Zoophilia</li>
          <li>Sexual violence/Hate speech/Violence</li>
          <li>Copyright infringement</li>
        </ul>
      </article>

      <article>
        <h4>Which Countries and Regions Does VoolaPay Not Support?</h4>
        <br />
        <ul class="grid">
          <li v-for="el of array">{{ el }}</li>
        </ul>
      </article>

      <article>
        <h4>What is seifguarding?</h4>

        <p>
          This is a special procedure prescribed by the British financial regulator to protect client funds. Seifgarding means that all client money must not be kept in VoolaPay,
          but in special accounts (so-called "client money accounts") at European Central Banks and major banks in Europe and Great Britain. These accounts are separate from other
          accounts and are completely untouchable.
        </p>
      </article>

      <h3>Current Account</h3>

      <article>
        <h4>How to Open a Current Account?</h4>

        <p>
          You can open a VoolaPay current account remotely. Simply complete a short registration form on our website, and we will guide you on the required documents specific to
          your account opening.
        </p>
      </article>

      <article>
        <h4>How Quickly Will My Account Be Opened and What Does It Depend On?</h4>

        <p>
          The speed of account opening depends on how quickly the client provides documents that fully meet the requirements. On average, legal entities can open a VoolaPay current
          account within 1 business day.
        </p>
      </article>

      <article>
        <h4>How to Top Up Your Account?</h4>

        <p>here are several ways to top up your account balance:</p>

        <ul>
          <li>Transfer funds from another VoolaPay account in your personal cabinet.</li>
          <li>Transfer funds from an account at another bank.</li>
          <li>Top up your account with a payment card.</li>
          <li>Top up your account with supported cryptocurrencies.</li>
          <li>Top up your account via the StableNFT payment system.</li>
        </ul>

        <p>Please note that the maximum card top-up amount is €2,000 per transaction and €10,000 from one card per week.</p>
      </article>

      <article>
        <h4>I Did Not Receive an SMS Code to Access My Personal Account. What Should I Do?</h4>

        <p>
          If you have not received an SMS verification code within 5 minutes, request a new SMS code by clicking the "Resend code" button. You should receive a message with the
          confirmation code within a minute. If this does not resolve the issue, try restarting your device and checking your mobile network. You can also log into your personal
          account using an alternative method, such as email and G2FA.
        </p>
      </article>

      <h3>Voola Pay Mastercard</h3>

      <article>
        <h4>How to Order a New Card?</h4>

        <p>
          You can order a card in your VoolaPay current account. In the left navigation menu, select the "Cards" section, click on the "Order Card" button, fill in the required
          information, and submit your application. You can also order a card through the VoolaPay mobile app in the "Cards" section.
        </p>
      </article>

      <article>
        <h4>How Many Payment Cards Can I Have?</h4>

        <p>An individual can have up to 3 active cards (including virtual) in their name.</p>
      </article>

      <article>
        <h4>Delivery Times and Options for Card Delivery?</h4>

        <p>Card delivery is available through two methods:</p>

        <ul>
          <li>Standard postal delivery: 5-12 business days</li>
          <li>UPS courier service: 1-3 business days</li>
        </ul>

        <p>Please note that these are approximate delivery times, and we cannot guarantee a specific delivery date.</p>
      </article>
    </section>
  </main>
</template>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
section {
  margin: 100px 0;
  position: relative;
}

section > h1 {
  max-width: 600px;
}

section > h1 > span {
  color: var(--color-theme);
}

section > h3 {
  margin: 100px 0 60px;
}

section > article {
  margin: var(--section-gap) 0 0;
}

section > article > h4 {
  text-transform: uppercase;
}

section > article > p {
  margin: var(--section-gap) 0;
}

section > article > ul {
  line-height: 2;
  list-style-position: inside;
  padding: 0 var(--section-gap);
}

.grid {
  display: grid;
  grid-template: auto / repeat(3, 1fr);
}

@media (max-width: 720px) {
  .grid {
    grid-template: auto / 1fr;
  }
}
</style>

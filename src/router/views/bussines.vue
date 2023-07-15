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
      <h1>
        Business Account with
        <span>VOOLA PAY</span>
      </h1>
    </section>

    <section>
      <article>
        <h4>Personal Manager and 100% Fund Security</h4>

        <p>Experience fast payments worldwide for European and international businesses. Enjoy the benefits of a personal manager and the complete security of your funds.</p>
      </article>

      <article>
        <h4>Open an Account</h4>

        <p>
          Transfer quickly and without technical limits. We understand how to work with large businesses, so your payments won't get stuck just because they are "big." Payment
          limits are set according to your company's turnover and specifications. Learn More
        </p>
      </article>

      <article>
        <h4>Leverage the Advantages of a UK Account</h4>

        <p>
          The UK is one of the most reputable jurisdictions worldwide. Transparent and clear financial regulatory rules help businesses thrive. Our client information is fully
          confidential, while information about our shareholders is open and accessible to everyone. Learn More
        </p>
      </article>

      <article>
        <h4>Grow Your Business with Us</h4>

        <p>
          Utilize our technological solutions and financial instruments, including mass payouts, API integration, salary projects, payment gateways, asset-backed loans, and
          business deposits.
        </p>
      </article>

      <article>
        <h4>Business Account</h4>

        <p>Launch a new company in just a few clicks by filling out the form in your personal cabinet. Learn More</p>
      </article>

      <article>
        <h4>Rest Assured Your Money is Safe</h4>

        <p>
          In accordance with FCA requirements for security, our clients' funds are protected. Client funds are kept on segregated accounts, separate from Voola Pay' own funds. We
          carefully select and monitor the credit institutions (banks) used for storing client funds, ensuring they have no rights to the funds held in the accounts. This means
          that even in the event of bankruptcy of the banks or Voola Pay, our clients' money remains protected. Learn More
        </p>
      </article>

      <article>
        <h4>Have Round-the-Clock Control of Your Finances</h4>

        <p>
          Make contactless payments worldwide with the Voola Pay Mastercard business card in any currency. The payment card and delivery are included in the account opening cost.
          Use the virtual card for additional security in online transactions. Enjoy the convenience of a mobile wallet for seamless payments. Learn More
        </p>
      </article>

      <article>
        <h4>Business Account</h4>

        <p>Thousands of satisfied customers from 66 countries worldwide.</p>
      </article>

      <article>
        <h4>Business Account</h4>

        <p>7 years of successful fintech market experience.</p>
      </article>

      <article>
        <h4>Business Account</h4>

        <p>Average account opening time of 9.3 hours for our clients.</p>
      </article>

      <article>
        <h4>Enjoy Technological Advancements</h4>

        <p>
          Use your smartphone instead of a code calculator. Multiple account access with differentiated rights. The iOS/Android mobile app serves both your business account and
          personal account, allowing you to switch between accounts with a single click.
        </p>
      </article>

      <h3>Develop in Your Industry with Bilderlings</h3>

      <article>
        <h4>Wholesale Trade: Boost Your Turnover</h4>

        <p>
          Our managers understand the specifics of goods, invoices, specifications, CMRs, and other accompanying documents. Benefit from payments to/from third countries, including
          third-country currencies. Enable SEPA Instant payments and other channels. Implement a salary project.
        </p>
      </article>

      <article>
        <h4>E-commerce: Develop Your Marketplace</h4>

        <p>
          Enjoy fast SEPA Instant payments, enhanced security, and a salary project. Utilize two accounts for administrative activities and payouts. Receive competent technical
          support and a personal manager.
        </p>
      </article>

      <article>
        <h4>Logistics: Save Time and Money</h4>

        <p>
          Enjoy straightforward and clear requirements for opening a business account. Make payments to/from third countries without technical limits, including third-country
          currencies. Our personal managers have expertise in customs documents and transportation specifics, including niche areas such as shipping. Benefit from fast currency
          conversion at favorable rates. Implement a salary project.
        </p>
      </article>

      <article>
        <h4>Fintech: Connect with Ease</h4>

        <p>
          Access multiple payment channels, including SEPA and CHAPS. Enjoy a comfortable onboarding process designed specifically for fintech businesses. Utilize an administrative
          activity account, client funds account in partnership with partners, safeguarding account, and responsive support.
        </p>
      </article>

      <article>
        <h4>Gaming: Get Instant Funds</h4>

        <p>
          Business Account Mass payouts via API and Mastercard debit cards. Business Account Direct integration with SEPA Instant and Open Banking API for quick receipt and sending
          of payments. Business Account Integration with payment systems instead of card payments: instant merchant settlements with no chargebacks.
        </p>
      </article>

      <article>
        <h4>Work with Third Countries</h4>

        <p>Accept and send payments to/from third countries. Convert currency at favorable rates directly in your personal cabinet.</p>
      </article>

      <article>
        <h4>Rest Assured</h4>

        <p>
          Voola Pay has been confidently and steadily developing its fintech platform, adding new products and improving existing ones. Our goal is to grow ourselves and help our
          clients grow.
        </p>
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

section > article > h4 {
  text-transform: uppercase;
}

section > article > p {
  margin: var(--section-gap) 0;
}
</style>

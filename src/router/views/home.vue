<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Backward from '../components/Backward.vue'

const { t } = useI18n()
</script>

<template>
  <main>
    <section class="hero">
      <article>
        <h1 v-html="t('home.title')" />

        <p v-html="t('home.description')" />

        <picture>
          <img src="../../assets/images/card-blue-logo.png" alt="" />
        </picture>
      </article>
    </section>

    <section class="how-it-works">
      <h3>How it Works</h3>
      <p>VoolaPay is designed to be inclusive, eliminating the need for a traditional bank account, minimum salary requirements, minimum balance, paperwork, or branch visits.</p>

      <article>
        <h4>Apply in seconds</h4>
        <p>To get started, simply provide your local phone number and a valid ID or passport.</p>
      </article>

      <article>
        <h4>Top up with ease</h4>
        <p>
          Load funds into your VoolaPay account effortlessly. Choose from options such as debit cards, bank transfers, mobile money, cryptocurrencies, StableNFT, or bill payment
          terminals, depending on your country.
        </p>
      </article>

      <article>
        <h4>Get instant access</h4>
        <p>Once you top up your VoolaPay app, you gain immediate access to a virtual Mastercard, which will allow you to send payments as easily as messages.</p>
      </article>

      <article>
        <h4>Manage your money anytime, anywhere</h4>
        <p>
          With VoolaPay, you have complete control over your finances. Send money across multiple countries, conveniently pay your bills, shop online at millions of stores
          worldwide, and benefit from our limited-time cashback offers.
        </p>
      </article>

      <article>
        <h4>Virtual Card</h4>
        <p>
          Shop with ease using our virtual Mastercard. Gain access to your card within seconds and enjoy the convenience of online shopping at millions of stores worldwide. Take
          advantage of our limited-time cashback offers to make your purchases even more rewarding. Additionally, pay your bills effortlessly using our virtual card, all with a
          simple tap on your phone.
        </p>
      </article>

      <article>
        <h4>Physical Card</h4>
        <p>
          Request our physical Mastercard and have it delivered to your doorstep (available not all regions). Experience the freedom of contactless payments, allowing you to make
          purchases on the go, anytime and anywhere. With acceptance at over 50 million stores globally, it's like carrying cash in your pocket.
        </p>
      </article>

      <article>
        <h4>Multi-Currency Accounts</h4>
        <p>
          Store your funds in various currencies with our multi-currency accounts. Make international payments, receive instant expenditure notifications, and easily track your
          expenses within the VoolaPay app.
        </p>
      </article>

      <article>
        <h4>Local and International Payments</h4>
        <p>
          Send and receive payments both locally and internationally with transparent fees, eliminating the need for complex tariff plans. Enjoy free and instant transfers between
          L7P.io accounts.
        </p>
      </article>

      <article>
        <h4>Excellent Exchange Rates</h4>
        <p>Benefit from competitive interbank exchange rates, allowing you to exchange currencies without hidden fees. Enjoy exceptional rates for popular currencies.</p>
      </article>
    </section>

    <section class="security">
      <h3>Security</h3>

      <ul>
        At VoolaPay, we prioritize your security and peace of mind:
        <li>Segregated UK accounts</li>
        <li>3D Secure</li>
        <li>Two-factor authentication (2FA)</li>
      </ul>

      <p>
        Our advanced data encryption ensures the protection of your payments. Stay informed about your app usage through push notifications, email alerts, and text messages.
        Whenever you need assistance, our friendly chat support agents are ready to help.
      </p>

      <p>Join the banking of the future with VoolaPay. Sign up today and experience seamless financial management at your fingertips.</p>

      <div class="store-buttons">
        <a
          href="https://play.google.com/store/apps/details?id=com.vooladmcc.portal
"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"
            />
            <path
              d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"
            />
          </svg>
        </a>

        <a href="https://apps.apple.com/app/voola-pay/id6445897299" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"
            />
          </svg>
        </a>
      </div>
    </section>
  </main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
main {
  .hero {
    margin: 100px auto;
    position: relative;

    picture {
      position: absolute;
      width: 100%;
      max-width: 600px;
      top: 50%;
      left: 50%;
      transform: translate(10%, -50%);
      z-index: -1;

      img {
        box-shadow: 1px 10px 10px 0px #00000040;
      }
    }

    @media only screen and (max-width: 928px) {
      picture {
        position: relative;
        left: 0;
        transform: translate(0, 0);

        img {
          max-width: 480px;
        }
      }
    }
  }

  .how-it-works {
    display: grid;
    gap: var(--scheme-gap);
    grid-template: auto / repeat(3, 1fr);

    h3,
    p {
      grid-column: 1 / 4;
    }

    article {
      h4 {
        margin: 0 0 20px;
        text-transform: uppercase;
      }
    }

    @media only screen and (max-width: 928px) {
      h3,
      p {
        grid-column: 1 / 2;
      }

      grid-template: auto / 1fr;
    }
  }

  .security {
    display: grid;
    gap: var(--scheme-gap);
  }

  .store-buttons {
    display: flex;
    gap: var(--scheme-gap);

    svg {
      &:hover {
        fill: #ffffff90;
      }
    }
  }
}
</style>

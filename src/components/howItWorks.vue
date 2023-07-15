<script setup lang="ts"></script>

<template>
  <section>
    <h3>How it Works</h3>

    <article>
      <h4>Apply in seconds</h4>

      <p>To get started, simply provide your local phone number and a valid ID or passport.</p>
    </article>

    <article>
      <h4>Top up with ease</h4>

      <p>
        Load funds into your Voola Pay account effortlessly. Choose from options such as debit cards, bank transfers, mobile money, cryptocurrencies, StableNFT, or bill payment
        terminals, depending on your country.
      </p>
    </article>

    <article>
      <h4>Get instant access</h4>

      <p>Once you top up your Voola Pay app, you gain immediate access to a virtual Mastercard, which will allow you to send payments as easily as messages.</p>
    </article>

    <article>
      <h4>Manage your money anytime, anywhere</h4>

      <p>
        With Voola Pay, you have complete control over your finances. Send money across multiple countries, conveniently pay your bills, shop online at millions of stores
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
        expenses within the Voola Pay app.
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
</template>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
section {
  display: grid;
  gap: var(--section-gap);
  grid-template: auto / repeat(3, 1fr);
}

section > h3 {
  grid-column: 1 / 4;
}

section > article {
  background-color: var(--color-foreground);
  border-radius: 20px;
  padding: var(--section-gap);
  transition: background-color 0.3s;
}

section > article:hover {
  background-color: #ffffff03;
}

section > article > h4 {
  text-transform: uppercase;
}

section > article > p {
  margin: var(--section-gap) 0 0;
}

@media (max-width: 720px) {
  section {
    grid-template: auto / 1fr;
  }

  section > h3 {
    grid-column: 1 / 2;
  }
}
</style>

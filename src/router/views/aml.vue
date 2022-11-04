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
      <h2>L7P AML</h2>
      <p>
        Senior management of L7P LTD understands legal and reputational risks associated with the financial services provided by the company and is fully committed to support local
        and international efforts to prevent money laundering, terrorist financing, tax evasion and other illicit activities.
      </p>

      <p>
        It is a crime to engage knowingly in a transaction that involves the proceeds of criminal activity – Money Laundering.It is a crime to use legally or illegally obtained
        funds to support terrorism – Financing terrorism.
      </p>

      <p>
        Additional to regulatory risk, a key risk to L7P LTD is reputational which is the possible damage to the company and its employees reputation if they happen to engage in
        money laundering or terrorist financing scheme.
      </p>

      <p>
        In order to operate in compliance with all applicable laws and regulations such as FATF recommendations, Switzerland, EU, UK and St.Vincent and the Grenadines regulations
        L7P LTD sets internal policy and procedures which is a standard throughout the organization and ensure safety of our services.
      </p>

      <p>This policy is implemented in all departments and controlled affiliates of the company.</p>

      <p>
        All employees of the company should know and follow these policy requirements, learn the red flags, carefully observe and escalate when somethings does seem unusual or
        suspicious.
      </p>

      <p>
        Our AML department goal is to build strong AML culture based on education and risk based approach. Appointed MLRO is to define risks, countermeasures, consult colleagues,
        establish monitoring system, communicate with authorities.oversee that employees receive initial and periodic training.
      </p>

      <p>
        Management of the company is responsible to ensure that commitment to this policy is supported by sufficient authority and resources. Employees are aware of the
        consequences of non-compliance.
      </p>

      <h3>The Policy is covering following topics:</h3>
      <ul>
        <li>Each service of the company has its risk assessed and mitigation processes are designed, developed and implemented</li>
        <li>The responsible team is trained to define the level of KYC required and perform the due diligence procedures.</li>
        <li>Systems for identifying risks, monitoring unusual activity, investigating, reporting suspicious activities are developed and running constantly.</li>
        <li>Initial and regular training materials are provided to employees of the company according to the level of responsibility.</li>
        <li>The compliance processes are undergoing regular external and internal audit.</li>
      </ul>
      <p>
        Each compliance process: identification, verification, training, red flags, screening matches, investigations, internal and external reporting are properly documented and
        records are kept for at least 5 years.
      </p>
    </section>
  </main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p {
  max-width: 100%;
}

ul {
  margin: 0 0 20px 0;

  li {
    line-height: 2.6;
    list-style: inside;
  }
}
</style>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { useI18n } from 'vue-i18n'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Backward from '../components/Backward.vue'

const { t, locale } = useI18n()
</script>

<template>
  <main>
    <template v-if="locale === 'zh'">
      <section>
        <h1>隐私政策</h1>
      </section>

      <section>
        <article>
          <h4>关于我们</h4>

          <p>
            1. Voola
            DMCC（以下简称“Voola”或“我们”）为个人和商家提供各种付款选项。我们的目标是通过自动化和创新的支付系统为客户提供方便和创新的服务，节省时间和金钱，使支付更加便捷和高效。
          </p>

          <p>2. Voola受迪拜多商品中心（DMCC）金融服务监管机构的监管，并持有提供NFT服务的许可。</p>

          <h4>我们记录哪些信息？</h4>

          <p>3. 我们处理以下个人数据：</p>

          <ul>
            <li>
              个人信息，如姓名、职务、职位、职业身份证号码、国籍、合法居住地、生物识别数据、护照/国民身份证发行国、护照/国民身份证号码、商业实体（包括为核实而收集的联系信息，包括有关实际受益人的信息）；
            </li>
            <li>联系信息，例如电子邮件地址、电话号码、IP地址；</li>
            <li>付款数据，如帐户号码、我们的唯一交易代码、交易信息、卡片信息等；</li>
            <li>银行信息，如银行账号、银行名称、交易目的。</li>
          </ul>

          <p>
            4. 通过我们的应用程序、网站或直接联系等方式，Voola获取您的信息，例如在应用程序上注册并提供生物识别数据、姓名、地址、电话号码、手机号码、电子邮件地址和居住地等身份信息。
          </p>

          <p>5. 我们还记录您的Voola账户和与我们的交易以及使用Voola服务的设备使用情况，以及其他提供的附加信息：(a) 通过与您的通信；(b) 通过社交网络或在线账户和互联网cookie信息。</p>

          <p>6. Voola还可能从其他来源获取您的信息，例如信用检查机构、身份验证服务或政府机构。</p>

          <p>
            7.
            作为处理者，我们从合同伙伴那里获取个人数据。作为控制者，我们直接从数据主体（“您”或“您的”）那里收到个人数据。控制者确定处理个人数据的目的和方式。作为处理者，我们根据控制者的书面指示处理个人数据。
          </p>

          <h4>处理的法律依据</h4>

          <p>8. 履行协议：Voola处理您的个人数据的主要目的是记录、执行和履行我们的合同义务，为您提供我们的服务（例如通过信贷机构和支付系统执行国内和国际交易）。</p>

          <p>9. 法律义务：为了Voola能够遵守法律义务，我们根据适用法律（包括数据保护法规）处理个人数据（例如预防、发现、调查和报告潜在的洗钱或恐怖主义融资）。</p>

          <p>
            10.
            合法利益：Voola出于其合法利益处理您的个人数据。我们经过考虑认为此处理对于Voola追求的合法利益是必要的，并且不会优先于与您的个人数据相关的基本权利或自由（例如通过参与调查、分析或统计来开发、检验和改进我们的业务和服务以及用户体验）。
          </p>

          <p>11. 同意：在某些情况下，Voola可能要求您同意处理个人数据。在给予同意之前，您将收到有关拟处理的信息。您始终可以撤回同意，并且将被告知此类撤回的后果。</p>

          <h4>我们如何处理您的信息？</h4>

          <p>12. 我们定期使用您的个人信息来帮助我们管理和改进我们的服务和您的账户使用，包括但不限于以下方面：</p>

          <ul>
            <li>与第三方（如金融机构、对应方、支付中介、卡片方或其他商业合作伙伴）进行交易；</li>
            <li>为您提供客户支持和解决问题；</li>
            <li>通知您有关服务更新和故障的信息；</li>
            <li>要求您提供反馈或参与在线调查；</li>
            <li>验证您的身份；</li>
            <li>监测和改进我们的应用程序、产品和网站；</li>
            <li>调查可疑交易（内部标记或由我们的合作伙伴标记）；</li>
            <li>解决与涉及我们合作伙伴的支付有关的争议；</li>
            <li>保护您的</li>
          </ul>

          <p>隐私，防止欺诈、洗钱和逃税；或向您开具发票或通知您服务或产品订单的状态。</p>

          <p>
            13.
            在获得您的许可后，我们还会使用您的信息进行市场营销和传达我们的产品和服务、促销优惠、竞赛和类似活动，以及经过批准的合作伙伴的信息。如果您不希望继续接收这些信息，您可以通过电子邮件或应用程序随时停止接收。
          </p>

          <p>14. Voola可能使用诸如Google Analytics之类的分析合作伙伴来跟踪互联网站点的使用量，并帮助改善我们的服务与您的相关性和功能。</p>

          <p>
            15.
            根据需要，您的个人信息可能会用于满足我们和我们合作伙伴（根据适用司法管辖区的规定）的监管义务。收集、使用和处理此类信息可能是为了满足入职时的AML/KYC要求、持续监测以及向当局报告等目的。
          </p>

          <p>
            16. 我们还可能出于其他目的处理个人数据。我们将尽力在获取个人数据时通知您处理的目的。如果这不可行或不合理，那么我们将在首次获取或处理个人数据后的第一时间尽力通知您。
          </p>

          <h4>个人信息披露</h4>

          <p>17. 请注意，根据法律要求，我们可能有义务向官方和监管机构披露或允许访问您的个人数据。</p>

          <p>18. 我们可能会将您的个人数据披露给与Voola属于同一公司集团的人员、我们的处理者，以及法律上有权接收此类个人数据的人员。</p>

          <p>19. 如果我们与处理者签订处理个人数据的合同，那么我们将确保采取适当的合同措施以保护个人数据。</p>

          <h4>第三方网站和应用程序</h4>

          <p>
            20.
            应用程序和网站可能包含链接，使您可以离开Voola的应用程序/网站并访问另一个应用程序或网站。此类链接的应用程序或网站不受Voola的控制。本隐私政策仅适用于在网站上获取的个人信息或通过您使用应用程序、Voola产品和/或与Voola的关系。Voola建议您在进入我们的应用程序或网站之外的任何在线平台上输入个人信息时要谨慎。
          </p>

          <h4>Voola的Cookie</h4>

          <p>
            21.
            使用应用程序和/或网站即表示您同意使用Cookie。您可以随时选择拒绝Cookie，或者通过停止使用应用程序和/或网站或使用适用的退出功能来拒绝Cookie。您应该知道，只有通过使用Cookie才能使用Voola的某些服务，如果您选择不接受Cookie，这些服务将不再可用。有关Cookie使用的更多信息，请参阅Voola的Cookie政策，该政策可在www.Voola.com/cookie-policy上找到。
          </p>

          <h4>与您联系</h4>

          <p>22. Voola可能会不时要求您自愿提供有关您的体验的信息，这些信息将用于衡量和改进应用程序、产品和网站的质量。在此期间，我们将明确指出您无需参与此类调查。</p>

          <p>23. Voola也可能与您联系，就故障和服务问题或任何第三方提出的滥用或侵权声索进行沟通。</p>

          <p>24. Voola还可能通过新闻向您提供有关您已购买的Voola产品或其他Voola产品或相关信息的更新。您可以选择不接收警报和/或推广电子邮件。</p>

          <h4>个人数据保留</h4>

          <p>25. Voola将根据适用法律、法规和政府机关的相关命令保留您的个人数据的时间。</p>

          <p>26. 如有要求，Voola将尽力删除过时的个人数据，除非法律要求保留或出于合法的业务目的。</p>

          <h4>隐私政策更新</h4>
          <p>27. Voola可能会偶尔更新本隐私政策，以反映：(a) 我们的软件和/或产品的变化；(b) 客户反馈；或(c) 法律要求。可在我们的应用程序和网站上访问“最后修订”的版本。</p>

          <p>28. 我们将通知您有关隐私政策的任何重大变更。</p>

          <p>29. 我们建议您定期查阅本隐私政策，以了解Voola如何收集、使用和保护您的信息。</p>

          <h4>处理的地理区域</h4>

          <p>
            30.
            一般情况下，我们在ADGM范围内处理个人数据。Voola仅在特殊情况下将您的个人数据转移至ADGM以外的地区，并且需要具备法律依据，并满足以下条件之一：控制者或处理者所在的国家具有数据保护的充分水平，由数据保护专员决定；控制者或处理者提供了适当的保障措施，例如包括欧盟标准合同条款或其他可接受的合同条款、获得批准的行为准则或认证机制；适用特定情况的豁免条款，例如您的明确同意、与您的合同的履行、符合您利益的合同的订立或履行、为法律索赔的建立、行使或辩护、重大公共利益的重要原因。如有请求，您可以获取有关将个人数据转移至ADGM以外国家的详
          </p>

          <p>细信息。</p>

          <h4>安全措施</h4>

          <p>31. 我们采取适当的技术和组织措施，以保护您的个人数据的安全性、保密性和完整性，防止未经授权的访问、使用、披露、更改或破坏。</p>

          <p>32. 您对个人数据拥有以下权利：</p>

          <p>
            查看个人数据的权利 - 您有权知道我们存储的个人数据及其处理方式，包括了解处理的目的、个人数据的披露对象、有关自动决策的信息以及请求个人数据副本的权利。 修改个人数据的权利
            - 您有权请求修改不完整、不准确或错误的个人数据。您的用户资料是您在注册时提供的信息，可在您的帐户的个人详细信息页面上访问和更新。 撤回同意处理个人数据的权利 -
            您有权撤回处理个人数据的同意。我们有权拒绝删除个人数据，如果个人数据的处理对于履行我们的法律义务、行使言论和信息自由的权利、准备、提交和辩护法律索赔，或者出于公共利益的需要是必要的。
            限制处理的权利 - 在某些情况下，您有权禁止或限制处理您的个人数据一定期限（例如，如果您对数据处理提出异议）。 异议的权利 -
            如果您的数据处理基于我们的正当利益或公共利益，您有权对数据处理提出异议。您可以随时对直接营销的数据处理提出异议，我们将根据您的异议处理此类请求。 数据转移的权利 -
            如果个人数据的处理基于您的同意，并且个人数据是自动处理的，那么您有权获取有关您的个人数据的副本，这些个人数据是您作为控制者提交给我们的，并且您有权将个人数据转发给另一个控制者。如果技术上可行，您还有权请求我们直接将个人数据转发给另一个控制者。
            自动决策（包括个人资料分析） -
            如果我们已经告知您我们进行基于自动处理（包括个人资料分析）的决策，并且这些决策对您产生法律后果或对您产生重大影响，那么您可以要求不仅基于自动处理作出决策。 提交投诉 -
            您有权向数据保护专员提交有关个人数据处理的投诉。
          </p>

          <p>
            33.
            如果您想行使关于个人数据的任何权利，或对数据保护条款和条件提出问题，请通过电子邮件向我们发送查询dpo@Voola.com。我们将在一个月内通过电子邮件回复您的查询。请注意，在向您提供任何请求的个人数据信息之前，我们必须验证您的身份。
          </p>

          <h4>我们的联系方式</h4>
          <p>34. Voola的联系信息可在我们的网站https://vooladmcc.com/上找到。</p>

          <p>35. 我们的数据保护主任的电子邮件地址是info@vooladmcc.com。</p>

          <p>© Voola - 最后修订日期：2023年1月</p>
        </article>
      </section>
    </template>

    <template v-else>
      <section>
        <h1>Privacy policy</h1>
      </section>

      <section>
        <article>
          <p>
            Welcome to L7P Ltd ("L7P") Privacy Policy. Please take a moment to read it carefully before providing us with any personal information about you or any other person.
          </p>

          <p>
            L7P (hereinafter "L7P") Privacy Policy. Please take a moment to read it carefully before providing us with any personal information about you or any other person.
            Sodalitium Limited (hereinafter "Salazar Pay") is a Platform operated by Xward Pay Inc., (hereinafter "XWARD", "we", "our" or "us") and its partners from time to time.
            For the purposes of data protection law, XWARD is a data controller in respect of the personal data we receive from you, or otherwise collect about you, and we are
            responsible for ensuring that the use of your personal data is compliant with appFolicable data protection laws ("General Data Protection Regulation"). As the
            controller of your personal data, we determine the "means" and the "purposes" of any processing activities that are carried out by us.
          </p>

          <p>The European representative of XWARD is Afacomp UAB, located A. Tumeno str. 4, 01109 Vilnius, Lithuania.</p>

          <h4>Background</h4>

          <p>We need to collect and use certain types of information about the physical and legal persons that wish to participate in our services.</p>

          <p>
            The personal information must be collected and dealt with appropriately in accordance with the company AML Policy and in accordance with this Privacy Policy drawn up in
            accordance with the GDPR and International standards.
          </p>

          <p>
            In accordance with the provisions of GDPR and International standards, any User who provides his information under the present policy confirms that he understands and
            accepts the reason for the gathering of information and consents to the processing of information for the purposes of money laundering prevention.
          </p>

          <p>Any User is entitled to know who is responsible for the processing of his or her personal data.</p>

          <p>
            Any data collected during our business whether it is collected on paper, stored in a computer database, or recorded on other material is subject to this policy and is
            protected under the applicable law and the GDPR provisions regarding data control and processing.
          </p>

          <h4>What Does This Policy Cover?</h4>

          <p>
            This Privacy Policy applies only to your use of our website. The website may contain links to other websites. Please note that we have no control over how your data is
            collected, stored, or used by other websites and we advise you to check the privacy policies of any such websites before providing any data to them.
          </p>

          <h4>What is Personal Data?</h4>

          <p>
            Personal data is defined by the Personal Information Protection and Electronic Documents Act as "any information relating to an identifiable person who can be directly
            or indirectly identified in particular by reference to an identifier".
          </p>

          <p>
            Personal data is, in simpler terms, any information about you that enables you to be identified. Personal data covers information such as your name and contact details,
            but it also covers less obvious information such as identification numbers, electronic location data, and other online identifiers.
          </p>

          <h4>What Data Do We Collect?</h4>

          <p>
            We collect personal information in the course of its business with you when you apply for the use of our products and/or services. The information is collected with
            your consent, or as permitted or required by law.
          </p>

          <p>Depending upon your use of our website, the personal information that you provide or that we ask for and collect could include the following:</p>

          <p>Identity Data:</p>

          <ul>
            <li>first name,</li>
            <li>last name,</li>
            <li>title,</li>
            <li>date of birth and gender,</li>
            <li>biometric information for facial recognition purposes,</li>
            <li>I.D documents such as national I.D card, passports, driving licences or other forms of I.D documents.</li>
          </ul>

          <p>Identity Related Data:</p>

          <ul>
            <li>risk assessment,</li>
            <li>compliance assessment.</li>
          </ul>

          <p>Contact Data:</p>

          <ul>
            <li>residence details,</li>
            <li>billing address,</li>
            <li>delivery address,</li>
            <li>email address and telephone numbers,</li>
            <li>proof of address documentation.</li>
          </ul>

          <p>Financial Data:</p>

          <ul>
            <li>bank account details,</li>
            <li>payment card details,</li>
            <li>amounts associated with accounts,</li>
            <li>external account details,</li>
            <li>source of funds and related documentation.</li>
          </ul>

          <p>Transactional Data:</p>

          <ul>
            <li>details about incoming and outgoing payments,</li>
            <li>other details of any transactions you enter using the Services, Website or App.</li>
          </ul>

          <p>Technical Data:</p>

          <ul>
            <li>internet connectivity data,</li>
            <li>IP address,</li>
            <li>operator and carrier data,</li>
            <li>login data,</li>
            <li>browser type and version,</li>
            <li>device type, category and model,</li>
            <li>time zone setting and location data,</li>
            <li>language data,</li>
            <li>browser plug-in types and versions,</li>
            <li>operating system and platform,</li>
            <li>
              diagnostics data such as crash logs and any other data we collect for the purposes of measuring technical diagnostics, and other information stored on or available
              regarding the devices you allow us access to when you visit the Website, or use the Services or the App.
            </li>
          </ul>

          <p>Profile Data:</p>

          <ul>
            <li>your username and password,</li>
            <li>your identification number as our user,</li>
            <li>requests by you for products or services,</li>
            <li>your interests, preferences and feedback,</li>
            <li>other information generated by you when you communicate with our customer support.</li>
          </ul>

          <p>
            This information may be collected by way of paper documents, scanned or faxed copies, telephone, emails, verbal interviews, face to face interactions, or data received
            through our Website or App. This information will include the information collected by us about yourself, and any other individual with whom you deal through us, which
            include counterparties or senders or beneficiaries of funds or services.
          </p>

          <p>
            We collect this information through our employees, affiliates, and online resources, government agencies, or business partners, or consumer reporting agencies, or may
            be provided by yourself upfront when you approach us for applying to our services.
          </p>

          <p>We do not process "Sensitive Data" except when it comes to biometric data processed for the purpose of uniquely identifying a natural person.</p>

          <h4>How Do We Use Your Personal Data?</h4>

          <p>
            Under the Applicable law, we must always have a lawful basis for using personal data. This may be because the data is necessary for our provision of services to you and
            the performance of a contract with you, because you have consented to our use of your personal data, or because it is in our legitimate business interests to use it.
            Your personal data may be used for one of the following purposes:
          </p>

          <ul>
            <li>Providing and managing your access to our Website or Application;</li>
            <li>Supplying our products and services to you;</li>
            <li>Communicating with you;</li>
            <li>Maintaining our own accounts and records;</li>
            <li>Complying with legal and regulatory obligations on our and your behalf; and</li>
            <li>Analyzing your use of our website to enable us to continually improve it and your user experience.</li>
          </ul>

          <h4>Option Out Right</h4>

          <p>
            We may use your contact details and information related to your service preferences for marketing and solicitation purposes to send you offers or promotions of us or
            our affiliates. You may "opt out" or withdraw consent to disclosure of information for the purposes described in this section at any time by contacting us at
            <a href="mailto:dpo@xwardpay.io">dpo@xwardpay.io</a>.
          </p>

          <h4>How Long Will We Keep Your Personal Data?</h4>

          <p>
            We will keep your personal data for such a period as is required for us to provide services to you, or such a longer period as we may be required to process the data to
            ensure our compliance with all relevant laws and regulatory obligations to which we are subject.
          </p>

          <h4>How and Where Do We Store Your Personal Data?</h4>

          <p>
            Personal data is processed both manually and electronically and may be held in a number of different places in line with the operations of a typical business. The
            locations your personal data could be stored include, but are not limited to:
          </p>

          <ul>
            <li>Our databases and CRM;</li>
            <li>Emails on computers;</li>
            <li>Mobile phones and tablets;</li>
            <li>Contact address books;</li>
            <li>Business cards;</li>
            <li>Notebooks;</li>
            <li>Electronic documents on our file servers;</li>
            <li>Paper files in our offices;</li>
            <li>Cloud back-up and storage.</li>
          </ul>

          <p>
            The security of your personal data is important to us, and to protect your data we use and maintain appropriate technical and organizational measures to protect your
            personal data and to prevent the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of or access to personal data transmitted, stored or
            otherwise processed. We have a framework of policies, procedures and training to cover information and cyber security, confidentiality and data protection.
          </p>

          <h4>Sharing and Transfer of Personal Data</h4>

          <p>
            We will only disclose personal data to third parties as is necessary to provide our services and/or to comply with your instructions. We may share your personal data
            with our affiliates and subsidiaries. We do not give or sell your personal information to third parties.
          </p>

          <p>
            In addition, we may be legally required to share certain personal data, which might include yours, if we are involved in legal proceedings or complying with legal
            obligations, a court order, or the instructions of a government authority.
          </p>

          <p>
            If any of your personal data is required by a third-party, we will take steps to ensure that your personal data is handled safely, securely, and in accordance with your
            rights, our obligations, and the third-party’s obligations under the law.
          </p>

          <p>As some of our external third parties are based outside the EEA, the processing of your personal data may involve a transfer of data outside the EEA.</p>

          <p>
            Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards
            is implemented:
          </p>

          <ul>
            <li>the country to which we transfer your personal data has been deemed to provide an adequate level of protection for personal data by the European Commission;</li>
            <li>a specific contract approved by the European Commission which gives safeguards to the processing of personal data, the so called Standard Contractual Clauses.</li>
          </ul>

          <h4>Confidentiality</h4>

          <p>
            We maintain physical, electronic, and procedural safeguards to protect personal information against loss, theft, and any form of unauthorized access. Only those who are
            authorized employees, agents, or representatives that require access to your personal information in order to fulfill their job requirements will have access to the
            information. Our obligations will become effective only when the information is received by us physically or by its internal systems, but not while it is in
            transmission out of or to our physical possession or internal systems; because data exchange over the internet or the telephone system or physical mail cannot be
            guaranteed to be perfectly secure, any personal information you submit to us or access electronically or over the telephone is done at your own risk, and we does not
            guarantee or warrant the security of information so transmitted to us. You should exercise caution to prevent any third parties, or parties fraudulently posing as us,
            from unlawfully intercepting your transmissions or causing you to disclose personal information.
          </p>

          <h4>Consent</h4>

          <p>By using our website, mobile application and related services, you signify your acceptance of our privacy policy.</p>

          <p>
            This Privacy Statement provides our intentions regarding your personal information collected by us from you. By providing us with personal information, we will assume
            your consent to our collection, use and disclosure of such information for the purposes described in this Privacy Policy wherever applicable. Please note that your
            consent implies the consent to use your email addresses, postal addresses, and other contact resources that you provide to us to communicate with you.
          </p>

          <p>
            Your consent may be given in various ways, such as: Orally, electronically or on a document in any form; or implied by voluntarily choosing to use our services; by not
            withdrawing consent to use your personal information for any identified purpose; by not using an “opt out” option provided for the specified purposes in this statement,
            if any. Such consent may be given by you directly or by your legal representative.
          </p>

          <p>
            Withdrawal of your consent will be entirely at your choice at any time, and will be effective, except in cases where we are subject to legal, contractual, regulatory,
            governmental, and/ or statutory obligations for record maintenance and disclosure; and except in case of transactions already initiated which need the use of your
            personal information for fulfillment. Note that in case of such withdrawal of consent we may no longer be able to provide certain of our products or services which
            require your personal information.
          </p>

          <h4>Your Rights</h4>

          <p>Under this Privacy Policy, you have the following rights:</p>

          <ol>
            <li>The right to be informed about our collection and use of your personal data.</li>
            <li>
              The right to access the personal data we hold about you - you have the right to obtain confirmation as to whether we process personal data about you and certain
              information about how and why we process your personal data.
            </li>
            <li>The right to have your personal data amended or rectified if any of your personal data held by us is inaccurate or incomplete.</li>
            <li>
              The right to erasure (also known as the right to be forgotten), i.e. the right to ask us to delete or otherwise dispose of any of your personal data that we have.
            </li>
            <li>The right to restrict the processing of your personal data.</li>
            <li>The right to object to us using your personal data for a particular purpose or purposes.</li>
            <li>
              The right to data portability. This means that, if you have provided personal data to us directly, we are using it with your consent or for the performance of a
              contract or the provision of services, and that data is processed using automated means, you can ask us for a copy of that personal data to re-use with another
              service or business.
            </li>
            <li>
              The right to file a complaint. If you reside in an EEA Member State, you have the right to make a complaint about the way we process your personal data to the
              supervisory authority in the EEA Member State of your habitual residence, place of work or place of the alleged infringement.
            </li>
            <li>Rights relating to automated decision-making and profiling. We do not use your personal data in this way.</li>
          </ol>

          <p>
            For more information about our use of your personal data or exercising your rights as outlined above, or if you wish to make a complaint, please contact us at
            <a href="mailto:dpo@xwardpay.io">dpo@hawex.com</a>
          </p>

          <h4>Cookies</h4>

          <p>This section applies to our Website and mobile Application.</p>

          <p>By accessing the website, you agree that this section will apply whenever you access the website on any device.</p>

          <p>
            Any changes to this policy will be posted here. We reserve the right to vary this section from time to time and such changes shall become effective as soon as they are
            posted. Your continued use of the website constitutes your agreement to all such changes.
          </p>

          <p>
            This policy explains how cookies are used on our website in general and, below, how you can control the cookies that may be used on these sites (not all of them are
            used on every site).
          </p>

          <h4>What are cookies and how do we use them?</h4>

          <p>
            Cookies are small text files stored on your computer by your browser. They're used for many things, such as remembering whether you've visited the site before, so that
            you remain logged in or to help us work out how many new website visitors we get each month. They contain information about the use of your computer but don't include
            personal information about you (they don't store your name, for instance).
          </p>

          <p>We use cookies to provide the services and features offered on our websites, and to continually enhance the user experience.</p>

          <p>
            We may also use Google Analytics to track and analyze our site traffic in order to improve our website functionality by collecting data regarding how, when and where
            people use or access our website. Google Analytics does not collect personally identifiable data.
          </p>

          <h4>How can you manage cookies?</h4>

          <ul>
            <li>Removing cookies from your device</li>
          </ul>

          <p>
            You can delete all cookies that are already on your device by clearing the browsing history of your browser. This will remove all cookies from all websites you have
            visited. Be aware though that you may also lose some saved information (e.g. saved login details, site preferences).
          </p>

          <ul>
            <li>Managing site-specific cookies</li>
          </ul>

          <p>For more detailed control over site-specific cookies, check the privacy and cookie settings in your preferred browser.</p>

          <ul>
            <li>Blocking cookies</li>
          </ul>

          <p>
            You can set most modern browsers to prevent any cookies being placed on your device, but you may then have to manually adjust some preferences every time you visit a
            site/page. And some services and functionalities may not work properly at all (e.g. profile logging-in).
          </p>

          <ul>
            <li>Managing our analytics cookies</li>
          </ul>

          <p>You can manage your preferences concerning cookies when you enter our Website.</p>

          <h4>Changes to this Privacy Policy</h4>

          <p>
            We may change this Privacy Notice from time to time. This may be necessary, for example, if the law changes, or if we change our business in a way that affects personal
            data protection.
          </p>

          <p>
            Any changes will be posted on our Website and you will be deemed to have accepted the terms of the Privacy Policy on your first use of our website following the
            alterations.
          </p>
        </article>

        <p>This Policy was last updated on 14th April 2023.</p>
      </section>
    </template>
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
  margin: 0 0 var(--section-gap);
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

section > article > ol {
  line-height: 2;
  list-style-position: inside;
  padding: 0 var(--section-gap);
}
</style>

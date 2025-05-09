import React from "react";
import "./Conditions.css"; // Link to the CSS file
import "./styles.css";

const Conditions = () => {
  return (
    <>
    <div className="abcd">
    <div className="overlay"></div>
    <h1>GENERAL TERMS AND CONDITIONS FOR<br/> ORDER PLATFORM</h1>
    </div>

    <div className="wave-container1">
      <div className="wave-element wave-1"></div>
      <div className="wave-element wave-2"></div>
      <div className="wave-element wave-3"></div>
    </div>

    <div className="terms-container">
      <h1 className="main-heading">
        GENERAL TERMS AND CONDITIONS FOR ORDER PLATFORM
      </h1>

      <section>
        <h2 className="section-heading">Contact information:</h2>
        {/* <div className="section-divider" /> */}
        <p>Go Kidogo GmbH</p>
        <p>
          House of Logistics & Mobility (HOLM) GmbH Startup LAB <br />
          Bessie-Coleman-Straße 7, 60549 Frankfurt am Main
        </p>
        <p>E: zerowaste@gokidogo.de</p>
        <p>M: 0162 9107 481</p>
      </section>

      <section>
        <h2 className="section-heading">Represented by:</h2>
        {/* <div className="section-divider" /> */}
        <p>Hr. Rinku Sharma</p>
      </section>

      <section>
        <h2 className="section-heading">1 MEANING OF TERMS</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
          <li>
            Offers: Products and services offered by restaurants that customers
            can order from restaurants via the platform.
          </li>
          <li>
            Orders: Customers order offers from restaurants via the platform.
          </li>
          <li>
            Customer: A legal or natural person (over 18 years old) who places
            an order with a restaurant via the Platform.
          </li>
          <li>
            Platforms: websites, applications and tools provided by Go Kidogo,
            Go Kidogo affiliates and/or business partners, including restaurant
            websites if used by the restaurant.
          </li>
          <li>
            Restaurants: Businesses that prepare and sell meals, beverages and
            related products and use the Platform to enter into contracts and
            pay for services.
          </li>
          <li>
            Services: Services that Go Kidogo provides to Customers through the
            Platform, including routing orders to Relevant Restaurants. However,
            services from contract restaurants are not part of the Go Kidogo
            service.
          </li>
          <li>
            Go Kidogo: Go Kidogo Deutschland GmbH, register court: district
            court Frankfurt am Main, commercial register number HRB 129907
          </li>
          <li>
            Tip: The amount that the customer voluntarily pays to the delivery
            person of the order.
          </li>
          <li>
            Contract: An agreement between a customer and a restaurant regarding
            an order, including delivery or collection. The contracting parties
            are the customer and the restaurant, but not Go Kidogo.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="section-heading">2 APPLICATION</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
          <li>
          These Customer Terms apply only to the Services.
          </li>
          <li>
          By placing an order, the customer concludes a contract with the restaurant for the delivery of the offer selected by the customer.
          </li>
          <li>
          Go Kidogo is not responsible for offers and/or contracts between customers and restaurants. The general terms and conditions of the restaurant may also apply to offers and contracts.
          </li>
          </ol>
      </section>

      <section>
        <h2 className="section-heading">3 OFFER</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
          <li>
          Offers published on the platform are published on behalf of the respective restaurant based on the restaurant information provided. Go Kidogo does not verify the accuracy or completeness of the restaurant information and is not responsible for the performance of the contract.
          </li>
          <li>
          Restaurants may use ingredients and additives in food and beverages that may cause allergies and intolerances. If you have food allergies, we recommend calling the restaurant to find out what allergens they use before placing your order.
          </li>
          </ol>
      </section>

      <section>
        <h2 className="section-heading">4 AGREEMENT BETWEEN RESTAURANT AND CUSTOMERS</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
          <li>
          The contract between the restaurant and the customer comes into effect immediately after the customer has placed an order and clicked on the “Order with obligation to pay” button on the platform at the end of the ordering process.
          </li>
          <li>
          After receipt of the order, Go Kidogo will electronically confirm the order to the customer.
          </li>
          <li>
          The restaurant reserves the right to cancel the order if the offer is no longer available, if the phone number or other contact information provided by the customer is incorrect or unavailable, or if there are force majeure circumstances.
          </li>
          <li>
          The contract can only be executed by the restaurant if the customer provides correct and complete contact and address data when ordering food. Customers are required to promptly report any inaccuracies in information transmitted or shared to Go Kidogo or the Restaurant, including payment details.
          </li>
          <li>
          If the customer chooses the delivery of the order, the customer must be present at the delivery address provided by him in order to receive the ordered items. If the customer is not at the delivery address when the order is received and the order is delivered by Go Kidogo (rather than the Restaurant itself), Go Kidogo will make reasonable efforts to contact the customer to determine the delivery location for the order. If Go Kidogo is unable to contact the customer, Go Kidogo may store the order in a convenient external location close to the delivery address. Go Kidogo assumes no responsibility for the order, including the quality or safety of the order contents found by the customer once the order has been delivered. Please notice that, if the restaurant fulfills the order itself and does not use Go Kidogo's delivery service, it is at the restaurant's discretion whether the order is left outside the delivery address without the customer present. If the customer wants to pick up the goods, he should show up at the restaurant pick-up point at the time specified in the confirmation email, SMS or platform.
          </li>
          <li>
          When ordering, delivering or collecting products containing alcohol or other age-restricted products, Go Kidogo and restaurants require customers to provide identification in accordance with applicable laws and regulations. If the customer does not provide sufficient identification or is under the minimum age, the alcoholic product in the order will not be delivered and Go Kidogo and the restaurant may refuse the order. If the Alcoholic Product is not delivered in accordance with this paragraph, the Customer may be charged a cancellation fee equal to at least the value of the Alcoholic Product in the relevant order.
          </li>
          <li>
          Go Kidogo is not liable for the fulfillment of the contract.
          </li>
          <li>
          After placing an order, customers may, at their discretion, tip the delivery driver using available online payment methods.
          </li>
          <li>
          Tips are for the delivery person and do not count as payment for the Go Kidogo service. Go Kidogo only acts as an assignee of the tip amount.
          </li>
          <li>
          If the delivery driver accepts the order directly through Go Kidogo, Go Kidogo will forward the tip to the delivery driver. If the delivery driver is not commissioned through GHokidogo.de, but is commissioned directly by the restaurant, Go Kidogo will forward the tip to the restaurant and force the restaurant to tip the delivery driver. Go Kidogo cannot guarantee or accept the transfer of tips from the restaurant to the delivery person.
          </li>
          <li>
          Once the customer has received confirmation that the tip has been deposited, the tip cannot be returned or refunded.
          </li>
          </ol>
      </section>

      <section>
        <h2 className="section-heading">5 REFUSAL OF ORDERS</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
            <li>
            Since this violated the offer, the customer must not have terminated the contract. Customers cannot cancel orders through Go Kidogo. The customer can only cancel the order with the restaurant if the restaurant has expressly stated that the customer can cancel the order.
            </li>
            <li>
            The restaurant has the right to cancel the order, for example, if the offer is no longer available, the customer has provided an incorrect or non-working phone number or other contact information, or if there is a case of force majeure. Go Kidogo has the right to cancel (subsequent) refusals of a customer's order if there are important reasons for doing so.
            </li>
            <li>
            If the customer places an incorrect order (e.g. provides incorrect contact information, fails to pay, or is present at the delivery or collection location to take the order) or otherwise fails to fulfill their obligations under the contract, Go Kidogo reserves the right reserves the right to refuse future orders from this customer.
            </li>
            <li>
            Go Kidogo has the right to refuse orders and terminate contracts on behalf of the restaurant if there is reasonable doubt as to the accuracy or authenticity of the order or contact information, or if the restaurant does not wish to enter into a contract with that customer. If a customer places orders that are found to be false or fraudulent, Go Kidogo has the right to report it to the police. If a customer places what appear to be false or fraudulent orders, Go Kidogo may file a police report.
            </li>
          </ol>
      </section>

      <section>
        <h2 className="section-heading">6 RIGHT OF WITHDRAWAL</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
        <ol className="main-list">
        <li>
          The customer cannot cancel the restaurant’s order for the delivery of the goods:
          <ol className="sub-list">
            <li>
              Which are not prefabricated and for the manufacture of which an individual selection or
              determination by the consumer is decisive or which are clearly tailored to the personal needs of the
              consumer (§ 312g Para. 2 No. 1 BGB);
            </li>
            <li>
              Which can spoil quickly or whose expiry date would soon be exceeded (§ 312g Para. 2 No. 2 BGB);
            </li>
            <li>
              Which are not suitable for return for reasons of health protection or hygiene if their seal was removed
              after delivery (§ 312g Para. 2 No. 3 BGB);
            </li>
            <li>
              If these were inseparably mixed with other goods after delivery due to their nature (§ 312g Para. 2 No. 4 BGB).
            </li>
          </ol>
        </li>

        <li>
          The customer is entitled to cancel the part of the order that does not fall under the exceptions mentioned,
          provided that the customer is a consumer within the meaning of Section 13 of the German Civil Code. A consumer
          is a natural person who enters into a legal transaction for purposes that are predominantly neither commercial nor
          self-employed.
        </li>

        <li>
          Right of withdrawal: You have the right to withdraw from this contract within fourteen days
          without giving any reason. The cancellation period is fourteen days from the day on which you or a third party
          designated by you took possession of the products. In order to exercise your right of withdrawal, you must inform us
          (Go Kidogo Deutschland GmbH, Kurmarkstraße 30, 60437, Frankfurt am Main, email address:{" "}
          <a href="mailto:service@gokidogo.de">service@gokidogo.de</a>) by means of a clear statement (e.g. a letter sent
          by post or an e-mail) of your decision to withdraw from this contract. If you make use of this option, we will send
          you confirmation of receipt of such a revocation without delay (e.g. by e-mail). To meet the cancellation deadline,
          it is sufficient for you to send the communication regarding the exercise of the right of cancellation before the
          cancellation period has expired.
        </li>

        <li>
          Consequences of the revocation: If you revoke this contract, we have to repay all payments that we
          have received from you immediately and at the latest within fourteen days from the day on which we received the
          notification of your revocation of this contract. For this repayment, we use the same means of payment that you used
          in the original transaction, unless something else was expressly agreed with you; under no circumstances will you be
          charged fees for this repayment. We bear the costs of returning the products. You only have to pay for any loss in
          value of the products if this loss in value is due to the handling of the products that is not necessary to establish
          the nature, properties and functionality of the products.
        </li>

        <li>
          Sample revocation form: To Go Kidogo Deutschland GmbH, Kurmarkstraße 30, 60437, Frankfurt am Main:
          I/we (*) hereby revoke the contract concluded by me/us (*) for the purchase of the following goods (*) Ordered on
          (*)/received on (*) Name of consumer(s) Address of consumer(s) Date/signature of consumer(s) (only if notified on
          paper) (*) Strike out where inapplicable.
        </li>
      </ol>
          </ol>
      </section>

      <section>
        <h2 className="section-heading">7 PAYMENT</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
          <li>
           Upon conclusion of the contract, the customer appears in relation to the restaurant in accordance with the customer provisions of these General Terms and Conditions. The customer can fulfill this payment obligation with an online payment method via the platform or by paying in the restaurant at the door or at the collection point.
          </li>
          <li>
          According to these general customer conditions, a (partial) refund of the online payment is only possible if the order cannot be (completely) delivered. Refunds are always made to the account from which the payment was made. Depending on the payment method used by the customer, the maximum processing time for the refund is … business days.
          </li>
          <li>
          The restaurant has authorized Go Kidogo to accept online payments from customers on behalf of the restaurant.
          </li>
          </ol>
      </section>

      <section>
        <h2 className="section-heading">8 COMPLAINTS</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
          <li>
          Customer claims regarding the execution of an offer, order or contract with the restaurant must be asserted against the restaurant. The restaurant is only responsible for the offer of the restaurant and the fulfillment of the contract. In the event of such complaints, Go Kidogo can only act as an intermediary.
          </li>
          <li>
          If the customer has a complaint about the services, this complaint must be reported to Go Kidogo customer service via the contact form, by email or by post to service@gokidogo.de .
          </li>
          <li>
          After Go Kidogo has received a complaint, Go Kidogo will first respond with an acknowledgment of receipt. Go Kidogo will try to process the complaint as quickly as possible.
          </li>
          <li>
          Complaints described in paragraphs 1 and 2 of this article must be reported to the restaurant (paragraph 1) or Go Kidogo (paragraph 2) within a reasonable time after the customer has discovered the defects and describe them fully and clearly become.
          </li>
          <li>
          he European Commission provides a platform for online dispute resolution (OS platform). This forum can be found at http://ec.europa.eu/odr.Go Kidogo expressly excludes alternative dispute resolution in accordance with Directive 2013/11/EU. Go Kidogo's e-mail address is zerowaste@gokidogo.de
          </li>
          <li>
          Go Kidogo does not want and is not obliged to take part in dispute settlement proceedings before the consumer arbitration board.
          </li>
          </ol>
      </section>

      <section>
        <h2 className="section-heading">9 NEWSLETTER</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
          <li>
          In connection with the order, the customer can order a newsletter on the Go Kidogo website. The customer can unsubscribe from this newsletter at any time at gokidogo.de/newsletter or by contacting Go Kidogo (see Section 2 of these GTC). Other than transmission costs according to the basic tariffs do not arise.
          </li>
          </ol>
      </section>

      <section>
        <h2 className="section-heading">10 EVALUATION OF THE RESTAURANT</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
          <li>
          Go Kidogo offers customers the opportunity to rate restaurant performance. Ratings published by the customer must not contain any extremist, sexist, offensive, defamatory or otherwise illegal content and must not infringe any other rights (including industrial property rights) of third parties.
          </li>
          <li>
          Go Kidogo may post reviews on the platform and remove them from the platform if the reviews violate the above terms.
          </li>
          </ol>
      </section>

      <section>
        <h2 className="section-heading">11 PERSONAL DATA</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
          <li>
          Go Kidogo processes the customer's personal data. The provisions of the data protection declaration apply to the processing of personal data.
          </li>
          </ol>
      </section>

      <section>
        <h2 className="section-heading">12 LIABILITY OF Go Kidogo</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
          <li>
          Go Kidogo is not responsible for the correctness and completeness of the offer, the restaurant information, the fulfillment of the contract and/or the accessibility of the platform. For the rest, Go Kidogo is liable as follows:
          </li>
          <li>
          Go Kidogo is liable for reimbursement of expenses and damages in accordance with the statutory provisions (hereinafter in this Section 5: "Damage"): product liability. Liability law, intentional or fraudulent misrepresentation, gross negligence, injury to life, limb or health when Go Kidogo assumes the guarantee and in all other cases of legal liability.
          </li>
          <li>
          Go Kidogo is also liable for the culpable violation of the so-called basic obligation according to the legal regulations. Essential obligations in this sense are all obligations whose breach jeopardizes the achievement of the purpose of the contract, as well as all obligations whose fulfillment makes the proper execution of the contract possible in the first place and the fulfillment of which the customer has to provide. can leave regularly. at. However, if it is a matter of a slightly negligent violation of the cardinal obligation without injury to life, limb or health, claims for damages are usually limited to the amount of the foreseeable damage.
          </li>
          <li>
          In addition, claims for damages by the customer against Go Kidogo, for whatever legal reason, in particular due to significant errors, legal defects and/or breach of other obligations from contractual or pre-contractual obligations (e.g. § 311 Paragraph .) BGB) Go Kidogo: their legal representatives , employees or vicarious agents § 311 a BGB or the obligation to pay damages - excluded.
          </li>
          <li>
          Insofar as Go Kidogo's liability is limited or excluded according to the above provisions, this also applies to the personal liability of Go Kidogo's legal representatives, employees and vicarious agents.
          </li>
          <li>
          A change in the burden of proof to the detriment of the client is not associated with the above regulations.
          </li>
          <li>
          The exclusion or limitation of a claim for default or fixed amount payments according to § 288 Para. 5 BGB or a claim for damages are not connected with the above regulations.
          </li>
          <li>
          Claims for damages by the customer become statute-barred within the statutory limitation periods from the start of the statutory limitation period.
          </li>
          </ol>
      </section>

      <section>
        <h2 className="section-heading">13 OTHER</h2>
        {/* <div className="section-divider" /> */}
        <ol className="terms-list">
          <li>
          The law of the Federal Republic of Germany applies exclusively with the exception of the UN Sales Convention.
          </li>
          <li>
          If individual provisions of these general terms and conditions (or parts thereof) are ineffective, this does not affect the validity of the service contract between the customer and Go Kidogo or the contract between the restaurant and the customer.
          </li>
          <li>
           These General Customer Conditions are written in several languages and all versions are equally valid. In the event of any inconsistency or inconsistency between versions, the English version shall prevail.
          </li>

          </ol>
      </section>
    </div>
    </>
  );
};

export default Conditions;

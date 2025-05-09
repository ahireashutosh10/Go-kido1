import React from "react";
import "./Faq.css"; // global styling
import "./styles.css";


const faqsGeneral = [
  {
    question: "What is Go Kidogo?",
    answer: `Go Kidogo is Swahili and translated into German means: "small steps".
Our idea: In many restaurants, hotels, canteens, etc... guests can already take their meals or uneaten food with them and eat them at a later time. This creates a large amount of disposable packaging, which ends up in the garbage after a short time.
With Go Kidogo we have developed an environmentally friendly and sustainable solution.
Go Kidogo is a reusable deposit system for takeaway meals. Whether in a restaurant, in a canteen or at the take away.`,
  },
  {
    question: "What is ZeroWaste and how does it help to save packaging waste?",
    answer: `By using the Go Kidogo reusable boxes several times, countless disposable packaging can be saved. This leads to a reduction in the volume of waste, as not only less packaging is thrown away, but at the same time less food is thrown away.
The system is particularly environmentally friendly and sustainable, since defective or no longer usable containers are sent back to the producer and used as raw material for new products.`,
  },
  {
    question: "How do I order food?",
    answer:
      "You can easily order food via our website. Click on one of the restaurants on the menu page. Use the address bar at the top of the screen to view restaurants that ship to your address.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The deposit fee per box is €5 to €15 incl. taxes per reusable container.",
  },
  {
    question: "How do I return the reusable containers?",
    answer: `You can give the containers to the courier when you place your next Go Kidogo order. You can also hand them in at any partner restaurant.`,
  },
  {
    question: "Do I have to wash the reusable containers?",
    answer: `Yes, a short rinse is desirable after use. All reusable boxes are washed again by the restaurants.`,
  },
  {
    question: "What is ZeroWaste and how does it help to save packaging waste?",
    answer:
      "The container is made of polybutylene terephthalate, PBT for short, and is a thermoplastic material. It belongs to the group of polyesters and has properties similar to the well-known polyethylene terephthalate, PET for short, which is used for beverage bottles.The material makes the shell very robust, as PBT has high strength and rigidity. It also has good chemical resistance to many solvents.The bowl is temperature resistant between -20°C and +100°C and is microwaveable and can also be used for storage in the freezer without any problems.PBT is therefore well suited for food packaging and meets the legal requirements for this application.In addition, just like PET, PBT is extremely easy to recycle.",
  },
  {
    question: "What are the environmental benefits?",
    answer:
      "The containers can be used over 10,000 times. That eliminates the emissions and waste from over 1,000 manufacturing processes. This is far better than even traditional recycling. Recycling causes 67% of the emissions in the production of new goods, as energy is used to process old materials and recycle them. In contrast, Go Kidogo eliminates all downstream production emissions. The reuse of our reusable deposit boxes also saves enormous transport energy. Single-use containers travel long distances from the factory to the restaurant to the customer. Our reusable deposit boxes are distributed locally between restaurants and customers, usually only within a neighborhood.Our food boxes are made in Germany and therefore do not come from Asia on huge cargo ships. This saves emissions and relies on top quality from Germany.",
  },
  {
    question: "How do you contact us?",
    answer:
      "Send email to zerowaste@GoKidogo.de or call +49 162 9107 481 .",
  },
  {
    question: "Is it possible to buy your containers?",
    answer:
      "In principle, our Gokis are not available for purchase via our app, as our system is only sustainable if the Gokis end up back in circulation as quickly as possible. However, if Gokis are not returned within the 14-day free loan period, 10 euros per bowl and 4 euros per cup will automatically be debited from your deposited payment method. The Goki is then yours and can be used privately. A refill is no longer possible, otherwise it would become our property again.",
  },
  {
    question: "Where can I return my borrowed container?",
    answer:
      "You can select on the map in the Goki app Partners and see which bins they accept. Then just drop by, return Gokis and you're done. Only the QR code on the bin is needed for drop-off, not your personal QR code.",
  },
  {
    question: "Does the container have to be rinsed before being returned?",
    answer:
      "Please rinse your Gokis before you put them back into circulation. This will save your favorite restaurant a lot of work. Of course, all Partners rinse the Gokis in their industrial dishwashers before handing them out, so that they are always hygienically clean when you check them out.",
  },
  {
    question: "How long is the free loan period and can I extend it?",
    answer:
      "You have 14 days to return our Goki to one of our Partners . You can also extend the return period by one week for one euro, if the period is not enough for you.",
  },
  {
    question: "How do I know when to return the containers?",
    answer:
      "You will see in the Goki app how many more days you can rent the Gokis for free. We will also remind you via email.",
  },
  {
    question: "I missed my return deadline - can I still return the container?",
    answer:
      "At the end of the 14-day free return period, 10 Euros for Goki Bowls and 4 Euros for Goki Mugs will automatically be debited from your deposited payment method. You have then purchased the Gokis and can use them privately. However, you can also return purchased containers at any time to our Partners and receive half of the purchase price in the form of Goki Credits for the return. You can use these credits for pick-up pre-orders via the Goki App at some of our Partners or for the extension of return periods.",
  },
  {
    question: "How can I delete my account?",
    answer:
      "If you go to 'Settings' in the app (the icon at the bottom right) and then there is an item called 'Delete Account'. Please note that a deletion cannot be undone.",
  },
  {
    question: "Are the containers dishwasher and microwave safe?",
    answer:
      "Our Gokis are all dishwasher safe, they can be washed in any standard household dishwasher and also in industrial dishwashers at very high temperatures. In addition, all Gokis are suitable for heating in the microwave, whereas the lid must NOT be placed in the microwave, as pressure can build up underneath due to heating.",
  },
  {
    question: "How are the Gokis disposed of and dismantled?",
    answer:
      "When you can no longer use a Goki reusable container, we take it back to recycle it in a controlled way. To do this, our containers are crushed and melted down to form other products. In this way, our system remains circular and we completely avoid the creation of waste. Due to current legislation, new food containers cannot yet be made from them. We are in discussion with processing companies and will close the loop as soon as the legal situation changes.",
  },
  {
    question: "How often can the containers be used?",
    answer:
      "A Goki container can be reused up to 200 times if used properly. The most important factor is not rinsing, but how the customer treats the container. We therefore ask our customers not to cut into the containers with a knife in order to ensure the longest possible usability and thus a lot of saved disposable packaging waste. From ten fillings, they are more environmentally friendly than disposable packaging and save up to 30 kg of CO2 over the life cycle compared to disposable packaging made of Styrofoam or aluminum.",
  },
  {
    question: "Can I also order via the Goki app?",
    answer:
      "At many of our Partners you can pre-order and pay via the app, so that you can pick up your food at the desired time without waiting on site or have it conveniently delivered to your home. Not all Goki-Partners offer this service via our app. Partners that accept pre-orders are marked in the app with 'Pickup' and 'Delivery'. You can also order in our reusable packages through delivery services. For this, you will be redirected to these third party providers within the app and just need to copy your delivery token into the comment field.",
  },
  {
    question: "I would like to make a change to my order - how do I do that?",
    answer:
      "To make a change to your order via the Goki app, you can easily cancel it within the cancellation period in the app and place it again. If you have a special request, you can leave a message for the restaurant in the comments field.",
  },
  {
    question: "How do I return a container with a damaged QR code?",
    answer:
      "Gokis with damaged or missing QR code can be returned to our Partners as usual. However, please send us an email so that we know where you returned the Goki, and we will manually unbook it. The restaurant then only has to return the Goki to us so that it gets a new QR code.",
  },
  {
    question: "What do I do if I break a bowl or cup?",
    answer:
      "If the bowl or cup is completely broken, then you don't need to do anything else - the money will be automatically collected from the payment method you deposited after the loan period expires. If only the lid or the bottom part is broken, please return the bowl to one of our Partners and then write us an email with a photo of the damaged Goki and the info where you dropped it off. Then we will refund half of the purchase amount.",
  },
  {
    question: "What do I do if a bowl leaks?",
    answer:
      "Please report leaking bowls directly to our Partners. They can then sort out the bowls and send them back to us.",
  },
  {
    question: "What requirements does my phone need for me to install the app?",
    answer:
      "Our customer app requires at least iOS 12.4 or Android 6.0, but preferably always the latest versions.",
  },
  {
    question: "Why do I have to enter a means of payment?",
    answer:
      "The means of payment serve on the one hand as security, since we issue the Gokis without a deposit, and on the other hand as a method of payment in case you want to use our pre-order or delivery function.",
  },

];

const faqsRestaurant = [
  {
    question: "Does the Goki Partner App need to be integrated into a running system?",
    answer:
      "No, the Goki Partner App is a stand-alone system that you can easily download from the Google Play Store / Apple Store. All you need is a cell phone or tablet with Internet access and your personal access data, which you will receive from us after signing the contract.",
  },
  {
    question: "Can customers scan their Gokis on their own as they are issued?",
    answer:
      "Customers can independently scan the QR code of the Gokis in the app and must show the confirmation at the checkout. The control is important to exclude cases of fraud.",
  },
  {
    question: "What is the best way to rinse the Gokis?",
    answer:
      "The Goki reusable bowls and their lids can be cleaned very well in gastro and industrial dishwashers. For optimal cleaning results, it is important to place the bowls with the opening facing down. The lids are best either laid flat with the closure facing down and weighted down, or rinsed on end, as with plates, for example. If you don't have any rinsing facilities on site, we can offer you a rinsing service for a fee on request.",
  },
  {
    question: "Where, how and why do Gokis need to be scanned?",
    answer:
      "Each Goki reusable container is marked with a QR code and can therefore be clearly assigned. This allows us to guarantee a cashless reusable packaging system between the participating system partners and the customers. Issue and return numbers, return deadlines and container cycles are thus digitally stored and verifiable. Each time a container is issued, it is scanned together with the user's individual QR code to link the customer and container in our system. Meanwhile, customers can also scan the Gokis themselves using the self-scan function. When the container is returned, only the container is scanned to record that it has been properly returned. In the customer app, you can always see transparently which container you have already borrowed and for how long, and how much packaging you have already saved.",
  },
  {
    question: "What container varieties do you have on offer?",
    answer: (
      <>
        You can find an overview of our product range here:{" "}
        <a
          href="https://www.gokidogo.de/our-solution"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1f2937", textDecoration: "underline" }}
        >
          https://www.gokidogo.de/our-solution
        </a>
        .
      </>
    ),
  },  
  {
    question: "Why can't I add my logo to lids and containers?",
    answer:
      "We explicitly advocate an open reusable packaging system for all. A circular system is most convenient for customers and allows anyone to get and return Goki reusable containers anywhere - hence no logos. However, for large companies or closed systems, such as canteens, we offer a white label solution.",
  },
  {
    question: "How do I change my opening hours or store other important information?",
    answer: (
      <>
        Log in with the access data for the partner app via our web login:{" "}
        <a
          href="https://partner.gokidogo.com/user/login"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1f2937", textDecoration: "underline" }}
        >
          https://partner.gokidogo.com/user/login
        </a>
        .<br />
        There you can change opening hours and other important information. Please also indicate here if your store is closed for a longer period of time.
      </>
    ),
  },  
  {
    question: "What happens after I register with Goki?",
    answer:
      "After you have expressed interest and signed the contract, our onboarding process starts. Here you will receive your initial equipment of containers and a training as well as training and advertising material. A follow-up training is also possible at any time and in case of questions or problems you can contact our partner service.",
  },
  {
    question: "What do I use to scan the containers?",
    answer:
      "A cell phone with our partner app is required for scanning the Gokis. A private device (tablets are also possible) can be used for this or a device can be provided by us for a fee. A connection to various cash register systems is also possible.",
  },
  {
    question: "What requirements does my phone need for me to install the app?",
    answer:
      "Our Partners app requires at least iOS 12.4 or Android 6.0, but preferably always the latest versions.",
  },
  {
    question: "Do you have any further questions? We'll answer them gladly!",
    answer:
      "We are always happy to receive questions and suggestions. Write to us at zerowaste@GoKidogo.de",
  },
];

const FAQ = () => {
  return (
    <>
   <div className="abcd">
   <div className="overlay"></div>
  <h1>
    Here's how<br />
    <span class="second-line">Your questions, our answers...</span>
  </h1>
</div>

<div className="wave-container1">
      <div className="wave-element wave-1"></div>
      <div className="wave-element wave-2"></div>
      <div className="wave-element wave-3"></div>
    </div>


    <div className="faq-container">
      <div className="faq-list">
        <h2 className="faq-section-heading">General questions</h2>
        {faqsGeneral.map((item, idx) => (
          <div className="faq-item" key={idx}>
            <div className="faq-question">
              <div className="faq-left">
                <span className="faq-icon">📄</span>
                <span className="faq-title">{item.question}</span>
              </div>
              <div className="faq-plus">+</div>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}

        <h2 className="faq-section-heading">Questions for restaurants</h2>
        {faqsRestaurant.map((item, idx) => (
          <div className="faq-item" key={idx}>
            <div className="faq-question">
              <div className="faq-left">
                <span className="faq-icon">📄</span>
                <span className="faq-title">{item.question}</span>
              </div>
              <div className="faq-plus">+</div>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQ;

import React from 'react'
import "./styles.css";

import './About.css';               
import image from '../assets/Au.jpg'
export default function About() {
  return (
          <>
            <div className="background-image">
            <div className="text-content">

          </div>
          <div className="wave-container1">
      <div className="wave-element wave-1"></div>
      <div className="wave-element wave-2"></div>
      <div className="wave-element wave-3"></div>
    </div>
          <div className="about-text">
          <h1>About-us</h1>
            <p>#We proTest:How we started!..</p>
          </div>
        </div>

        <div className="split-section">
      <div className="split-text">
        <h2 style={{color:"#367337"}}>#We Build Amazing Things</h2>
        <p>
        We all met in a programming class. Of course we wanted to program fun games. After the first 2-3 meetings we talked about plastic and the "FRIDAYS-FOR-FUTURE" demos. We all agreed that it is also imperative that individuals reconsider their consumption patterns. This also includes the use of technologies and service offers.
        </p>
         <br/> 
         
        <p>For many of our daily "conveniences" we could pay a very high price in the future.</p>
        <br/> 
        
       <p>The discussions were so moving and inspiring that our mentor suggested taking a small step towards a sustainable world together.</p>
       <br/> 
       
       <p>Through a scrum session and other product discussions, we came up with the idea of coding a sustainable delivery portal. Go Kidogo is therefore a good example of the fact that we not only have to rethink technologies for even more convenience, but especially in the present time for a just and sustainable world.</p>
       <br/>

       
       <p>At Go Kidogo, we value the essentials: quality of the food, fairness towards our restaurant partners and sustainable packaging.</p>
      
      </div>
      <div className="split-image">
        <img src={image} alt="About us" />
      </div>
    </div>
   
    <div className='other' style={{"margin-left": "11%"}}>
          <h1 style={{ "color":"#367337"}}>Go Kidogo - Small steps, big changes.</h1>
          
          <p class="lead"><h3 style={{color:"#777"}}>The problem</h3></p>
         
         <p>On average, one person produces 226.5 kilograms of packaging waste every year.
          <br/>
         The consumption of service packaging (out-of-home consumption) in the catering industry increased by 325 percent from 2000 to 2020. 
         <br/>
         According to a Statista forecast, a total of 17.1 million people will use online food delivery services this year. By 2023, the number is expected to rise to 21.6 million.</p>
        
        <p class="lead"><h3 style={{color:"#777"}}>Our approach</h3></p>
         <p>We are sustainable and promote sustainability; Our restaurants deliver the food completely packaging-free.
          <br/>
         With our high-quality reusable packaging, we are declaring war on disposable packaging for take-away food. Go Kidogo stands for sustainable management and consumption. (Green Economy).
         <br/>
         With this approach we want to help to reduce the burden on the environment.
         <br/>
         Go Kidogo supports its partners to become more sustainable and to reduce packaging waste and save costs. In addition, Go Kidogo offers its partners a completely fair and transparent price model.</p>
         
         <p class="lead"><h3 style={{color:"#777"}}>Our approach</h3></p>
         <p>
         With Go Kidogo, we have created an environmentally friendly and sustainable online delivery portal for ordering meals by using 
         <br/>
         a returnable deposit system for take-away meals.
         <br/>
         Our reusable containers are made from 100% QUALITY PLASTIC and are also 100% recyclable. In addition, they are absolutely free of 
         <br/>
         harmful substances.
         </p>
          
          <p class="lead"><h3 style={{color:"#777"}}>Our guiding principles</h3></p>
         <p>according to the 17 Sustainable Development Goals (SDGs) of the United Nations:</p>
         <ul>
          <li>
            
                  "Don't go hungry: According to estimates by the World Health Organization (WHO), around 1.3 billion tons of food ends up in the trash every year. At the same time, 821.6 <br/>million people are starving – a scandal! We want to save food and thus fight hunger."
            </li>
            <li>
            Less inequality: We want to enable restaurateurs to participate in the digital economy at market-oriented and fair conditions.
            </li>
            <li>
            Sustainable consumption: With Go Kidogo, we want to encourage consumers to rethink their consumption. Conscious enjoyment and 
            <br/>
            conservation of resources is our motto.
            </li>
            <li>
            Climate action: Our planet needs help, that much is clear. With our company, we are trying to make the constantly growing industry of food <br/>delivery services more climate-neutral. The transfer of knowledge on the topic of climate protection is therefore an important part of our work.
            </li>
         </ul>

         <p class="lead"><h3 style={{color:"#777"}}>Our Team & Visions</h3></p>
         <p>
         Rinku and are managing directors and shareholders of Go Kidogo. Luis is also a founder and heads the Network and Partnerships <br/>department. Employees of our company. Joel, Luisa, Nico, Vincent, Ami, Valerie and Vinay are the spiritual co-founders of Go Kidogo. <br/>Overall, we are an ambitious and passionate group of young people who want to encourage society to rethink consumption.<br/> Our mission is to make the world a more sustainable and fair place.

         </p>
    </div>

        </>
  );
}


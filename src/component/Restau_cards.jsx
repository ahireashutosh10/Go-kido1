import React from "react";
import styles from "./Restau.module.css"; // Correct way to import CSS module
import { FaStar, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import asia from "../assets/images/11.jpg";
import waffel from "../assets/images/12.jpg";
import vin from "../assets/images/13.jpg";
import vilbel from "../assets/images/14.jpg";
import pasta from "../assets/images/15.jpg";
import palato from "../assets/images/16.jpg";
import nidda from "../assets/images/17.jpg";
import doner from "../assets/images/18.jpg";
import konichi from "../assets/images/19.jpg";
import carls from "../assets/images/20.jpg";
import twobros from "../assets/images/21.jpg";
import lukarsch from "../assets/images/22.jpg";
import fitness from "../assets/images/23.jpg";
import sushi from "../assets/images/24.jpg";
import chopt from "../assets/images/25.jpg";
import cafe from "../assets/images/26.jpg";
import singhs from "../assets/images/27.jpg";
import pizza22 from "../assets/images/28.jpg";
import mosch from "../assets/images/29.jpg";
import grill from "../assets/images/30.jpg";
import christianos from "../assets/images/31.jpg";
import bella from "../assets/images/32.jpg";
import pizza from "../assets/images/33.jpg";
import babo from "../assets/images/34.jpg";
import kneipe from "../assets/images/35.jpg";
import shiraz from "../assets/images/36.jpg";
import darm from "../assets/images/37.jpg";
import fresh from "../assets/images/38.jpg";
import china from "../assets/images/39.jpg";
import pizzaboy from "../assets/images/40.jpg";
import freddy from "../assets/images/41.jpg";
import salat from "../assets/images/42.jpg";
import burgerday from "../assets/images/43.jpg";
import tandoori from "../assets/images/44.jpg";
import toros from "../assets/images/45.jpg";
import kiyan from "../assets/images/46.jpg";
import best from "../assets/images/47.jpg";

const restaurants = [
  {
    name: "Mini Asia",
    cuisine: "Indisch, Vegan, Vegitarisch, Fitness",
    address: "Hauptstrasse 21 61231 Bad Nauheim",
    rating: 9.3,
    img: asia, // ✅ Added image
  },
  {
    name: "Die Waffel",
    cuisine:
      "Asiatisch, Indisch, Afghanisch, Orientalisch, Arabisch, Vegetarisch, Vegan, Fitness",
    address: "Lotharstraße 24, 55116 Mainz",
    rating: 9.7,
    img: waffel, // ✅ Added image
  },
  {
    name: "And & Vin",
    cuisine: "Italian",
    address: "In den Kolonnaden 31 61231 Bad Nauheim",
    rating: 9.9,
    img: vin, // ✅ Added image
  },
  {
    name: "Eiscafé Venezia Bad Vilbel",
    cuisine: "",
    address: "Frankfurter Str. 96, 61118 Bad Vilbel, Germany",
    rating: 9.3,
    img: vilbel, // ✅ Added image
  },
  {
    name: "Bel Forno Pizza & Pasta",
    cuisine:
      "Italienisch, Mediterran, Pizza, Pasta, Nudeln, Vegetarisch, Vegan, Deutsche Küche, Burger",
    address: "Lautenschlägerstraße 23 63450 Hanau",
    rating: 8.8,
    img: pasta, // ✅ Added image
  },
  {
    name: "Al Rafa - Il Buon Palato",
    cuisine: "",
    address: "Frankfurter Str. 47-5161118 Bad Vilbel",
    rating: 9.3,
    img: palato, // ✅ Added image
  },
  {
    name:"Nidda Sushi Bar",
    cuisine:"Japanese",
    address:"Market 28,63667 Nidda",
    rating:8.7,
    img: nidda,
  },
  {
    name:"Gruneburger Doner",
    cuisine:"Continental",
    address:"Gruneburgweg",
    rating:9,
    img: doner,
  },
  {
    name:"Konichi",
    cuisine:"German",
    address:"Konichi H&D joint Venture GmbH Bahnhofsplatz 7 61118 Bad Vilbel",
    rating: 8.7,
    img: konichi,
  },
  {
    name:"Restaurant Carls",
    cuisine:"HBE Gastro Consulting GmbH Carl-Schurz-StraBe 33",
    address:"",
    rating: 9.8,
    img: carls,
  },
  {
    name:"TWOBROS",
    cuisine:"Mexican, Continental",
    address:"Gruneburgweg 25,60322 Frankfurter",
    rating: 9.6,
    img: twobros,
  },
  {
    name:"Metzgerei Lukarsch",
    cuisine:"German, Continental",
    address:"Marktpatz 4,61118 Bad Vilbel",
    rating: 9.4,
    img: lukarsch,
  },
  {
    name:"The Loft Fitness & Health Club",
    cuisine:"Continental",
    address:"Homburger Strabe 76-78, 61118 Bad Vilbel",
    rating: 9.1,
    img: fitness,
  },
  {
    name:"Sushi & Thai Royal",
    cuisine:"Japanese",
    address:"Stresemannallee 8 60596 Frankfrut amm Main",
    rating: 9.1,
    img: sushi,
  },
  {
    name:"Chopt Greens Wiesbaden",
    cuisine:"Continental",
    address:"Langgasse 42,65183 Wiesbaden",
    rating: 9.7,
    img: chopt,
  },
  {
    name:"Lindbegh's Cafe",
    cuisine:"German,Italian,French,Continental",
    address:"Amelia-Mary-Earhart-StraBe 8",
    rating: 9.4,
    img: cafe,
  },
  {
    name:"Singhs Indisches Restaurant",
    cuisine:"Indian",
    address:"AlbrechtstraBe 21, 65185 WiesBaden",
    rating: 9.9,
    img: singhs,
  },
  {
    name:"Pizza22",
    cuisine:"Continental",
    address:"ViktoriastraBe 22, 65189",
    rating: 9.4,
    img: pizza22,
  },
  {
    name:"MoschMosch",
    cuisine:"Japanese",
    address:"WilhelmstraBe 52D, 65183 WiesBaden",
    rating: 8.9,
    img: mosch,
  },
  {
    name:"Maryam Grill",
    cuisine:"Continental",
    address:"Dotzheimer str. 118, 65197 Wiesbaden",
    rating: 8.7,
    img: grill,
  },
  {
    name:"By Christianos",
    cuisine:"Continental",
    address:"Walter-Hallstein-StraBe 5-7, 65197 Wiesbaden",
    rating: 9.1,
    img: christianos,
  },
  {
    name:"Bella Italia",
    cuisine:"Italian",
    address:"StiftstraBe 14, 65183 Wiesbaden",
    rating: 9.8,
    img: bella,
  },
  {
    name:"Mr. Pizza",
    cuisine:"Italian,Continental",
    address:"Schiersteiner str. 88, 65187 Wiesbaden",
    rating: 9,
    img: pizza,
  },
  {
    name:"Babo Doner",
    cuisine:"Continental",
    address:"Heimstattenweg 83,64295 Darmstadt",
    rating: 9.3,
    img: babo,
  },
  {
    name:"Kneipe 41",
    cuisine:"Italian,Continental",
    address:"KahlertstraBe 41, 64293 Darmstadt",
    rating: 9.8,
    img: kneipe,
  },
  {
    name:"Shiraz",
    cuisine:"Indian",
    address:"Dieburger str. 73, 64287 Darmstadt",
    rating: 8.8,
    img: shiraz,
  },
  {
    name:"My Pizza Darmstadt",
    cuisine:"Italian",
    address:"KahlertstraBe 49,64293 Darmstadt",
    rating: 9.5,
    img: darm,
  },
  {
    name:"Fresh Thai Kitchen",
    cuisine:"Thai",
    address:"Otto-Rohm-StraBe 82,64293 Darmstadt",
    rating: 8.6,
    img: fresh,
  },
  {
    name:"China Taxi Darmstadt",
    cuisine:"Chinese",
    address:"PallaswiesenstraBe 150 A, 64293 Darmstadt",
    rating: 9.7,
    img: china,
  },
  {
    name:"Pizzaboy",
    cuisine:"Italian",
    address:"Im Tiefen See 1, 64293 Darmstadt",
    rating: 9.3,
    img: pizzaboy,
  },
  {
    name:"Freddy Fresh Pizza Darmstadt",
    cuisine:"Italian",
    address:"Dieburger str. 18, 64287 Darmstadt",
    rating: 8.8,
    img: freddy,
  },
  {
    name:"Santino's-Salat und Mehr",
    cuisine:"Italian,Continental",
    address:"Schiffenberger Weg 32, 35394 GieBen",
    rating: 9.8,
    img: salat,
  },
  {
    name:"Burgerday",
    cuisine:"Italian,Mexican,Continental",
    address:"Herborner Str. 2A, 35614 ABlar",
    rating: 9.4,
    img: burgerday,
  },
  {
    name:"Indian Tandoori Restaurant",
    cuisine:"Indian",
    address:"Griedeler str.9, 35510 Butzbach",
    rating: 9.9,
    img: tandoori,
  },
  {
    name:"Toros Donerhaus",
    cuisine:"",
    address:"Hermannsteiner str. 98, 35614 ABlar",
    rating: 8.6,
    img: toros,
  },
  {
    name:"Kiyan Kebaphaus",
    cuisine:"Continental",
    address:"Hermannsteiner str. 9, 35614 ABlar",
    rating: 8.9,
    img: kiyan,
  },
  {
    name:"Best Pizza Restaurant",
    cuisine:"Italian,Continental",
    address:"Nauborner str. 142, 35578 Wetzlar",
    rating: 9.1,
    img: best,
  },
];

const Restau_card = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle card click and navigate to partner details page
  const handleCardClick = (restaurantName) => {
    const encodedName = encodeURIComponent(restaurantName); // Encode restaurant name to prevent issues with spaces or special characters
    navigate(`/partnerdetails/${encodedName}`); // Navigate to partner details page
  };

  return (
    <div className={styles.container}>
      <div className={styles.restaurantGrid}>
        {restaurants.map((restaurant, index) => (
          <div
            className={styles.restaurantCard}
            key={index}
            onClick={() => handleCardClick(restaurant.name)} // Make card clickable
            style={{ cursor: "pointer" }}
          >
            <img
              src={restaurant.img}
              alt={restaurant.name}
              className={styles.restaurantImg}
            />
            <div className={styles.restaurantInfo}>
              <h3>{restaurant.name}</h3>
              <p className={styles.cuisine}>{restaurant.cuisine}</p>
              <p className={styles.address}>{restaurant.address}</p>
              <div className={styles.footer}>
                <span className={styles.open}>Open</span>
                <span className={styles.rating}>
                  <FaStar color="green" /> {restaurant.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restau_card;
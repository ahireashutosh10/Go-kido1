import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import pizza from "../assets/1.jpg";
import sushi from "../assets/2.jpg";
import curry from "../assets/3.jpg";
import burger from "../assets/4.jpg";
import veg from "../assets/5.jpg";
import chinese from "../assets/6.jpg";
import mexican from "../assets/7.jpg";
import nudeln from "../assets/8.jpg";
import vegan from "../assets/9.jpg";
import halal from "../assets/10.jpg";
import Background from "../component/Background";
import "./Home.css";
import Restau_card from "../component/Restau_cards";
import ProcessFlow from "../component/ProcessFlow";
import Application from "../component/Application";

const cardData = [
  { imgSrc: pizza, title: "Pizza" },
  { imgSrc: sushi, title: "Sushi" },
  { imgSrc: curry, title: "Curry" },
  { imgSrc: burger, title: "Burger" },
  { imgSrc: veg, title: "Veg" },
  { imgSrc: chinese, title: "Chinese" },
  { imgSrc: mexican, title: "Mexican" },
  { imgSrc: nudeln, title: "Nudeln" },
  { imgSrc: vegan, title: "Vegan" },
  { imgSrc: halal, title: "Halal" },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    navigate(`/partner?category=${category}`);
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.matchMedia("(max-width: 600px)").matches) {
        setVisibleCards(2);
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setVisibleCards(3);
      } else {
        setVisibleCards(5);
      }
    };

    const debouncedResize = debounce(updateVisibleCards, 100);
    window.addEventListener("resize", debouncedResize);
    updateVisibleCards();

    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  const totalCards = cardData.length;
  const cardWidth = 210;

  const nextSlide = () => {
    if (currentIndex + visibleCards < totalCards) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  return (
    <>
      <Background />
      <div className="main-container">
        <h2 className="title">Popular Categories</h2>
        <div className="carousel">
          <button
            className="arrow arrow-left"
            onClick={prevSlide}
            aria-label="Previous Slide"
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className="icon" />
          </button>
          <div className="card-container">
            <div
              className="card-wrapper"
              style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
            >
              {cardData.map((item, index) => (
                <div className="card" key={index} onClick={() => handleCardClick(item.title)}>
                  <img
                    src={item.imgSrc}
                    alt={`Delicious ${item.title}`}
                    className="card-image"
                    loading="lazy"
                  />
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>View All</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="arrow arrow-right"
            onClick={nextSlide}
            aria-label="Next Slide"
            disabled={currentIndex + visibleCards >= totalCards}
          >
            <ChevronRightIcon className="icon" />
          </button>
        </div>
      </div>

      <div className="bg-gray">
        <div className="content-container">
          <div className="main-title">
            <span><em></em></span>
            <h2>Choose from the most popular restaurants in<br /> your neighborhood.</h2>
            <p className="description">Order, enjoy and support your local heroes!</p>
            <a href="/restaurants" className="link">All restaurants →</a>
          </div>

          <Restau_card />

          <div className="banner">
          <div className="overlay"></div>
            <div className="wrapper">
              <div>
                <medium>GokidoGo Delivery</medium>
                <h1>We Deliver to your Office</h1>
                <h2>Enjoy a tasty food in minutes!</h2><br/>
                <a href="/restaurants" className="btn-1 gradient">Start Now!</a>
              </div>
            </div>
          </div>

          <ProcessFlow />
          <Application />
        </div>
      </div>
    </>
  );
}

export default Home;

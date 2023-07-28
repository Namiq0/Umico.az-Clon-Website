import React, { useState, useEffect } from "react";
import slide1 from "../Img/carusel-1.jpg";
import slide2 from "../Img/carusel-2.jpg";
import slide3 from "../Img/carusel-3.jpg";
import slide4 from "../Img/carusel-4.jpg";
import slide5 from "../Img/carusel-5.jpg";
import slide6 from "../Img/carusel-6.jpg";
import slide7 from "../Img/carusel-7.jpg";
import slide8 from "../Img/carusel-8.jpg";
import slide9 from "../Img/carusel-9.jpg";
import slide10 from "../Img/carusel-10.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function CaruselNews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const goSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="main-setion-one-news-up-carusel">
      <img src={slides[currentSlide]} />
      <div className="carousel-navigation">
        <div>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goSlide(index)}
              className={
                currentSlide === index ? "active carusel-btn" : "carusel-btn"
              }
            >
              <div
                className={`circle ${currentSlide === index ? "active" : ""}`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaruselNews;

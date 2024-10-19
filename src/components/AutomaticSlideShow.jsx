import React, { useState, useEffect } from "react";
import B1logo from "../assets/Banner5.png";
import B2logo from "../assets/Banner6 new.png";
import C1logo from "../assets/BannerSlide1.png";
import DUlogo from "../assets/BannerSlide2.png";
import AUlogo from "../assets/BannerSlide3.png";
import Ignoulogoo from "../assets/BannerSlide4.png";

const AutoSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: B1logo,
    },
    {
      image: B2logo,
    },
    {
      image: C1logo,
    },
    {
      image: DUlogo,
    },
    {
      image: AUlogo,
    },
    {
      image: Ignoulogoo,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Changes slide every 1 second

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      <style>
        {`
          .slideshow-container {
    

            position: relative;
            
           
         
          }

          .slide {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }

          .slide.active {
            opacity: 1;
          }

          .slide img {
            object-fit: scale-down;
          }
        
          .slide-image {
         
        
            height: 100%;
          }

          .slide-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            color: white;
          }

          .slide-title {
            margin: 0;
            font-size: 24px;
            font-weight: 500;
          }

        
          @media (max-width: 768px) {
            .slideshow-container {
              height: 300px;
            }

            .slide-title {
              font-size: 20px;
            }
          }

          @media (max-width: 480px) {
            .slideshow-container {
              height: 200px;
            }

            .slide-title {
              font-size: 16px;
            }
          }
        `}
      </style>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}>
          <img src={slide.image} alt={slide.title} className="slide-image" />
          <div className="slide-content">
            <h2 className="slide-title">{slide.title}</h2>
          </div>
        </div>
      ))}

      {/* <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default AutoSlideshow;

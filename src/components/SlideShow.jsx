import React, { useState, useEffect } from "react";
import B1logo from "../assets/Banner5.png";
import B2logo from "../assets/Banner6 new.png";
import C1logo from "../assets/BannerSlide1.png";
import DUlogo from "../assets/BannerSlide2.png";
import AUlogo from "../assets/BannerSlide3.png";
import Ignoulogoo from "../assets/BannerSlide4.png";

const ImageSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample images - replace with your own image URLs
  const images = [
    { url: B1logo, caption: "First Slide" },
    { url: B2logo, caption: "Second Slide" },
    { url: C1logo, caption: "Third Slide" },
    { url: DUlogo, caption: "Fourth Slide" },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative max-w-3xl mx-auto">
      <style>
        {`
          .slideshow-container {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .slide {
            display: none;
            width: 100%;
            position: relative;
          }

          .slide.active {
            display: block;
            animation: fade 0.5s ease-in-out;
          }

          @keyframes fade {
            from { opacity: 0.8; }
            to { opacity: 1; }
          }

          .slide img {
            width: 10%;
            height: 40px;
            object-fit: cover;
          }


          .nav-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 1rem;
            cursor: pointer;
            border: none;
            font-size: 1.2rem;
            transition: background-color 0.3s;
            z-index: 10;
          }

          .nav-button:hover {
            background: rgba(0, 0, 0, 0.8);
          }

          .prev {
            left: 0;
            border-radius: 0 4px 4px 0;
          }

          .next {
            right: 0;
            border-radius: 4px 0 0 4px;
          }

          .dots-container {
            display: flex;
            justify-content: center;
            padding: 1rem 0;
            gap: 0.5rem;
          }

          .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #ccc;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .dot.active {
            background: #333;
          }

          .controls {
            display: flex;
            justify-content: center;
            padding: 1rem;
            gap: 1rem;
          }

          .control-button {
            padding: 0.5rem 1rem;
            background: #333;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .control-button:hover {
            background: #555;
          }
        `}
      </style>

      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}>
            <img src={image.url} alt={`Slide ${index + 1}`} />
          </div>
        ))}

        <button className="nav-button prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="nav-button next" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="dots-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "hh" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="controls">
        <button
          className="control-button"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}>
          {isAutoPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default ImageSlideshow;

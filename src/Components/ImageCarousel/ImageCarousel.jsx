import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./ImageCarousel.Style.css";

const ImageCarousel = ({ images, className, autoplayInterval = 300 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, autoplayInterval);
    return clearInterval(intervalId);
  }, [images, autoplayInterval]);
  return (
    <div className="imageCarousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`index === currentSlide ? "active" : "" ${className}`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;

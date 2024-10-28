import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import item1 from '../assets/images/item1.png'
import item2 from '../assets/images/item2.png'
import item3 from '../assets/images/item3.png'

import {SampleNextArrow , SamplePrevArrow} from './CustomArrows'

const Carousel = () => {
  const settings = {
    centerMode: true,         // Enables the center slide to be focused
    centerPadding: '0',       // Ensures no padding around slides
    slidesToShow: 3,          // Show 3 slides at once
    focusOnSelect: true,      // Allows focus when the slide is clicked
    infinite: true,           // Infinite looping of slides
    speed: 500,               // Transition speed
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom prev arrow
    responsive: [
      {
        breakpoint: 768, // Adjust for mobile view
        settings: {
          slidesToShow: 1,  // Show 1 slide on mobile
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src={item1} alt="Item 1" />
        </div>
        <div className="slide-item">
          <img src={item2} alt="Item 2" />
        </div>
        <div className="slide-item">
          <img src={item3} alt="Item 3" />
        </div>
        <div className="slide-item">
          <img src={item1} alt="Item 4" />
        </div>
        <div className="slide-item">
          <img src={item2} alt="Item 5" />
        </div>
        <div className="slide-item">
          <img src={item3} alt="Item 6" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

  
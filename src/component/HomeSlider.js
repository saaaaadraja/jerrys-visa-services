import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from '../assets/images/slider-img1.png'
import sliderImg2 from '../assets/images/home-bg1.png'
import sliderImg3 from '../assets/images/home-bg2.png'
import Button from 'react-bootstrap/Button';


const SimpleCarousel = () => {
    const clickHandler=(id)=>{
           window.open(`${id}`,'_blank','noreferrer');  
      }
  const settings = {
    dots: true,            // Show navigation dots
    infinite: true,        // Infinite looping of slides
    speed: 500,            // Transition speed
    slidesToShow: 1,       // Show 1 slide at a time
    slidesToScroll: 1,     // Scroll 1 slide at a time
    autoplay: true,        // Enable auto-play
    autoplaySpeed: 5000,   // Set auto-play speed to 3 seconds
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div className="p-relative">
        <div className="tag-line-text">Unlocking Boundaries,<br/> Enabling <p>Journeys</p></div>
        <img src={sliderImg1} className="w-100" alt="" />
        <Button variant="outline-success consultation-btn w-100 home-btn" onClick={(e)=>clickHandler('/appointment')} >BOOK YOUR APPOINTMENT NOW</Button>
        </div>
        <div className="p-relative">
        <div className="tag-line-text">Simplifying Your Visa Journey,<br/> One <p>Step at a Time</p></div>
        <img src={sliderImg2} className="w-100" alt="" />
        <Button variant="outline-success consultation-btn w-100 home-btn" onClick={(e)=>clickHandler('/appointment')} >BOOK YOUR APPOINTMENT NOW</Button>
        </div>
        <div className="p-relative">
        <div className="tag-line-text">YOUR TRAVEL DREAMS,<br/> OUR <p>SERVICES</p></div>
        <img src={sliderImg3} className="w-100" alt="" />
        <Button variant="outline-success consultation-btn w-100 home-btn" onClick={(e)=>clickHandler('/appointment')} >BOOK YOUR APPOINTMENT NOW</Button>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleCarousel;
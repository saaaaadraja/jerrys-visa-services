import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import '../App.css'
import '../assets/css/slider.css';


import star from '../assets/images/Icon feather-star.png'
import client1 from '../assets/images/client1.png'
import client2 from '../assets/images/client2.png'
import client3 from '../assets/images/client3.png'

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
        <div className="slide-item" style={{padding:'5rem 0'}}>
  <div class="carousel-item d-flex active" id="curSlide1" data-bs-interval="10000">
  <div className="slide w-90 pt-5 mt-4 " style={{margin:'auto',height:'fit-content'}}>
  <div className="top-bg">
  <img src={client1} class="d-block w-25 m-auto mt--5 user-img" alt="..."/>
  <p className="bottle-disc mt-4" style={{fontSize:'1rem'}}>Elena G</p>
  <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        </div>
        </div>
        <p className="price-txt" style={{fontSize:'0.7rem'}}>Jerry's Visa Services is truly exceptional! Their team is professional, friendly, and highly efficient. They handled my application with such care and attention to detail, making the whole process smooth and hassle-free. I got my visa much faster than I expected. I’m so impressed with their service and would recommend them to anyone needing visa assistance!</p>
    
    <p className="country-name-txt" >_SPAIN</p>
        </div>
        </div>
        </div>
        <div className="slide-item">
        <div class="carousel-item d-flex active" id="curSlide1" data-bs-interval="10000">
  <div className="slide w-90 pt-5 mt-4 " style={{margin:'auto',height:'fit-content'}}>
  <div className="top-bg">
  <img src={client2} class="d-block w-25 m-auto mt--5 user-img" alt="..."/>
  <p className="bottle-disc mt-4" style={{fontSize:'1rem'}}>MUHAMMAD FAIZAN</p>
  <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        </div>
        </div>
        <p className="price-txt" style={{fontSize:'0.7rem'}}>I couldn't be happier with the service I received from Jerry's Visa Services! From 
        start to finish, their team made the visa application process so easy and stress-free. 
        They answered all my questions, kept me updated, and guided me through every step. Thanks to them, 
        I got my visa without any issues. Highly recommend them to anyone in need of visa assistance!</p>
    
    <p className="country-name-txt" >_PAKISTAN</p>
        </div>
        </div>
        </div>
        <div className="slide-item">
        <div class="carousel-item d-flex active" id="curSlide1" data-bs-interval="10000">
  <div className="slide w-90 pt-5 mt-4 " style={{margin:'auto',height:'fit-content'}}>
  <div className="top-bg">
  <img src={client1} class="d-block w-25 m-auto mt--5 user-img" alt="..."/>
  <p className="bottle-disc mt-4" style={{fontSize:'1rem'}}>DIANA-ANFREEA</p>
  <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        </div>
        </div>
        <p className="price-txt" style={{fontSize:'0.7rem'}}>Jerry's Visa Services provided excellent support throughout my visa application.
         They were incredibly knowledgeable and professional, which gave me confidence in the entire 
         process. I especially appreciated their quick response times and attention to detail, ensuring 
         that my application was flawless. I’m grateful for their dedication and would definitely use their
          services again in the future!</p>
    
    <p className="country-name-txt" >_ROMANIA</p>
        </div>
        </div>
        </div>
        <div className="slide-item">
        <div class="carousel-item d-flex active" id="curSlide1" data-bs-interval="10000">
  <div className="slide w-90 pt-5 mt-4 " style={{margin:'auto',height:'fit-content'}}>
  <div className="top-bg">
  <img src={client3} class="d-block w-25 m-auto mt--5 user-img" alt="..."/>
  <p className="bottle-disc mt-4" style={{fontSize:'1rem'}}>AMIR HAYAT</p>
  <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        </div>
        </div>
        <p className="price-txt" style={{fontSize:'0.7rem'}}>Outstanding experience! The team at Jerry's Visa Services went above and beyond 
        to help me secure my visa on time. They took care of all the complex paperwork, and their expertise
         made a huge difference. I can honestly say they saved me a lot of time and worry. If you're 
         looking for a reliable visa service, Jerry’s is the way to go!</p>
    
    <p className="country-name-txt" >_UAE</p>
        </div>
        </div>
        </div>
       
      </Slider>
    </div>
  );
};

export default Carousel;

  
import React from "react";
import aboutUs from '../assets/images/About-us.jpg'
import visaConsultancy from "../assets/images/visa-consultancy.png";
import nic from '../assets/images/NIC.png'
import passportRenewal from '../assets/images/passportRenewal.png'
import attestationOrRegularisation from '../assets/images/attestaionOrregularisation.jpg'
import SendMessage from "../component/SendMessage";
import Carousel from '../component/Carousel'
import SimpleCarousel from "../component/HomeSlider";




const Home = () =>{


  const clickHandler=(id)=>{
    window.open(`${id}`,'_blank','noreferrer');  
}
  
return (
    <>
  <div className="w-100 h-100" id="home">
    <SimpleCarousel/>
  </div>
  <div className="row w-95 m-auto py-4" id="aboutUs">
    <p className="text-center heading-text">ABOUT US</p>
<div className="col-8 about-text">
We enthusiastically make your journey memorable that lasts for lifetime without any Visa hurdles. We look
 forward in solving all the visa queries for travelers all over the world.  With our expertise, we serve with
  the services of visa applications, nadra card, passport renewal and also attestation of documents. We give 
  close attention to your travel plans and modify your wishes according to your requirements. We provide fast
   services for visa applications to make your journey entertaining. Our aim is to prioritize ease for 
   customer and fulfill their all requirements throughout the journey. 
</div>
<div className="col-4">
  <img src={aboutUs} alt="" className="w-100" />
</div>
  </div>
  <div className=" w-100  py-5 services-text" id="services">
    <div className="row w-95 m-auto">
    <p className="text-center heading-text">SERVICES</p>
<div className="col-3">
  <div className="select-service" onClick={(e)=>clickHandler('/services/visa-service')}>
  <img src={visaConsultancy} alt="" className="w-95 m-auto  services-img" />
  <p className="service-name-text w-100 m-auto pt-4">VISA SERVICES</p>
  </div>
  <p className="service-text w-85 m-auto pt-3"> We provide visa consultants to give detail and proper 
    information regarding each and every step required to fulfill visa application. We provide you with the 
    list of documents that need to be provided and attested. Furthermore, it is our primary responsibility... </p>
</div>
<div className="col-3">
  <div className="select-service" onClick={(e)=>clickHandler('/services/nadra-card')}>
  <img src={nic} alt="" className="w-95 m-auto services-img" />
  <p className="service-name-text w-100 m-auto pt-4">NADRA CARD</p>
  </div>
  <p className="service-text w-85 m-auto pt-3">NICOP card is  required  for UK which is the identification of
      Pakistanis living abroad that keeps them connected to their homeland Guidance about documents required 
      to apply for NICOP. Helping them with their personal details need to be put on Nadra card and any...</p>
</div>
<div className="col-3">
<div className="select-service" onClick={(e)=>clickHandler('/services/passport-renewal')}>
  <img src={passportRenewal} alt="" className="w-95 m-auto  services-img" />
  <p className="service-name-text w-100 m-auto pt-4">PASSPORT RENEWAL</p>
  </div>
  <p className="service-text w-85 m-auto pt-3"> We guide you with the online process of passport renewal for UK.
     Through MRP (Machine Readable Passport ) application we guide you to upload certain documents for the 
     renewal of passport . It is mandatory to renew your passport , if it is expiring within 6 months...</p>
</div>
<div className="col-3">
<div className="select-service" onClick={(e)=>clickHandler('/services/attestation-regularisation')}>
  <img src={attestationOrRegularisation} alt="" className="w-95 m-auto  services-img" />
  <p className="service-name-text w-100 m-auto pt-4"> ATTESTATION/REGULARISATION</p>
  </div>
  <p className="service-text w-85 m-auto pt-3">   We provide services of attestation and regularization for 
    visa application to help customer smoothly find out the way. We make sure that all the documents are in 
    order and meet the standards set by immigration authorities. If there are any missing documents, we make
     sure to...</p>
</div>
</div>
  </div>
  <div className="text-center" id="testimonials" style={{padding:'6vw 0'}}>
  <p className="text-center heading-text">TESTIMONIALS</p>

    {/* <Slider/> */}
  </div>
  <div id="testimonials" >
  <Carousel/>
  </div>
  <div id="sendMessage">
<SendMessage/>
</div>

    </>
)
}

export default Home;
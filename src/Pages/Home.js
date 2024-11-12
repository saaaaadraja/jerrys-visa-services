import React from "react";
import waterDrop from '../assets/images/Water drop.png'
import glass from '../assets/images/Glass.png'
import circle from '../assets/images/5.png'
import banner1 from '../assets/images/Banner1.png'
import hand from '../assets/images/Hand.png'
import minerals from '../assets/images/Bottle_Minerals.png'
import Slider from "../component/Slider";
import ClientSlider from "../component/ClientSlider";
import sliderImg1 from '../assets/images/slider-img1.png'
import aboutUs from '../assets/images/About-us.png'
import visaConsultancy from "../assets/images/visa-consultancy.png";
import nic from '../assets/images/NIC.png'
import passportRenewal from '../assets/images/passport-renewal.webp'
import attestationOrRegularisation from '../assets/images/attestaionOrregularisation.jpg'

import { useLinkClickHandler, useNavigate } from "react-router-dom";
import axios from "axios";
import SendMessage from "../component/SendMessage";
import Carousel from '../component/Carousel'

const Home = () =>{

const [data, setData] = React.useState();
const [price, setPrice] = React.useState(0);
const [finalPrice, setFinalPrice] = React.useState(0);
const [personalInfo, setPersonalInfo] = React.useState({
  firstName:'',lastName:'',message:''
})
const [orderElement, setOrderElement] = React.useState();
const [quantity, setQuantity] = React.useState('--');
  var navigate = useNavigate();
  function gotoProducts(path) {
    navigate(path);
    window.location.reload()
  }

 React.useEffect(()=>{
  axios.get('https://backend.aquabird.pk/products')
  .then((res)=>{
 setData(res.data);
 })
 .catch((err)=>console.log(err))

 },[])

 function handleRadioOnclick(id) {
  let ele = data.filter((d)=>d.id === id);
setPrice(parseInt(ele[0].price) + parseInt(ele[0].SECURITY) + parseInt(ele[0].refill));
setFinalPrice(parseInt(ele[0].price) + parseInt(ele[0].SECURITY) + parseInt(ele[0].refill));
setQuantity(1);
setOrderElement(ele[0]);
 }
 function pluss(e) {
  e.preventDefault();
  if (price == 0) {
    window.document.getElementById('ordrTxt').style.color = 'red'; 
    window.document.getElementById('ordrTxt').style.fontWeight = 'bold'; 
    window.document.getElementById('ordrTxt').innerHTML= 'Kindly select a product first'
    setTimeout(() => {
      window.document.getElementById('ordrTxt').innerHTML= ''
    }, 1500);
  }else{
    setQuantity(quantity + 1);
    let value = quantity + 1;
    setFinalPrice(value * price);
  }
  }
  function sub(e) {
    e.preventDefault();
    if (price == 0) {
      window.document.getElementById('ordrTxt').style.color = 'red'; 
      window.document.getElementById('ordrTxt').style.fontWeight = 'bold'; 
      window.document.getElementById('ordrTxt').innerHTML= 'Kindly select a product first'
      setTimeout(() => {
        window.document.getElementById('ordrTxt').innerHTML= ''
      }, 1500);
    }else{ 
      if (quantity > 1) {
        setQuantity(quantity - 1);
        let value = quantity - 1;
        setFinalPrice(value * price);
    }
    }
    } 


    function clickHandler(e) {
      e.preventDefault();
      if (price == 0) {
        window.document.getElementById('ordrTxt').style.color = 'red'; 
        window.document.getElementById('ordrTxt').style.fontWeight = 'bold'; 
        window.document.getElementById('ordrBtnTxt').innerHTML= 'Kindly select a product first'
        setTimeout(() => {
          window.document.getElementById('ordrBtnTxt').innerHTML= ''
        }, 1500);
      }else{
          let retString = localStorage.getItem("cartData");
          let retArray = [];
          if (retString != null) {
            retArray = JSON.parse(retString);
          }
        orderElement.disable = 'true';
        orderElement.quantity = quantity;
        orderElement.subTotal = finalPrice;
        navigate('/checkout');
        localStorage.setItem('cartData',JSON.stringify([...retArray,orderElement]));
        localStorage.setItem('personalInfo',JSON.stringify([personalInfo]));
         window.location.reload();
      }
    }
return (
    <>
    {/* <div className="image-top" style={{display:'none'}}><img className="w-100" src={banner1} alt="" /></div> */}
  <div className="w-100 " id="home">
    <div className="tag-line-text">Unlocking Boundaries,<br/> Enabling <p>Journeys</p></div>
<img src={sliderImg1} className="w-100" alt="" />
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
  <div className="select-service">
  <img src={visaConsultancy} alt="" className="w-95 m-auto  services-img" />
  <p className="service-name-text w-100 m-auto pt-4">VISA SERVICES</p>
  </div>
  <p className="service-text w-85 m-auto pt-3"> We provide visa consultants to give detail and proper 
    information regarding each and every step required to fulfill visa application. We provide you with the 
    list of documents that need to be provided and attested. Furthermore, it is our primary responsibility... </p>
</div>
<div className="col-3">
  <div className="select-service">
  <img src={nic} alt="" className="w-95 m-auto services-img" />
  <p className="service-name-text w-100 m-auto pt-4">NADRA CARD</p>
  </div>
  <p className="service-text w-85 m-auto pt-3">NICOP card is  required  for UK which is the identification of
      Pakistanis living abroad that keeps them connected to their homeland Guidance about documents required 
      to apply for NICOP. Helping them with their personal details need to be put on Nadra card and any...</p>
</div>
<div className="col-3">
<div className="select-service">
  <img src={passportRenewal} alt="" className="w-95 m-auto  services-img" />
  <p className="service-name-text w-100 m-auto pt-4">PASPORT RENEWAL</p>
  </div>
  <p className="service-text w-85 m-auto pt-3"> We guide you with the online process of passport renewal for UK.
     Through MRP (Machine Readable Passport ) application we guide you to upload certain documents for the 
     renewal of passport . It is mandatory to renew your passport , if it is expiring within 6 months...</p>
</div>
<div className="col-3">
<div className="select-service">
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
  {/* <div className="text-center" id="testimonials" style={{padding:'6vw 0'}}>
  <p className="text-center heading-text">TESTIMONIALS</p>

    <Slider/>
  </div> */}
  <Carousel/>
  <div id="sendMessage">
<SendMessage/>
</div>

    </>
)
}

export default Home;
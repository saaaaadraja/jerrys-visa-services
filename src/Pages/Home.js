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
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur mauris ex, at commodo libero
 venenatis ac. Cras at magna ut ex mattis facilisis. Ut fermentum fermentum sapien, eu convallis sapien
  pretium sit amet. Curabitur pulvinar ullamcorper augue, eget tempus neque consequat ac. Etiam non urna
   est. Aliquam ante odio, sagittis ut lacus non, venenatis faucibus risus. Cras aliquet porta leo quis 
   blandit. Nullam lacinia maximus mi vel commodo.
 Donec laoreet, dolor a fermentum porta, orci massa faucibus ligula,
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
  <p className="service-text w-85 m-auto pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
     industry's standard dummytext ever .Lorem Ipsum is simply dummy text of the printing and typesetting 
     industry. Lorem Ipsum has been the industry's standard dummytext ever </p>
</div>
<div className="col-3">
  <div className="select-service">
  <img src={nic} alt="" className="w-95 m-auto services-img" />
  <p className="service-name-text w-100 m-auto pt-4">NADRA CARD</p>
  </div>
  <p className="service-text w-85 m-auto pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
     industry's standard dummytext ever .Lorem Ipsum is simply dummy text of the printing and typesetting 
     industry. Lorem Ipsum has been the industry's standard dummytext ever </p>
</div>
<div className="col-3">
<div className="select-service">
  <img src={passportRenewal} alt="" className="w-95 m-auto  services-img" />
  <p className="service-name-text w-100 m-auto pt-4">PASPORT RENEWAL</p>
  </div>
  <p className="service-text w-85 m-auto pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
     industry's standard dummytext ever .Lorem Ipsum is simply dummy text of the printing and typesetting 
     industry. Lorem Ipsum has been the industry's standard dummytext ever </p>
</div>
<div className="col-3">
<div className="select-service">
  <img src={attestationOrRegularisation} alt="" className="w-95 m-auto  services-img" />
  <p className="service-name-text w-100 m-auto pt-4"> ATTESTATION/REGULARISATION</p>
  </div>
  <p className="service-text w-85 m-auto pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
     industry's standard dummytext ever .Lorem Ipsum is simply dummy text of the printing and typesetting 
     industry. Lorem Ipsum has been the industry's standard dummytext ever </p>
</div>
</div>
  </div>
  <div className="text-center" id="testimonials" style={{padding:'6vw 0'}}>
  <p className="text-center heading-text">TESTIMONIALS</p>

    <Slider/>
  </div>
  <div id="sendMessage">
<SendMessage/>
<Carousel/>
</div>

    </>
)
}

export default Home;
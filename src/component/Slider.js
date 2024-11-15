import React from "react";
import star from '../assets/images/Icon feather-star.png'
import cart from '../assets/images/Icon ionic-md-cart.png'
import arrow from '../assets/images/Icon ionic-ios-arrow-forward.png'
import disabaleStar from '../assets/images/Icon feather-star-disabled.png'
import userImg from '../assets/images/user-img.png'
import client1 from '../assets/images/client1.png'
import client2 from '../assets/images/client2.png'
import client3 from '../assets/images/client3.png'

const Slider=()=>{
  const [nth , setNtn] = React.useState();
  const [curr , setCurr] = React.useState();
  const [pre , setPre] = React.useState();
  const [nxt , setNxt] = React.useState();
  const [data , setData] = React.useState([
    {
        id: "22ad6437-de2a-438e-9a39-101739b04eea",
        name: "MUHAMMAD FAIZAN",
        star: "5",
        description: `I couldn't be happier with the service I received from Jerry's Visa Services! From 
        start to finish, their team made the visa application process so easy and stress-free. 
        They answered all my questions, kept me updated, and guided me through every step. Thanks to them, 
        I got my visa without any issues. Highly recommend them to anyone in need of visa assistance!`,
        image: client2,
        country:'Pakistan'
    }
    ,
    {
        id: "e243cd64-3d92-41df-bd38-3ba955887d90",
        name: "DIANA-ANFREEA",
        star: "5",
        description: `Jerry's Visa Services provided excellent support throughout my visa application.
         They were incredibly knowledgeable and professional, which gave me confidence in the entire 
         process. I especially appreciated their quick response times and attention to detail, ensuring 
         that my application was flawless. I’m grateful for their dedication and would definitely use their
          services again in the future!`,
        image: client1,
        country: 'Romania'
    },
    {
        id: "b51a84c9-bdaa-43f3-b3f2-dae366a03ddf",
        name: "AMIR HAYAT",
        star: "5",
        description: `Outstanding experience! The team at Jerry's Visa Services went above and beyond 
        to help me secure my visa on time. They took care of all the complex paperwork, and their expertise
         made a huge difference. I can honestly say they saved me a lot of time and worry. If you're 
         looking for a reliable visa service, Jerry’s is the way to go!`,
        image: client3,    
        country: 'UAE'   
    }
]);
  // const [storageData,setStorageData] = React.useState();
  // const [personalInfo, setPersonalInfo] = React.useState({
  //   firstName:'',lastName:'',message:''
  // })
  React.useEffect(()=>{
    // axios.get('https://backend.aquabird.pk/products',{withCredentials:true})
    // .then((res)=>{
    //   let returnData = localStorage.getItem("cartData");
    //   let retData = JSON.parse(returnData);
    //   if (retData != null) {
    //     res.data.map((ele,i)=>{
    //      retData.map((resData,j)=>{
    //        if(ele.id == resData.id){
    //        res.data[i]?.disable =  resData?.disable;
    //        }
    //      })
    //     }
    //     )
    //    }
      // setData(res.data);
      
      if (data.length == 0) {
        return;
      }else if (data.length == 1) {
        setCurr(0);
      }else if (data.length == 2) {
        setPre(0);
        setCurr(1);
      }else if (data.length > 2) {
        setPre(0);
        setCurr(1);
        setNxt(2);
      }
   setNtn(data.length);
    // })
    // .catch((err)=>console.log(err));

},[])

function moveSlider(val) {
if (data.length == 0 || data.length == 1) {
return;
}else if (data.length == 2) {
    if (curr == 0) {
      setCurr(nth - 1);
      setPre(pre - 1);
      return;
    }
    if (pre == 0) {
      setCurr(curr - 1);
      setPre(nth - 1);
      return;
    }
}else if (data.length >= 3) {
  if (val == -1) {
    if (curr == 0) {
      setCurr(nth - 1);
      setPre(pre - 1);
      setNxt(nxt - 1);
      return;
    }else if (pre == 0) {
      setCurr(curr - 1);
      setNxt(nxt - 1);
      setPre(nth - 1);
      return;
    }else if (nxt == 0) {
      setCurr(curr - 1);
      setNxt(nth - 1);
      setPre(pre - 1);
      return;
    }else{
      setCurr(curr - 1);
      setNxt(nxt - 1);
      setPre(pre - 1);
      return;
    }
  }else{
    if (curr == nth-1) {
      setCurr(0);
      setPre(pre + 1);
      setNxt(nxt + 1);
      return;
    }else if (pre == nth-1) {
      setCurr(curr + 1);
      setNxt(nxt + 1);
      setPre(0);
      return;
    }else if (nxt == nth-1) {
      setCurr(curr + 1);
      setNxt(0);
      setPre(pre + 1);
      return;
    }else{
      setCurr(curr + 1);
      setNxt(nxt + 1);
      setPre(pre + 1);
      return;
    }
  }
 
}
}

// const clickHandler = (id) =>{
  
//   let retString = localStorage.getItem("cartData");
//   let retArray = [];
//   if (retString != null) {
//     retArray = JSON.parse(retString);
//   }
// var pro = data.filter(ele => ele.id === id);
// let strData = pro[0];
// strData?.disable = 'true';
// strData.quantity = 1;
// strData.subTotal = parseInt(pro[0]?.price) + parseInt(pro[0].SECURITY) + parseInt(pro[0].refill) ;
// localStorage.setItem('cartData',JSON.stringify([...retArray,strData]));
// localStorage.setItem('personalInfo',JSON.stringify([personalInfo]));
// window.location.reload();
// }
    return(
        <>
        <div className="mt-10">
   {data.length !=0? data.length >= 3 ?   
(
<div id="carouselExampleDark" class="carousel carousel-dark mt-5" data-bs-ride="carousel">
<div class="carousel-inner text-center" style={{overflow:'visible'}}>
  <div class="carousel-item d-flex active" id="curSlide1" data-bs-interval="10000">
  <div className="slide w-60 pt-5 mt-4 " style={{marginLeft:'auto',height:'fit-content'}}>
  <div className="top-bg">
    <img src={data[pre]?.image} class="d-block w-25 m-auto mt--5 user-img" alt="..."/>
    <p className="bottle-disc mt-4" style={{fontSize:'0.5rem'}}>{data[pre]?.name}</p>
    {
        data[pre]?.star == 1?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[pre]?.star == 2?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[pre]?.star == 3?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[pre]?.star == 4?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[pre]?.star == 5?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        </div>):''}
        </div>
    {/* <p className="review-txt">{data[pre]?.reviews} reviews</p> */}
    <p className="price-txt" style={{fontSize:'0.5rem'}}>{data[pre]?.description}</p>
    
    <p className="country-name-txt" >_{data[pre]?.country}</p>
    
 {/* data[pre]?.disable == 'true'?(<button className="m-auto py-2 add-to-cart-btn btn-disabled w-50" disabled ><img  src={cart} alt=""/> <span style={{marginLeft:'0.5vw'}}>Added</span></button>): */}
    {/* (<button className="m-auto py-2 add-to-cart-btn w-50" ><img src={cart} alt=""/> <span style={{marginLeft:'0.5vw'}} >Add to cart</span></button>)} */}
    </div>
  </div>
  <div class="carousel-item d-flex flex-column active" id="curSlide2" data-bs-interval="2000">
      <div className="slide w-70 pt-5 m-auto">
        <div className="top-bg">
    <img src={data[curr]?.image} class="d-block w-25 m-auto mt--5 user-img" alt="..."/>
    <p className="bottle-disc mt-4" >{data[curr]?.name}</p>
    {
        data[curr]?.star == 1?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 2?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 3?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 4?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 5?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        </div>):''}
        </div>
    {/* <p className="review-txt">{data[curr]?.reviews} reviews</p> */}
    <p className="price-txt">{data[curr]?.description}</p>
    
    <p className="country-name-txt" style={{fontSize:'1rem'}}>_{data[curr]?.country}</p>
    
       {/* data[curr]?.disable == 'true'?(<button className="m-auto py-2 btn-disabled add-to-cart-btn w-50" disabled ><img  src={cart} alt=""/> <span style={{marginLeft:'0.5vw'}}>Added</span></button>): */}
    {/* (<button className="m-auto py-2 add-to-cart-btn active" ><img  src={cart} alt=""/> <span style={{marginLeft:'0.5vw'}}>Add to cart</span></button>)} */}
    </div>
  </div>
  <div class="carousel-item d-flex active" id="curSlide3" data-bs-interval="2000">
  <div className="slide w-60 pt-5 mt-4 " style={{marginRight:'auto',height:'fit-content'}}>
  <div className="top-bg">
    <img src={data[nxt]?.image} class="d-block w-25 m-auto mt--5 user-img" alt="..."/>
    <p className="bottle-disc mt-4" style={{fontSize:'0.5rem'}}>{data[nxt]?.name}</p>
    {
        data[nxt]?.star == 1?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[nxt]?.star == 2?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[nxt]?.star == 3?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[nxt]?.star == 4?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[nxt]?.star == 5?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        </div>):''}
        </div>
    {/* <p className="review-txt">{data[nxt]?.reviews} reviews</p> */}
    <p className="price-txt" style={{fontSize:'0.5rem'}}> {data[nxt]?.description}</p>
    
    <p className="country-name-txt" >_{data[nxt]?.country}</p>
    
      {/* //  data[nxt]?.disable == 'true'?(<button className="m-auto py-2 btn-disabled add-to-cart-btn w-50" disabled ><img  src={cart} alt=""/> <span style={{marginLeft:'0.5vw'}}>Added</span></button>): */}
    {/* // (<button className="m-auto py-2 add-to-cart-btn w-50" ><img  src={cart} alt=""/> <span style={{marginLeft:'0.5vw'}}>Add to cart</span></button>)} */}
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" onClick={(e)=>moveSlider(-1)}>
  <span ><img className="rotate-180  arrow-btn" style={{transform:'rotate(180deg)'}}  src={arrow} alt=""/></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" onClick={(e)=>moveSlider(+1)}>
<span ><img className=" arrow-btn" src={arrow} alt=""/></span>
</button>
</div>):data.length == 2 ?(
<div id="carouselExampleDark" class="carousel carousel-dark mt-5" data-bs-ride="carousel">
<div class="carousel-inner text-center" style={{overflow:'visible'}}>
  <div class="carousel-item d-flex active" id="curSlide1" data-bs-interval="10000">
  <div className="slide w-60 pt-5 mt-4 " style={{marginLeft:'auto',height:'fit-content'}}>
  <div className="top-bg">
    <img src={data[pre]?.image} class="d-block w-25 m-auto mt--5 user-img" alt="..."/>
    <p className="bottle-disc mt-4" style={{fontSize:'0.5rem'}}>{data[pre]?.name}</p>
    {
        data[pre]?.star == 1?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[pre]?.star == 2?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[pre]?.star == 3?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[pre]?.star == 4?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[pre]?.star == 5?(
        <div className="stars w-45 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        </div>):''}
        </div>
    {/* <p className="review-txt">{data[pre]?.reviews} reviews</p> */}
    <p className="price-txt" style={{fontSize:'0.5rem'}}> {data[pre]?.description}</p>
    
    <p className="country-name-txt" >_{data[pre]?.country}</p>
    <button className="m-auto py-2 add-to-cart-btn w-50"><img src={cart} alt=""/> <span style={{marginLeft:'0.5vw'}} >Add to cart</span></button>
    </div>
  </div>
  <div class="carousel-item d-flex flex-column active" id="curSlide2" data-bs-interval="2000">
      <div className="slide w-70 pt-5 m-auto">
      <div className="top-bg">
    <img src={data[curr]?.image} class="d-block w-25 m-auto mt--5 user-img" alt="..."/>
    <p className="bottle-disc mt-4" >{data[curr]?.name}</p>
    {
        data[curr]?.star == 1?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 2?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 3?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 4?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 5?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        </div>):''}
        </div>
    {/* <p className="review-txt">{data[curr]?.reviews} reviews</p> */}
    <p className="price-txt">{data[curr]?.description}</p>
    
    <p className="country-name-txt" >_{data[curr]?.country}</p>
    <button className="m-auto py-2 add-to-cart-btn active" ><img  src={cart} alt=""/> <span style={{marginLeft:'0.5vw'}}>Add to cart</span></button>
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" onClick={(e)=>moveSlider(-1)}>
  <span ><img className="rotate-180 arrow-btn" style={{transform:'rotate(180deg)'}} src={arrow} alt=""/></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" onClick={(e)=>moveSlider(+1)}>
<span ><img className=" arrow-btn" src={arrow} alt=""/></span>
</button>
</div>):data.length == 1 ?(
<div id="carouselExampleDark" class="carousel carousel-dark mt-5" data-bs-ride="carousel">
<div class="carousel-inner text-center" style={{overflow:'visible'}}>
<div class="carousel-item d-flex flex-column active" id="curSlide1" data-bs-interval="2000"></div>
<div class="carousel-item d-flex flex-column active" id="curSlide2" data-bs-interval="2000">
      <div className="slide w-70 pt-5 m-auto">
      <div className="top-bg">
    <img src={data[curr]?.image} class="d-block w-25 m-auto mt--5 user-img" alt="..."/>
    <p className="bottle-disc mt-4" >{data[curr]?.name}</p>
    {
        data[curr]?.star == 1?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 2?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 3?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 4?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={disabaleStar} className="m-auto w-50" alt=""/>
        </div>): data[curr]?.star == 5?(
        <div className="stars w-65 m-auto mt-2">
        <img  src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        <img src={star} className="m-auto w-50" alt=""/>
        </div>):''}
        </div>
    {/* <p className="review-txt">{data[curr]?.reviews} reviews</p> */}
    <p className="price-txt">{data[curr]?.description}</p>
    
    <p className="country-name-txt" >_{data[curr]?.country}</p>
    <button className="m-auto py-2 add-to-cart-btn active" ><img  src={cart} alt=""/> <span style={{marginLeft:'0.5vw'}}>Add to cart</span></button>
    </div>
  </div>
  <div class="carousel-item d-flex flex-column active" id="curSlide3" data-bs-interval="2000"></div>
</div>

</div>):'':''
}
</div>
        </>
    )
}


export default Slider;
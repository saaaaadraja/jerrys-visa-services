import React from "react";
import {Routes, Route,BrowserRouter as Router } from 'react-router-dom';
import Home from "./Pages/Home";
import whatsapp from './assets/images/whatssAppIcon.png'

import Header from "./component/Header";
import Footer from "./component/Footer";
import Appointment from "./Pages/Appointment";
import Service from "./Pages/Service";

const Routs = () =>{
  function socialTab(path) {
    window.open(path,'_blank')
  }
    return(
        <>
          <Router>
              <header id='Header'>
              <Header/>
            </header>
              <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/appointment" element={<Appointment/>}/>
              <Route exact path="/services/:id" element={<Service/>}/>
              </Routes>
              <footer>
                <Footer/>
              </footer>
              <div className="socialLinksFloating">
       <button className="w-80" onClick={()=>socialTab('https://api.whatsapp.com/send/?phone=%2B447459023988&text&type=phone_number&app_absent=0')}><img  className=" w-100 " src={whatsapp} alt=""/> </button> 
    </div>
              </Router>
              </>)
}

export default Routs;
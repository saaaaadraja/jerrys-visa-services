import React from 'react';
import service1Img1 from '../assets/images/visa-servics1.jpg'
import service1Img2 from '../assets/images/visa-service2.jpg'

import service2Img1 from '../assets/images/service2-img2.jpg'
import service2Img2 from '../assets/images/service2-img1.jpg'

import service3Img1 from '../assets/images/service3-img1.jpg'
import service3Img2 from '../assets/images/service3-img2.jpg'

import service4Img1 from '../assets/images/service4-img1.jpg'
import service4Img2 from '../assets/images/service4-img2.jpg'

// country flag icons

import uk from '../assets/images/uk.png'
import america from '../assets/images/usa.png'
import canada from '../assets/images/canada.png'
import dubai from '../assets/images/dubai.png'
import morocco from '../assets/images/morocco.png'
import pakistan from '../assets/images/pakistan.png'
import england from '../assets/images/england.png'
import india from '../assets/images/india.png'
import europe from '../assets/images/europe.png'

const Service = () => {

    return (
        <div>
         {window.location.pathname.split('/')[2] === 'visa-service' ? (<>
         <div className='row w-95 m-auto mb-5'>
            <p className='path-name mb-5'>OUR SERVICES/ Visa Services</p>
          <div className='col-6 service-detail-text'>
            <h2 className="services-heading">VISA SERVICES</h2>
            We provide visa consultants to give detail and proper information regarding each and every 
            step required to fulfill visa application. We provide you with the list of documents that need
             to be provided and attested. Furthermore, it is our primary responsibility to prepare your all
              your documents if there is anything missing and give you the perfect solution and guidance for
               it.  We deal with certain countries as UK <img src={uk} className='w4 v-align-middle' alt="" /> , America<img src={america} className='w4 v-align-middle' alt="" /> , Canada <img src={canada} className='w4 v-align-middle' alt="" /> , Dubai <img src={dubai} className='w4 v-align-middle' alt="" /> , Morocco <img src={morocco} className='w4 v-align-middle' alt="" /> , Pakistan <img src={pakistan} className='w4 v-align-middle' alt="" />  , England <img src={england} className='w4 v-align-middle' alt="" />  ,
                India <img src={india} className='w4 v-align-middle' alt="" />  and European countries <img src={europe} className='w4 v-align-middle' alt="" />  as well.  </div>
          <div className='col-6 text-right'>
            <img className='w-90 service-detail-img' src={service1Img1} alt="" />
          </div>
         </div>
         <div className='row w-95 m-auto mb-5'>
          <div className='col-6 text-left'>
            <img className='w-90 service-detail-img' src={service1Img2} alt="" />
          </div>
          <div className='col-6 service-detail-text'>
          It is our core duty to update customers timely regarding their process of visa application so that they
           don’t have to worry again and again. We make sure to submit the visa application in the authentic and
            relevant hands for the speedy process.   </div>
         </div>
         </>) :
          window.location.pathname.split('/')[2] === 'nadra-card' ? (<>
            <div className='row w-95 m-auto mb-5'>
            <p className='path-name mb-5'>OUR SERVICES/ Nadra Card</p>
             <div className='col-6 service-detail-text'>
               <h2 className="services-heading">NADRA CARD </h2>
               NICOP card is  required  for UK which is the identification of  Pakistanis living abroad 
               that keeps them connected to their homeland Guidance about documents required to apply for 
               NICOP. Helping them with their personal details need to be put on Nadra card and any 
               correction needed in their prior card if they have one. We aim to provide services for 
               registering family members and getting NADRA card for spouse and children’s as well.   </div>
             <div className='col-6 text-right'>
               <img className='w-90 service-detail-img' src={service2Img1} alt="" />
             </div>
            </div>
            <div className='row w-95 m-auto mb-5'>
             <div className='col-6 text-left'>
               <img className='w-90 service-detail-img' src={service2Img2} alt="" />
             </div>
             <div className='col-6 service-detail-text'>
             Pakistan Overseas Card Online (NICOP Renewal) is issued to an eligible citizen of Pakistan who
              lives or has a reference abroad. Any Pakistani can travel back to Pakistan and apply for
               NADRA card renewal without any documentation. The online application for NICOP Renewal is 
               paid before head. Along with the Nicop payment, there are no extra charges taken. Nadra Card
                Center had the facility to track your status of NADRA cards whenever they want to. For the 
                ease they deliver your card to your postal address.   </div>
            </div>
            </>) :
          window.location.pathname.split('/')[2] === 'passport-renewal' ?(<>
            <div className='row w-95 m-auto mb-5'>
            <p className='path-name mb-5'>OUR SERVICES/ Passport Renewal</p>
             <div className='col-6 service-detail-text'>
               <h2 className="services-heading">PASSPORT RENEWAL</h2>
               We guide you with the online process of passport renewal for UK. Through MRP 
               (Machine Readable Passport ) application we guide you to upload certain documents for the 
               renewal of passport. It is mandatory to renew your passport, if it is expiring within 6 
               months and MRP application works when you have original documents issued by Nadra. We will 
               consult you time to time with all the process. </div>
             <div className='col-6 text-right'>
               <img className='w-90 service-detail-img' src={service3Img1} alt="" />
             </div>
            </div>
            <div className='row w-95 m-auto mb-5'>
             <div className='col-6 text-left'>
               <img className='w-90 service-detail-img' src={service3Img2} alt="" />
             </div>
             <div className='col-6 service-detail-text'>
             We aim to give you detailed list of documents required for the renewal of passport.
              Original & Photocopy Detailed Full Birth Certificate both parents names on it. Original and 
              Photocopy of valid Nadra Card (NICOP). Original & Photocopy valid British Passport of the 
              applicant. Original & photocopy of Pakistan Passports & ID cards of both parents. Family 
              Registration certificate (FRC) from Nadra section. If applicant never had a Pakistan Passport 
              (not in possession of any Pakistani Passport born in the UK) applying for 1st Pakistan Passport,
               his/her application will be referred for National Status verification to the security Agency in 
               Pakistan. Passport will be issued after verification from the security agency in Pakistan.  We 
               build your trust on us and give our best possible solution to all your problems. </div>
            </div>
            </>) :
          window.location.pathname.split('/')[2] === 'attestation-regularisation' ? (<>
            <div className='row w-95 m-auto mb-5'>
            <p className='path-name mb-5'>OUR SERVICES/ Attestation/Regularisation</p>
             <div className='col-6 service-detail-text'>
               <h2 className="services-heading">Attestation/Regularisation</h2>
               We provide services of attestation and regularization for visa application to help customer 
               smoothly find out the way. We make sure that all the documents are in order and meet the 
               standards set by immigration authorities. If there are any missing documents, we make sure 
               to help you out and revive it for no future complexity. The documents for verification 
               include educational, employment and identity documents. </div>
             <div className='col-6 text-right'>
               <img className='w-90 service-detail-img' src={service4Img1} alt="" />
             </div>
            </div>
            <div className='row w-95 m-auto mb-5'>
             <div className='col-6 text-left'>
               <img className='w-90 service-detail-img' src={service4Img2} alt="" />
             </div>
             <div className='col-6 service-detail-text'>
             It is our duty to give you help you with the attestation of documents, which is required for 
             the verification of documents authenticity.  Mainly educational documents and legal documents
              are required to be recognized in another country.  In case of any confusion regarding visa 
              applications and regularities, feel free to contact our legal assistant and solve your query.
               We act as a medium between immigration authorities and applicant, convey messages to avoid 
               any kind of misguidance or misunderstanding.  If applicant applies for work visa permit , we
                help them out even if the visa is granted to client before head.</div>
            </div>
            </>)  :
          ''
          }
        </div>
    );
};




export default Service;

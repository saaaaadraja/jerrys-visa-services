import React from 'react';
import AppointmentCalendar from '../component/AppointmentCalendar';
import '../assets/css/appointment.css';
import "../assets/css/send-mesage.scss";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import axios from 'axios';


import '../App.css'

const Appointment = () => {
  const [selectService , setSelectService] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [isCalendar , setIsCalender] = React.useState(true);
  const [isTimeSlot , setIsTimeSlot] = React.useState(false);
  const [isInfo , setIsInfo] = React.useState(false);

  const [calenderNextDisabled , setCalenderNextDisabled] = React.useState(true);
  const [timeSlotNextDisabled , setTimeSlotNextDisabled] = React.useState(true);

  const [selectedTimeSlot , setSelectedTimeSlot] = React.useState();

  const [formdata , setFormData] = React.useState({
    name:'',email:'',phoneNumber:'',message:''
  })

  const [errMsg , setErrMsg] = React.useState('');
  const [successMsg , setSuccessMsg] = React.useState('');
  const [timeSlots , setTimeSlots] =  React.useState([
    '11 : 00am - 11 : 30 am' , '11 : 30am - 12 : 00 pm' ,
    '12 : 00pm - 12 : 30 pm' , '12 : 30pm - 01 : 00 pm' ,
    '01 : 00pm - 01 : 30 pm' , '01 : 30pm - 02 : 00 pm' ,
    '02 : 00pm - 02 : 30 pm' , '02 : 30pm - 03 : 00 pm' ,
    '03 : 00pm - 03 : 30 pm' , '03 : 30pm - 04 : 00 pm' ,
    '04 : 00pm - 04 : 30 pm' , '04 : 30pm - 05 : 00 pm' 
  ]);
    const [today , setToday] =React.useState({
        date:'',day:'',month:'',year:''
    });
    function  handleChange(prop){
      setSelectedDate(prop);
      if (selectService != '') {
        setCalenderNextDisabled(false);
      }
      }
function changeSelectHandler(e) {
  setSelectService(e.target.value);
  if (e.target.value !='' && selectedDate !== null) {
    setCalenderNextDisabled(false);
  }
}

    React.useEffect(()=>{
      
     let currDate = new Date();
     let day = getDays(currDate.getUTCDay());
     let month = currDate.getUTCMonth() + 1 == 13 ? 1 : currDate.getUTCMonth() + 1;
     month = getMonths(month);
     let year = currDate.getUTCFullYear();
   let date = currDate.getUTCDate();
     setToday({
        date,day,month,year
     })
    },[])

    function getDays(date) {
        if (date == 0) {
            return 'Sunday'
        }else if (date == 1) {
            return 'Monday'
        }else if (date == 2) {
            return 'TUESDAY'
        }else if (date == 3) {
            return 'Wednesday'
        }else if (date == 4) {
            return 'Thursday'
        }else if (date == 5) {
            return 'Friday'
        }else if (date == 6) {
            return 'Saturday'
        }
    }
    function getMonths(month) {
        if (month == 1) {
            return 'January'
        }else if (month == 2) {
            return 'February'
        }else if (month == 3) {
            return 'March'
        }else if (month == 4) {
            return 'April'
        }else if (month == 5) {
            return 'May'
        }else if (month == 6) {
            return 'June'
        }else if (month == 7) {
            return 'July'
        }else if (month == 8) {
            return 'August'
        }else if (month == 9) {
            return 'September'
        }else if (month == 10) {
            return 'October'
        }else if (month == 11) {
            return 'November'
        }else if (month == 12) {
            return 'December'
        }
    }


    function clickHandler(e) {
      setIsCalender(false);
      setIsTimeSlot(true);
      setIsInfo(false);
    }
    function clickHandlerTimeSlotNxt(params) {
      setIsCalender(false);
      setIsTimeSlot(false);
      setIsInfo(true);
    }

    function clickHandlerTimeSlots(index) {
      setTimeSlotNextDisabled(false);
      setSelectedTimeSlot(index);
    }


    function submitHandler(e) {
      e.preventDefault();
        if (formdata.name && formdata.email && formdata.phoneNumber) {
          if (formdata.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
         axios.post('https://3kq1lmddha.execute-api.us-east-1.amazonaws.com/Dev',{serviceName:selectService,date:selectedDate,timeSlot:selectedTimeSlot,name:formdata.name,email:formdata.email,phoneNumber:formdata.phoneNumber,message:formdata.message})
         .then((res)=>{
          console.log(res);
           setSuccessMsg('Your Request for appointment has been received successfully. We will be catch up with you soon through email or whatsapp message. Thanks !');
         }).catch((err)=>console.log(err))
          setTimeout(() => {
            //  window.location.reload(); 
          }, 5000);
          }else{
            setErrMsg('Kindly input email address in correct formate.');
           setTimeout(() => {
             setErrMsg('')
           }, 5000);
          }
        }else{
    setErrMsg('Kindly Fill The Form Completely.')
    setTimeout(() => {
      setErrMsg('')
    }, 5000);
        }
    }
    return (
        <div>
          { isCalendar && <div className='appointment-header-sec'>
            <div className='bg-clr py-5 pb-10'>
              <h1 className='appointment-heading-text w-50 m-auto text-center'>
                Appointment Page
            </h1>
            <p className='date-text w-50 m-auto text-center'>{today?.day}{' '}{today?.month} {today.date}, {today.year}</p>
            <p className='company-text w-25 m-auto text-center mt-4'>Jerrys Visa Services</p>
            <p className='welcome-text  w-50 m-auto text-center mt-2'>Welcome to my appointment page.
            Please follow the instructions to add an appointment to my calendar.</p>
            <div className='w-50 m-auto text-center mt-4'>
            <p className='text-center company-text mb-0'>Select one of the following service: </p>
                <div className='circle'></div>
            <select className='select' value={selectService} onChange={changeSelectHandler}>
            <option value="" >Select</option>
                <option value="VISA SERVICES" >VISA SERVICES</option>
                <option value="NADRA CARD" >NADRA CARD</option>
                <option value="PASSPORT RENEWAL" >PASSPORT RENEWAL</option>
                <option value="ATTESTATION/REGULARISATION"> ATTESTATION/REGULARISATION</option>
            </select>
            </div>
        
            <div className='w-85 m-auto mt-5'>
            <AppointmentCalendar handleChange={handleChange} selectedDate={selectedDate} selectedService ={selectService}/>
            </div>
            <Button onClick={clickHandler} className={`next-btn ${calenderNextDisabled ? '' : 'active'}`} disabled = {calenderNextDisabled} variant="primary" type="submit">
                Next
                </Button>
            </div>
            </div>
}
          { isTimeSlot && <div className='pb-5'>
                <h1 className='time-heading w-50 m-auto text-center mt-5'>Select a Time Slot from Available Slots</h1>
                <p className='sec-text w-25 m-auto text-center '>Duration: 30 Minutes</p>
                <div className='w-90 m-auto mt-3 row'>
                  {
                   timeSlots.map((ele , i)=>{
                    return   <div className='col-6' key={i}> <button className={`w-100 text-center time-slot ${selectedTimeSlot === i ? 'active' : ''} mt-2`} onClick={(e)=>clickHandlerTimeSlots(i)}>{ele}</button></div>
                   })
                  }
                </div>
                {selectedTimeSlot > -1 && (
        <p className='w-85 m-auto mt-2'>
          You have selected Time Slot: <strong>{timeSlots[selectedTimeSlot]}</strong>
        </p>
      )}
                <Button onClick={clickHandlerTimeSlotNxt} className={`next-btn-time-slot ${timeSlotNextDisabled ? '' : 'active'}`} disabled = {timeSlotNextDisabled} variant="primary" type="submit">
                Next
                </Button>
                <div className='pb-5'></div>
            </div>
            }
           { isInfo && <div>
            <Container fluid className="send-message pb-5">
      <div className="heading-div w-100 pt-3">
        <h3 className="time-heading text-center">
        Enter Personal Details
        </h3>
      </div>
      <div className="form-sec">
        <Row>
          <Col md={12} sm={12} className="d-flex justify-content-center">
            <div className="message-form w-65">
              <Form>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={formdata.name}
                        onChange={(e)=>setFormData({...formdata,name:e.target.value})}
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type='email'
                        placeholder="email"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        value={formdata.email}
                        onChange={(e)=>setFormData({...formdata,email:e.target.value})}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="phone number"
                        aria-label="phone number"
                        aria-describedby="basic-addon1"
                        value={formdata.phoneNumber}
                        onChange={(e)=>setFormData({...formdata,phoneNumber:e.target.value})}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control as="textarea" placeholder="any message"  value={formdata.message}  onChange={(e)=>setFormData({...formdata,message:e.target.value})} rows={3} />
                    </Form.Group>
                  </Col>
                </Row>
                <p className='success-msg'>{successMsg}</p>
                <p className='err-msg'>{errMsg}</p>
                <Button className="messageBtn" variant="primary" type="submit" onClick={submitHandler}>
                SCHEDULE APPOINTMENT
                </Button>
              </Form>
            </div>
          </Col>
         
        </Row>
      </div>
    </Container>
            </div>}
        </div>
    );
}

export default Appointment;

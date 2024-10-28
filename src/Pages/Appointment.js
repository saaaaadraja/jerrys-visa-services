import React from 'react';
import AppointmentCalendar from '../component/AppointmentCalendar';
import '../assets/css/appointment.css';
import "../assets/css/send-mesage.scss";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import messageImg from "../assets/images/message-img.png";


const Appointment = () => {
    const [today , setToday] =React.useState({
        date:'',day:'',month:'',year:''
    });
    
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
    return (
        <div>
            <div className='appointment-header-sec'>
            <div className='bg-clr py-4'>
              <p className='appointment-heading-text w-50 m-auto text-center'>
                Not a Lorem Ipsum whatsoever,but your Lorem Ipsum!
            </p>
            <p className='sec-text w-90 m-auto text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula arcu, dictum et lacinia eget, commodo ac nunc.
            </p>
            <p className='date-text w-25 m-auto text-center'>{today?.day}<br/>{today?.month} {today.date}, {today.year}</p>
            <p className='company-text w-25 m-auto text-center mt-4'>Jerrys Visa Services</p>
            <p className='welcome-text  w-25 m-auto text-center mt-2'>Welcome to my scheduling page.
            Please follow the instructions to add an event to my calendar.</p>
            <div className='w-25 m-auto text-center mt-4'>
                <div className='circle'></div>
            <select className='select' >
                <option value="visa service" >VISA CONSULTANCY</option>
                <option value="visa service" >NADRA CARD</option>
                <option value="visa service" >PASSPORT RENEWAL</option>
            </select>
            </div>
        
            <div className='w-25 m-auto mt-5'>
            <AppointmentCalendar/>
            </div>
            </div>
            </div>
            <div>
                <h1 className='time-heading w-50 m-auto text-center mt-5'>Select a Time Slot from Available Slots</h1>
                <p className='sec-text w-25 m-auto text-center '>Duration: 30 Minutes</p>
                <div className='w-70 m-auto mt-3'>
                    <button className='w-100 text-center time-slot active mt-4'>4 : 00pm</button>
                    <button className='w-100 text-center time-slot mt-4'>4 : 00pm</button>
                    <button className='w-100 text-center time-slot active mt-4'>4 : 00pm</button>
                    <button className='w-100 text-center time-slot active mt-4'>4 : 00pm</button>
                    <button className='w-100 text-center time-slot active mt-4'>4 : 00pm</button>
                    <button className='w-100 text-center time-slot active mt-4'>4 : 00pm</button>
                    <button className='w-100 text-center time-slot active mt-4'>4 : 00pm</button>
                </div>
            </div>
            <div>
            <Container fluid className="send-message pb-5">
      <div className="heading-div w-100 pt-3">
        <h3 className="time-heading text-center">
        Enter Details
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
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="email"
                        aria-label="email"
                        aria-describedby="basic-addon1"
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
                      <Form.Control as="textarea" placeholder="Please share anything" rows={3} />
                    </Form.Group>
                  </Col>
                </Row>
                <Button className="messageBtn" variant="primary" type="submit">
                SCHEDULE EVENT
                </Button>
              </Form>
            </div>
          </Col>
         
        </Row>
      </div>
    </Container>
            </div>
        </div>
    );
}

export default Appointment;

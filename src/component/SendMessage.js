import React from "react";
import "../assets/css/send-mesage.scss";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import messageImg from "../assets/images/message-img.png";

import loctionImg from '../assets/images/locationIcon.png'
import phoneIcon from '../assets/images/phoneIcon.png'
import emailIcon from '../assets/images/emaiIcon.png'

const SendMessage = () => {
  return (
    <Container fluid className="send-message">
      <div className="heading-div w-100">
        <h2 className="heading w-100">
        <p className="text-center heading-text py-5">GET IN TOUCH</p>
        </h2>
        <h3 className="heading-p text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
      </div>
      <div className="form-sec">
        <Row>
          <Col md={6} sm={12} className="d-flex justify-content-center">
            <div className="message-form">
              <Form>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                      <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                      <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                      <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                      <Form.Control
                        placeholder="Username"
                        aria-label="Username"
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
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Col>
                </Row>
                <Button className="messageBtn" variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
            
          </Col>
          <Col md={6} sm={12} className="d-flex justify-content-center">
            <div className="form-image-sec">
              <img src={messageImg} />
            </div>
          </Col>
        </Row>
      </div>
    <div className="contact-detail-div">
      <div ><img src={loctionImg} className="icon-width" alt="" /><a href="https://www.google.com/maps/place/405+Warwick+Rd,+Tyseley,+Birmingham+B11+2JR,+UK/@52.4527842,-1.8551559,17z/data=!3m1!4b1!4m6!3m5!1s0x4870bbc00fcf7245:0xc542ac2881b48a4a!8m2!3d52.452781!4d-1.852581!16s%2Fg%2F11rg5xxl3n?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">405 Warwick Road, 
 tysely  B11 2JR</a></div>
 <div><img className="icon-width" src={phoneIcon} alt="" /><a href="tel:+01217969379">0121 796 9379</a></div>
 <div><img src={emailIcon} className="icon-width" alt="" /><a href="mailto:info@jerrysvisaservices.com">info@jerrysvisaservices.com</a></div>
    </div>
    </Container>
  );
};

export default SendMessage;

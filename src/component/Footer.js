import React from "react";
import fb from "../assets/images/facebook.png";
import inst from "../assets/images/inst.png";
import linkedin from "../assets/images/linkedin.png";
import logo from '../assets/images/logo1.png'

import "../assets/css/footer.css";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (<>
    <Container className="footer pb-3" fluid>
      <Row>
        <Col>
          <div className="left">
            <div className="logo-text">
              <img src={logo} className="w-60" alt="" />
            </div>
            <div className="about">
              <h1 className="footer-heading">About Us</h1>
              <p className="about-text w-60">
              Lorem Ipsum is simply dummy text
 of the printing and typesetting 
industry. Lorem Ipsum has been the
 industry's standard dummy text ever
 since the 1500s, when an unknown printer
 took a galley of type and scrambled it to
 make a type specimen book. 
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="footer-middle">
            <p className="footer-heading">Services</p>
            <ul className="list">
              <li>VISA SERVICES</li>
              <li>NADRA CARD</li>
              <li>PASPORT RENEWAL</li>
              <li>ATTESTATION / REGULARISATION</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="footer-right">
          <p className="footer-heading">Other Pages</p>
          <ul className="list">
            <li>Contact Us</li>
            <li>Terms & Payment Details</li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className="row w-12 mb-2">
        <div className="col-md-4"><a><img style={{  borderRadius: '0'}} className="w-100" src={fb} /></a></div>
        <div className="col-md-4"><a><img style={{  borderRadius: '0'}} className="w-100"  src={inst} /></a></div>
        <div className="col-md-4"><a><img  style={{  borderRadius: '0'}} className="w-100"  src={linkedin} /></a></div>
      </div>
    </Container>
    <div className="w-100 rights py-2">
      <div className="row w-50 m-auto text-center">
        <div col>Copyright © 2024 All right reserved</div>
      </div>
    </div>
    </> );
};

export default Footer;

import React from "react";
import "../assets/css/send-mesage.scss";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import messageImg from "../assets/images/message-img.png";
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
    </Container>
  );
};

export default SendMessage;

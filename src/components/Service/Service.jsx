import React from "react";
import "./service.css";
import reactLogo from "../../assets/images/reactjs.svg";
import { Col, Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    <div className="service_section">
      <Container className="text-center my-5">
        <h2 className="service_heading fw-bold mb-5">What I Will Do For You</h2>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <div className=" card_box text-center rounded-2">
              <img src={reactLogo} className="" width="150px" />
              <h5 className=" my-3 fw-normal">Web Development</h5>
              <p className="mb-3">
                I am Professional web developer. I do responsivewebsite for you.
                I have lots of ecprerience about this field
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className=" card_box text-center rounded-2">
              <img src={reactLogo} className="" width="150px" />
              <h5 className=" my-3 fw-normal">Web Development</h5>
              <p className="mb-3">
                I am Professional web developer. I do responsivewebsite for you.
                I have lots of ecprerience about this field
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className=" card_box text-center rounded-2">
              <img src={reactLogo} className="" width="150px" />
              <h5 className=" my-3 fw-normal">Web Development</h5>
              <p className="mb-3">
                I am Professional web developer. I do responsivewebsite for you.
                I have lots of ecprerience about this field
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;

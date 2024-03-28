import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { HiCheckCircle } from "react-icons/hi";
import "./summaryBanner.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function SummaryBanner() {
  return (
    <>
      <Container fluid className="summaryBanner ">
        <div className="summaryBannerOverlay d-flex">
          <Container className="text-center">
            <Row className="counter">
              <Col lg={8} md={6} sm={12}>
                <Row>
                  <Col>
                    <h1 className="countNumber">
                      <CountUp start={0} end={30} delay={0}>
                        {({ countUpRef,start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle">Total Projects</h4>
                    <hr className="foo w-25 mx-auto" />
                  </Col>
                  <Col>
                    <h1 className="countNumber">
                    <CountUp start={0} end={20} delay={0}>
                        {({ countUpRef,start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle">Total Clients</h4>
                    <hr className="foo w-25 mx-auto" />
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Card className="">
                  <Card.Body>
                    <Card.Title className="text-start">How I Work</Card.Title>
                    <Card.Text className="text-start">
                      <p className="text-justify">
                        <HiCheckCircle className="circlecheck" />
                        Requirement Gathering
                      </p>
                      <p>
                        <HiCheckCircle className="circlecheck" />
                        System Analysis
                      </p>
                      <p>
                        <HiCheckCircle className="circlecheck" />
                        Coding Test
                      </p>
                      <p>
                        <HiCheckCircle className="circlecheck" />
                        Implementation
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default SummaryBanner;

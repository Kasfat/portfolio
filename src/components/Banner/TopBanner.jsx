import React from "react";
import "./topBanner.css";
import myPicture from "../../assets/images/myPhoto.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

export const TopBanner = ({name, post, objective}) => {
  return (
    <>
      <Container fluid className="topFixBanner">
        <div className="topBannerOverlay d-flex align-items-center">
          <Container className="">
            <Row className="">
              <Col sm={12} md={7}>
                <div className=" d-flex flex-column align-items-center justify-content-center ">
                  <p className="myName">
                    I'm <span>{name}</span>
                  </p>
                  <p className="myPosition">{post}</p>
                  <p className="myObjective">
                    {objective}
                  </p>
                  <Button variant="primary" size="lg">
                    More Info
                  </Button>
                </div>
              </Col>
              <Col sm={12} md={5}>
                <div className="d-flex flex-column align-items-center">
                  <img width="220px" height="240px" src={myPicture} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

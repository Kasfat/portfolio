import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ClientReview.css";
import Client1 from "../../assets/images/client_01.jpg";

function ClientReview() {
  return (
    <>
      <Container fluid className=" text-center mt-4">
        <h2 className="clientReview_heading fw-bold">Client Review</h2>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className=" p-3 text-center ">
                <div className="mb-2">
                  <img
                    className="rounded-circle shadow-lg client_img"
                    src={Client1}
                  />
                </div>
                <div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className=" p-3 text-center ">
                <div className="mb-2">
                  <img
                    className="rounded-circle shadow-lg client_img"
                    src={Client1}
                  />
                </div>
                <div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className=" p-3 text-center ">
                <div className="mb-2">
                  <img
                    className="rounded-circle shadow-lg client_img"
                    src={Client1}
                  />
                </div>
                <div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default ClientReview;

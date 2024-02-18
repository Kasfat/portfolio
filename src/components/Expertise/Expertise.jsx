import React from "react";
import "./expertise.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { HiCheckCircle } from "react-icons/hi";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  { name: "html", score: 90 },
  { name: "css", score: 90 },
  { name: "bootstrap", score: 80 },
  { name: "Tailwind", score: 70 },
  { name: "javascript", score: 70 },
  { name: "react", score: 80 },
  { name: "typescript", score: 60 },
  { name: "php", score: 60 },
];

const Expertise = () => {
  return (
    <div className="expertise_section">
      <Container className="text-center mb-5">
        <h2 className="expertise_heading fw-bold">technology expertise</h2>
        <Row>
          <Col style={{ height: "400px" }} sm={12} md={12} lg={7}>
            <ResponsiveContainer width="100%">
              <BarChart width={100} height={500} data={data}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="score" fill="#8884d8"></Bar>
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={5}
            className="align-items-center justify-content-center d-flex"
          >
            <Card className="knowledge_card">
              <Card.Body>
                <Card.Title className="text-start">Key Knowledge</Card.Title>
                <Card.Text className="text-start">
                  <p className="text-justify"><HiCheckCircle className="circlecheck" />JIRA</p>
                  <p><HiCheckCircle className="circlecheck" />OOP</p>
                  <p><HiCheckCircle className="circlecheck" />GitHub</p>
                  <p><HiCheckCircle className="circlecheck" />Performance Optimization</p>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* <div className="d-flex">
                <div className="knowledge_list">
                    <h3>Key Knowledge</h3>
                    <ul className=" d-flex flex-column align-items-start gap-2 mt-3">
                        <li>JIRA</li>
                        <li>OOP</li>
                        <li>GitHub</li>
                        <li>Performance Optimization</li>
                    </ul>
                </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Expertise;

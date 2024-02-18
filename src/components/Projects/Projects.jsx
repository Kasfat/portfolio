import React from "react";
import "./project.css"
import Dashboard from "../../assets/images/dashboard.png"
import Gamelist from "../../assets/images/gamelist.png"
import Todoapp from "../../assets/images/todoapp.png"
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="projects_section">
      <Container className="text-center mb-5">
      <h2 className="projects_heading fw-bold mb-5">Recent projects</h2>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card className="projects_card">
              <Card.Img height="180px" variant="top" src={Dashboard} />
              <Card.Body>
                <Card.Title>Dashboard</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="projects_card">
              <Card.Img height="180px" variant="top" src={Gamelist} />
              <Card.Body>
                <Card.Title>Gamelist</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="projects_card">
              <Card.Img height="180px" variant="top" src={Todoapp} />
              <Card.Body>
                <Card.Title>ToDo List App</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

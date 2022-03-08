import React, { Component } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import HeaderComponent from './Components/HeaderComponent';
import BreadcrumbComponent from './Components/BreadcrumbComponent';
import CarouselComponent from './Components/CarouselComponent';
import ListgroupComponent from './Components/ListgroupComponent';
import JumbotronComponent from './Components/JumbotronComponent';
import FormComponent from './Components/FormComponent';

class App extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent />
        <BreadcrumbComponent />
        <CarouselComponent />
        <Row className="my-3">
          <Col md={3}>
          <ListgroupComponent />
          </Col>
          <Col md={6}>
          <JumbotronComponent />
          </Col>
          <Col>
          <FormComponent />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;


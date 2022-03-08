import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

const BreadcrumbComponent = () => {
  return (
    <Container className="mb-4">
      <Row>
        <Col md={8}></Col>
        <Col style={{ background: "#bdc3c7" }}>
          <Breadcrumb className="d-flex align-items-center justify-content-start">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/berita">Berita</Breadcrumb.Item>
            <Breadcrumb.Item href="/bola">Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default BreadcrumbComponent;

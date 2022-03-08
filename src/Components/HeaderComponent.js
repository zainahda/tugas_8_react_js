import React from "react";
import { Container, DropdownButton, Dropdown, Row, Col, Figure } from "react-bootstrap";

const HeaderComponent = () => {
  return (
    <Container>
      <Row style={{background: "black"}}>
        <Col>
          <DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
            <Dropdown.Item href="#/">Indonesia</Dropdown.Item>
            <Dropdown.Item href="#/">English</Dropdown.Item>
            <Dropdown.Item href="#/">Arab</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
        <center>
          <Figure>
            <Figure.Image
              width={35}
              height={35}
              alt="user pict"
              src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
              roundedCircle
            />
            <Figure.Caption >
              <h6 style={{ color: "white"}}>Alan Saputra</h6>
            </Figure.Caption>
          </Figure>
          </center>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderComponent;

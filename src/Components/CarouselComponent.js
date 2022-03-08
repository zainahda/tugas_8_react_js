import React from "react";
import { Carousel, Col } from "react-bootstrap";
import dataSoccer from "../Lib/DataSoccer";

const CarouselComponent = () => {
  return (
    <center>
      <Col md={8}>
        <Carousel>
          {dataSoccer.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={item.imgUrl}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Col>
    </center>
  );
};

export default CarouselComponent;

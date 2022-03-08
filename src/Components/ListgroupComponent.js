import React from "react";
import { ListGroup } from "react-bootstrap";

const ListgroupComponent = () => {
  return (
    <ListGroup>
      <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
      <ListGroup.Item>Liga Premier Inggris</ListGroup.Item>
      <ListGroup.Item disabled>Divisi Primera</ListGroup.Item>
      <ListGroup.Item>Serie A</ListGroup.Item>
      <ListGroup.Item>Ligue 1</ListGroup.Item>
      <ListGroup.Item>Bundes Liga</ListGroup.Item>
    </ListGroup>
  );
};

export default ListgroupComponent;

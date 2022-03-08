import React from "react";
import { Form, Button, Image, Modal } from "react-bootstrap";
import { useState } from "react";

const FormComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Form>
      <center>
        {/* referensi foto tidak ada, sehingga di ganti dari freepik */}
        <Image
          src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
          width="50"
          height="50"
          roundedCircle
        />
        <h5 className="my-2">
          <strong>Silahkan Login</strong>
        </h5>
      </center>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Masukan email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Term & Condition" />
      </Form.Group>
      <Button variant="primary" onClick={handleShow} type="submit">
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda Berhasil Login</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Username & Password
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default FormComponent;

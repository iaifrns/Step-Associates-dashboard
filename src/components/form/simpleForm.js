import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SimpleForm = ({cancel}) => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formMobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" placeholder="Enter your mobile number" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Button variant="outline-dark" type="button" className='mt-2' onClick={cancel}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default SimpleForm;

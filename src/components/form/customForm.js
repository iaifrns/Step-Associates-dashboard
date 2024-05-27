import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CustomForm = ({handleClose}) => {
  const [phone, setPhone] = useState('');

  return (
    <div className="container">
      <Form style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" placeholder="Enter detail" />
        </Form.Group>

        <Form.Group controlId="formDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="datetime-local" />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Send SMS To</Form.Label>
          <PhoneInput country={'us'} value={phone} onChange={(phone) => setPhone(phone)} />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Send Email To</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <div style={{ display: 'flex', justifyContent: 'end', gap:4 }}>
          <Button variant="outline-dark" type="submit" onClick={handleClose}>
            Cancel
          </Button>
        <Button type="submit">OK</Button>
        </div>
      </Form>
    </div>
  );
};

export default CustomForm;

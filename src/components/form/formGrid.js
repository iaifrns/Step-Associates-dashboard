import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Row, Col, Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaExchangeAlt } from 'react-icons/fa';
import { InputFileUpload } from '../button';

export const FormGrid = () => {
  return (
    <div style={{ width: '100%' }}>
      <Card>
        <Card.Header>
          <Card.Title as="h5" style={{ fontWeight: 'bold' }}>
            ESTIMATE DETAILS
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Reference Number</Form.Label>
              <Form.Control value="Q1234" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Estimate Name/Description</Form.Label>
              <Form.Control value="Untitled Estimate" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Created</Form.Label>
              <Form.Control value="Untitled Estimate" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Building Type</Form.Label>
              <Form.Control value="Duplex" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Default Markup Redistribution for PC/PS Items</Form.Label>
              <Form.Control value="Within Category" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Default Markup Redistribution for PC/PS Items</Form.Label>
              <InputGroup className="mb-3">
                <FormControl value="Australian GST" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <InputGroup.Text id="basic-addon2">Customize</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export const FormWorkLocation = () => {
  return (
    <div style={{ width: '100%' }}>
      <Card>
        <Card.Header>
          <Card.Title as="h5" style={{ fontWeight: 'bold' }}>
            WORK LOCATION
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Enter a Location" />
            </Form.Group>

            <Row>
              <Form.Group className="mb-3" as={Col} controlId="formGridCity">
                <Form.Label>City / Town</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option></option>
                  <option>AD</option>
                  <option>CE</option>
                  <option>EN</option>
                  <option>ES</option>
                  <option>LI</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="formGridZip">
                <Form.Label>Postcode</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export const ClientDetail = ({ isSmallScreen }) => {
  return (
    <div style={{ width: isSmallScreen ? '100%' : '50%' }}>
      <Card>
        <Card.Header>
          <Card.Title as="h5" style={{ fontWeight: 'bold' }}>
            CLIENT DETAILS
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Name</Form.Label>
              <Form.Control as="select">
                <option>Unassigned 1</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Enter a location" />
            </Form.Group>

            <Row>
              <Form.Group className="mb-3" as={Col} controlId="formGridCity">
                <Form.Label>City / Town</Form.Label>
                <Form.Control placeholder="City / Town" />
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option></option>
                  <option>AD</option>
                  <option>CE</option>
                  <option>EN</option>
                  <option>ES</option>
                  <option>LI</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="formGridZip">
                <Form.Label>Postcode</Form.Label>
                <Form.Control placeholder="Postcode" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Mobile</Form.Label>
              <Form.Control placeholder="6 98 98 88 33" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Phone</Form.Label>
              <Form.Control placeholder="6 98 98 88 33" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Source</Form.Label>
              <Form.Control placeholder="Source..." />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export const LeadDetail = () => {
  return (
    <div style={{ width: '100%' }}>
      <Card>
        <Card.Header>
          <Card.Title as="h5" style={{ fontWeight: 'bold' }}>
            LEAD DETAILS
          </Card.Title>
        </Card.Header>
        <Card.Body style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'lightgray', padding: '16px' }}>
                  <FaExchangeAlt style={{ marginRight: '8px' }} />
                </div>
                <p style={{ margin: '8px' }}>No lead linked to this estimate</p>
                <Button color="success" style={{ margin: '8px' }}>
                  Link to a lead
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export const Notes = () => {
  const [writeNode, setWriteNode] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      <Card>
        <Card.Header>
          <Card.Title as="h5" style={{ fontWeight: 'bold' }}>
            NOTES
          </Card.Title>
        </Card.Header>
        <Card.Body style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <p style={{ color: '#21aeaa' }}>Tap to create a note (use Shift+Enter/Return for new paragraphs)</p>
              {writeNode ? (
                <textarea style={{ width: '100%', height: '80px' }} />
              ) : (
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: '80px',
                    cursor: 'pointer'
                  }}
                  onClick={() => setWriteNode(true)}
                >
                  <h6 style={{ fontWeight: 'bold' }}>Create a note</h6>
                </Box>
              )}
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export const Document = ({ isSmallScreen }) => {
  return (
    <div style={{ width: isSmallScreen ? '100%' : '50%' }}>
      <Card>
        <Card.Header>
          <Card.Title as="h5" style={{ fontWeight: 'bold' }}>
            DOCUMENTS
          </Card.Title>
        </Card.Header>
        <Card.Body style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <p>Click Upload File or drop your files in the box below</p>
              <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', alignItems: 'center', height: '100px' }}>
                <InputFileUpload />
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export const EstimateVersion = ({ isSmallScreen }) => {
  return (
    <div style={{ width: isSmallScreen ? '100%' : '50%' }}>
      <Card>
        <Card.Header>
          <Card.Title as="h5" style={{ fontWeight: 'bold' }}>
            ESTIMATE VERSIONING
          </Card.Title>
        </Card.Header>
        <Card.Body style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'lightgray', padding: '16px' }}>
                  <FaExchangeAlt style={{ marginRight: '8px' }} />
                </div>
                <p style={{ margin: '8px', width: '100%' }}>No description</p>
                <Button color="success">
                  Capture Version
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

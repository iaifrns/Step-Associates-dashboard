import React from 'react';
import { Row } from 'react-bootstrap';
import { Button, Stack } from '@mui/material';
import { CustomCard } from '../../../../components/Card/card';
import { FaHome, FaSimCard, FaPlug, FaUtensils } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CreateEstimate = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Row>
        <h3 style={{ fontWeight: 'bold' }}>Create Estimate</h3>
        <p style={{ color: 'gray', width: '50%' }}>
          Select a template to start creating your estimate. All templates are customizable to help you get quotes out quickly
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid lightgray',
            width: '95%',
            margin: '16px',
            padding: '16px',
            gap: 16
          }}
        >
          <h6 style={{fontWeight:'bold'}}>Create your estimate from scratch or use the default template</h6>
          <Stack direction={'row'} spacing={2}>
            <Button variant='contained'>Create blank estimate</Button>
            <Button variant='contained'>Default template</Button>
          </Stack>
        </div>
        <h4 style={{ fontWeight: 'bold', paddingBottom: '16px', marginTop: '24px', marginBottom: '16px' }}>Step Associates template (6)</h4>
        <Stack direction={'column'} spacing={3}>
          <CustomCard
            icon={<FaSimCard size={64} />}
            title={'Blank'}
            body={'Start from scratch using a blank template. Add your own category or copy from other template.'}
            onClick={() => {
              console.log('clicked');
            }}
          />
          <CustomCard
            icon={<FaHome size={64} />}
            title={'Duplex (Single Storey)'}
            body={'Duplex (Single Storey) template to help speed up the estimation process'}
            onClick={() => {
              navigate('/estimate/create/id');
            }}
          />
          <CustomCard
            icon={<FaPlug size={64} />}
            title={'Extension'}
            body={'Include categories such as preliminaries hire items temporary services surveyors etc.'}
            onClick={() => {
              console.log('clicked');
            }}
          />
          <CustomCard
            icon={<FaUtensils size={64} />}
            title={'Kitchen and Bathroom'}
            body={'Includes categories such as preliminaries, frame carpenter, windows, skylight etc.'}
            onClick={() => {
              console.log('clicked');
            }}
          />
        </Stack>
      </Row>
    </React.Fragment>
  );
};

export default CreateEstimate;

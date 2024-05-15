import React from 'react';
import { Row } from 'react-bootstrap';
import { DefaultButton } from '../../../../components/button';
import { Stack } from '@mui/material';
import { CustomCard } from '../../../../components/Card/card';
import { FaHome, FaSimCard, FaPlug, FaUtensils } from 'react-icons/fa';

const CreateEstimate = () => {
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
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '2px dotted gray',
            width: '95%',
            margin: '16px',
            padding: '16px'
          }}
        >
          <span>Create your estimate from scratch or use the default template</span>
          <Stack direction={'row'} spacing={2}>
            <DefaultButton title={'Create blank estimate'} />
            <DefaultButton title={'Default template'} />
          </Stack>
        </div>
        <h4 style={{ fontWeight: 'bold', paddingBottom: '16px', marginTop: '24px', marginBottom: '16px' }}>Buildxact template (6)</h4>
        <Stack direction={'row'} spacing={3}>
          <CustomCard
            icon={<FaSimCard size={64} />}
            title={'Blank'}
            body={'Start from scratch using a blank template. Add your own category or copy from other template.'}
          />
          <CustomCard
            icon={<FaHome size={64} />}
            title={'Duplex (Single Storey)'}
            body={'Duplex (Single Storey) template to help speed up the estimation process'}
          />
          <CustomCard
            icon={<FaPlug size={64} />}
            title={'Extension'}
            body={'Include categories such as preliminaries hire items temporary services surveyors etc.'}
          />
          <CustomCard
            icon={<FaUtensils size={64} />}
            title={'Kitchen and Bathroom'}
            body={'Includes categories such as preliminaries, frame carpenter, windows, skylight etc.'}
          />
        </Stack>
      </Row>
    </React.Fragment>
  );
};

export default CreateEstimate;

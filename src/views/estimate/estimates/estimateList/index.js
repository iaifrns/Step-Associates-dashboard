import React from 'react';
import { Row } from 'react-bootstrap';
import { DenseTable } from '../../../../components/table/table';
import { Card, Stack } from '@mui/material';
import { BasicSelect } from '../../../../components/select';
import { CustomizedInputBase } from '../../../../components/input';
import { useNavigate } from 'react-router-dom';

const EstimateList = () => {

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Row>
        <Card sx={{ p: 2 }}>
          <div style={{ width: '100%', padding: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <BasicSelect title={'More Details'} />
            <Stack direction={'row'} spacing={2}>
              <BasicSelect title={'Setting'} />
              <CustomizedInputBase />
            </Stack>
          </div>
          <DenseTable navigate={navigate} />
          <div style={{ fontWeight: 'bold', padding: '8px' }}>
            {' '}
            <span
              style={{
                backgroundColor: 'lightskyblue',
                padding: '2px',
                paddingLeft: '10px',
                paddingRight: '10px',
                borderRadius: '100%',
                color: 'white'
              }}
            >
              i
            </span>{' '}
            Manage Estimate
          </div>
        </Card>
      </Row>
    </React.Fragment>
  );
};

export default EstimateList;

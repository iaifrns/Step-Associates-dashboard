import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { EstimateHeader } from '../../components/estimate header';
import { Box } from '@mui/material';
import CustomContainer from './estimateCostDataContent';
import { SideBar } from '../../components/estimateSideBar/sideBar';

const BottomContent = ({ custom = true, title, cost }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {custom ? <Button>{title}</Button> : <h5>{title}</h5>}
      <h6 style={{ color: custom ? 'blue' : 'black' }}>{cost}</h6>
    </div>
  );
};

const CustomButton = ({ text }) => {
  return <Button variant="success">{text}</Button>;
};

const Container = ({ children }) => {
  return (
    <Box
      style={{
        padding: '16px',
        borderTop: '1px solid lightgray',
        display: 'flex',
        justifyContent: 'space-evenly'
      }}
    >
      {children}
    </Box>
  );
};

const EstimateBottom = ({ active }) => {
  return (
    <>
      {active ? (
        <Container>
          <CustomButton text={'Show Type Breakdown for 4 items'} />
          <CustomButton text={'+ New Quote Request for 4 items'} />
          <CustomButton text={'Copy 4 items to template'} />
          <CustomButton text={'Move 4 items'} />
          <Button variant="outline-dark">Cancel</Button>
        </Container>
      ) : (
        <Container>
          <BottomContent title={'Sub Total (Ex)'} cost={'$0.00'} />
          <BottomContent title={'Markup'} cost={'$0.00'} />
          <BottomContent custom={false} title={'GST'} cost={'$0.00'} />
          <BottomContent custom={false} title={'Quote Total'} cost={'$0.00'} />
        </Container>
      )}
    </>
  );
};

const EstimateCost = () => {
  const [anEllementChecked, setAnEllementChecked] = useState(false);
  return (
    <React.Fragment>
      <Row>
        <Box
          style={{
            height: '88vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 0,
            marginb: 0
          }}
        >
          <EstimateHeader active={'Estimate Costings'} />
          <div
            style={{
              display: 'flex',
              overflow:'auto'
            }}
          >
            <CustomContainer setEllementChecked={setAnEllementChecked} />
            <SideBar />
          </div>
          <EstimateBottom active={anEllementChecked} />
        </Box>
      </Row>
    </React.Fragment>
  );
};

export default EstimateCost;

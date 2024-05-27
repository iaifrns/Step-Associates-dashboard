import { Button, Card } from 'react-bootstrap';
import BasicDateRangePicker from '../datePicker/dateRangePicker';
import { useContext } from 'react';
import { ConfigContext } from '../../contexts/ConfigContext';

const Schedule = () => {

    const {isSmallScreen} = useContext(ConfigContext);
  return (
    <Card
      style={{
        width: '100%',
        boxShadow: 4,
        borderRadius: '8px',
        border: '1px solid lightgray'
      }}
    >
      <div
        style={{
          padding: '16px',
          backgroundColor: 'white'
        }}
      >
        <h5 style={{ fontWeight: 'bold' }}>SCHEDULE</h5>
      </div>
      <div
        style={{
          padding: '24px',
          marginBottom: '16px',
          backgroundColor: 'rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection:isSmallScreen ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems:isSmallScreen ? 'center' : 'start'
          }}
        >
          <div>
            <Button>By Job</Button>
            <Button variant="outline-dark">By Job</Button>
          </div>
          <div>
            <BasicDateRangePicker/>
          </div>
          <div>
            <Button variant="outline-dark">Print</Button>
            <Button variant="outline-dark">*</Button>
          </div>
        </div>
        <h5
          style={{textAlign:'center'}}
        >
          Nothing on your schedule from Monday, April 29, 2024 to Sunday, May 12, 2024
        </h5>
      </div>
    </Card>
  );
};

export { Schedule };

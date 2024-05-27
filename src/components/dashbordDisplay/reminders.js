import { Button } from '@mui/material';
import BasicDateRangePicker from '../datePicker/dateRangePicker';
import { CustomSelect } from '../select';
import { Card } from 'react-bootstrap';
import { useContext } from 'react';
import { ConfigContext } from '../../contexts/ConfigContext';

const Reminders = ({ handleOpen }) => {
  const { isSmallScreen } = useContext(ConfigContext);
  return (
    <Card
      style={{
        flex: 1,
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
        <h5 style={{ fontWeight: 'bold' }}>REMINDERS</h5>
      </div>
      <div
        style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          height: '300px',
          backgroundColor: 'rgba(0,0,0,0.05)'
        }}
      >
        <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', gap: 4 }}>
          <BasicDateRangePicker />
          <CustomSelect title={'Settings'} />
        </div>
        <Button variant="contained" onClick={handleOpen}>
          New Reminder
        </Button>
        <p style={{ textAlign: 'center' }}>No Remider</p>
      </div>
    </Card>
  );
};

export { Reminders };

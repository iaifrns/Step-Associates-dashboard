import { Button } from '@mui/material';
import BasicDateRangePicker from '../datePicker/dateRangePicker';
import { CustomSelect } from '../select';

const Reminders = () => {
  return (
    <div
      style={{
        flex: 1
      }}
    >
      <div
        style={{
          padding: '16px'
        }}
      >
        <h4 style={{ fontWeight: 'bold' }}>REMINDERS</h4>
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
        <div style={{ display: 'flex', gap: 4 }}>
          <BasicDateRangePicker />
          <CustomSelect title={"Settings"}/>
        </div>
        <Button variant='contained'>New Reminder</Button>
        <p style={{textAlign:'center'}}>No Remider</p>
      </div>
    </div>
  );
};

export { Reminders };

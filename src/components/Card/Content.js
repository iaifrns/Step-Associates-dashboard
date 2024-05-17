import { Card, Stack } from '@mui/material';
import { FiSearch } from 'react-icons/fi';
import { CustomSelect } from '../select';
import { DynamicTable } from '../table/table';

export const ContentData = ({ columns, data, buttonGroup }) => {
  return (
    <Card sx={{ p: 2 }}>
      <div style={{ width: '100%', padding: '8px', display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction={'row'} spacing={2}>
          <button
            style={{
              backgroundColor: '#184d35',
              padding: '8px',
              width: '150px',
              borderRadius: '8px',
              color: 'white',
              border: 'none',
              fontWeight: 'bold'
            }}
          >
            Create New
          </button>

          <CustomSelect title={'More actions'} />
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <div
            style={{
              display: 'flex',
              width: '250px',
              borderRadius: '12px',
              padding: '8px',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.1)',
              gap: '4px'
            }}
          >
            <FiSearch />
            <input placeholder="Search" style={{ backgroundColor: 'rgba(0,0,0,0)', border: 'none' }} />
          </div>
          <CustomSelect title={'Settings'} />
        </Stack>
      </div>
      {/* table */}
      <DynamicTable title={columns} data={data} buttonGroup={buttonGroup} />
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
  );
};

import { Button, Stack } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import CollapsibleTable from '../../../../components/table/collapsibleTable';
import Checkbox from '@mui/material/Checkbox';
import { InputWithLabel } from '../../../../components/input/inputWithLabel';

const DuplexTemplate = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Stack direction={'row'} sx={{height:'85vh', overflow:'hidden'}}>
      <div
        style={{
          width: '100%',
          height: '100%',
          flex: 3
        }}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          bgcolor={'white'}
          style={{ border: '1px solid lightgray', padding: '24px' }}
        >
          <Stack direction={'row'} spacing={2} alignContent={'center'}>
            <FaHome size={54} />
            <div>
              <h4 style={{ fontWeight: 'bold' }}>Duplex (Single Storey) Template</h4>
              <p>Duplex (Single Storey) template ot help speed up the estimation process</p>
            </div>
          </Stack>
          <div style={{ padding: '8px', backgroundColor: 'lightgray', borderRadius: '40px', color: 'black' }}>This is a preview</div>
        </Stack>
        <div
          style={{
            padding: '32px',
            backgroundColor: 'lightgray',
            height: '80%',
            overflow: 'auto'
          }}
        >
          <CollapsibleTable />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          padding: '16px',
          backgroundColor: 'white',
          border: '1px solid lightgray',
          paddingTop: '32px'
        }}
      >
        <h4 style={{ fontWeight: 'bold' }}>Configuration</h4>
        <p>Include</p>
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Checkbox {...label} />
          <span>Include template qualities</span>
        </Stack>
        <Stack direction={'column'} spacing={2} mt={2}>
          <InputWithLabel label={'Description'} placeholder={'Untitled Estimate'} />
          <InputWithLabel label={'Building Type'} placeholder={'Duplex (Single Storey)'} />
          <InputWithLabel label={'Job Location'} placeholder={'Job location'} />
          <InputWithLabel label={'Client'} placeholder={'Client Name ....'} />
        </Stack>
        <Stack direction={'column'} spacing={2} mt={4}>
            <Button variant='outlined' color='inherit'>Cancel</Button>
            <Button color='success' variant='contained'>Use Template</Button>
        </Stack>
      </div>
    </Stack>
  );
};

export default DuplexTemplate;

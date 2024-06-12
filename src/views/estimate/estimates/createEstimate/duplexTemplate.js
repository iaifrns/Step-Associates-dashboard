import { Button, Stack } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import CollapsibleTable from '../../../../components/table/collapsibleTable';
import Checkbox from '@mui/material/Checkbox';
import { InputWithLabel } from '../../../../components/input/inputWithLabel';
import { useContext, useState } from 'react';
import { emptyEstimate } from '../../../../data/data';
import { DataContext } from '../../../../contexts/DataContext';
import { useNavigate } from 'react-router-dom';

const DuplexTemplate = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [estimate, setEstimate] = useState(emptyEstimate);
  const [message, setMessage] = useState('');

  const {addEstimate, setSelectedEstimate} = useContext(DataContext)

  const navigate = useNavigate();

  const createEstimate = () => {
    if (estimate.desc.length == 0 || estimate.buildType.length == 0 || estimate.client.length == 0 || estimate.job.length == 0) {
      setMessage('Fill the form please');
    } else {
      let id = new Date().toISOString()
      setEstimate({...estimate, id: id.replace(/[-:.TZ]/g, ''), date: id})
      addEstimate({...estimate, id: id.replace(/[-:.TZ]/g, ''), date: id})
      setSelectedEstimate({...estimate, id: id.replace(/[-:.TZ]/g, ''), date: id})
      alert('Estimate created');
      navigate("/estimate/detail")
    }
  };

  return (
    <Stack direction={'row'} sx={{ height: '85vh', overflow: 'hidden' }}>
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
          <InputWithLabel
            label={'Description'}
            placeholder={'Untitled Estimate'}
            value={estimate.desc}
            onChange={(e) => setEstimate({ ...estimate, desc: e.target.value })}
          />
          <InputWithLabel
            label={'Building Type'}
            placeholder={'Duplex (Single Storey)'}
            value={estimate.buildType}
            onChange={(e) => setEstimate({ ...estimate, buildType: e.target.value })}
          />
          <InputWithLabel
            label={'Job Location'}
            placeholder={'Job location'}
            value={estimate.job}
            onChange={(e) => setEstimate({ ...estimate, job: e.target.value })}
          />
          <InputWithLabel
            label={'Client'}
            placeholder={'Client Name ....'}
            value={estimate.client}
            onChange={(e) => setEstimate({ ...estimate, client: e.target.value })}
          />
        </Stack>
        <Stack direction={'column'} spacing={2} mt={4}>
          <p style={{ color: 'red', fontSize: '11px' }}>{message}</p>
          <Button variant="outlined" color="inherit">
            Cancel
          </Button>
          <Button color="success" variant="contained" onClick={createEstimate}>
            Use Template
          </Button>
        </Stack>
      </div>
    </Stack>
  );
};

export default DuplexTemplate;

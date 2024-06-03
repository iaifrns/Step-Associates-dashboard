import { FaAngleLeft } from 'react-icons/fa';
import TemporaryDrawer from '../drawer';
import { VerticalText } from '../Text/verticalText';
import { useState } from 'react';
import { Box } from '@mui/material';
const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Catalogues');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: 8,
        border: '1px solid lightgray',
        alignItems: 'center',
        padding: '8px'
      }}
    >
      <FaAngleLeft onClick={() => setOpen(true)} />
      <Box
        onClick={() => {
          setOpen(true);
          setActive('Catalogues');
        }}
      >
        <VerticalText text={'Catalogues'} />
      </Box>
      <Box
        onClick={() => {
          setOpen(true);
          setActive('Recipes');
        }}
      >
        <VerticalText text={'Recipes'} />
      </Box>
      <TemporaryDrawer open={open} setOpen={setOpen} active={active} setActive={setActive} />
    </div>
  );
};

export { SideBar };

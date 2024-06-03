import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Stack } from '@mui/material';
import { VerticalTextClickable } from '../Text/verticalText';
import { FaAngleRight, FaSearch } from 'react-icons/fa';
import { EstimateRecipesData } from '../../data/generalData';

export default function TemporaryDrawer({ open, setOpen, active, setActive }) {
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350, maxHeight:'100vh', overflow:'hidden' }} role="presentation">
      <Stack direction={'row'} height={'98vh'}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            height: '100%',
            borderRight: '1px solid lightgray',
            paddingTop: 8,
            alignItems: 'center'
          }}
        >
          <FaAngleRight />
          <VerticalTextClickable text={'Catalogues'} active={active == 'Catalogues'} onClick={() => setActive('Catalogues')} />
          <VerticalTextClickable text={'Recipes'} active={active == 'Recipes'} onClick={() => setActive('Recipes')} />
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ padding: '8px', border: '1px solid lightgray' }}>
            <span style={{ textDecoration: 'underline' }}>All</span>
          </div>
          <div style={{ display: 'flex', padding: '8px', backgroundColor: 'lightgray', alignItems: 'center' }}>
            <FaSearch color="gray" />
            <input style={{ border: 'none', backgroundColor: 'rgba(0,0,0,0)' }} placeholder="Search within Concreting" />
          </div>
          {(active == 'Recipes') && <ContainerRecipes data={EstimateRecipesData} />}
        </div>
      </Stack>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}

const ContainerRecipes = ({ data }) => {
  return (
    <div style={{ overflow: 'auto', height: '90%' }}>
      {data.map((item, index) => (
        <Recipe key={index} data={item} />
      ))}
    </div>
  );
};

const Recipe = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: '16px',
        borderBottom: '1px solid lightgray'
      }}
    >
      <h6>{data.title}</h6>
      <div style={{ display: 'flex', alignContent: 'end', maxHeight:'50px' }}>
        <span style={{overflow:'hidden', textOverflow:'ellipsis'}}>{data.desc}</span>
        <span style={{ width: '150px' }}>({data.number} items)</span>
      </div>
      <h6 style={{ fontWeight: 'bold' }}>{data.cost}</h6>
    </div>
  );
};

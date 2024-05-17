import React from 'react';
import { Row } from 'react-bootstrap';
import { ContentData } from '../../components/Card/Content';
import { Button, ButtonGroup } from '@mui/material';
import { FaTrashAlt, FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';
import { RiArrowUpCircleLine } from 'react-icons/ri';

const Library = () => {
  const columns = {
    supp: 'Supplier',
    catalogue: 'Catalogue Code',
    name: 'Name',
    type: 'Type',
    desc: 'Description',
    update: 'Updated',
    created: 'Created'
  };

  const data = [
    {
      supp: 'Sample Supplier',
      catalogue: 'BUS0',
      name: 'Buildxact UK S',
      type: 'Item Catalogue',
      desc: 'Buildxact UK S',
      update: 'Jan 8, 2024',
      created: 'Jan 2, 2022'
    }
  ];

  const Buttons = (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button style={{ backgroundColor: '#589adb', color: 'white' }}>
        <RiArrowUpCircleLine />
      </Button>
      <Button style={{ backgroundColor: 'white', color: 'black' }}>
        <FaArrowAltCircleUp />
      </Button>
      <Button style={{ backgroundColor: 'lightgrey', color: 'gray' }}>
        <FaArrowAltCircleDown />
      </Button>
      <Button style={{ backgroundColor: '#e76868', color: 'white' }}>
        <FaTrashAlt />
      </Button>
    </ButtonGroup>
  );

  return (
    <React.Fragment>
      <Row>
        <ContentData columns={columns} data={data} buttonGroup={Buttons} />
      </Row>
    </React.Fragment>
  );
};
export default Library;

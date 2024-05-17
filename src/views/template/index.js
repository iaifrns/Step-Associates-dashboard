import React from 'react';
import { Row } from 'react-bootstrap';
import { ContentData } from '../../components/Card/Content';
import { Button, ButtonGroup } from '@mui/material';
import { IoMdAdd } from 'react-icons/io';
import { RiPushpin2Fill } from 'react-icons/ri';

const TemplateList = () => {
  const columns = {
    raf: 'Raf#',
    desc: 'Description',
    build: 'Building Type',
    create: 'Created By',
    job: 'Job',
    client: 'Client',
    date: 'Date',
    total: 'Quote Total',
    update: 'Updated'
  };

  const data = [
    {
      raf: '',
      desc: 'Blank Template',
      build: 'Blank Template',
      create: '',
      job: '',
      client: 'Template',
      date: 'Dec 22, 2023',
      total: '$0.00',
      update: ''
    },
    {
      raf: 'kitchen',
      desc: 'Kitchen and Bathroom',
      build: 'kitchen',
      create: '',
      job: '',
      client: 'Template',
      date: 'Dec 2, 2023',
      total: '$0.00',
      update: ''
    },
    {
      raf: 'landsca',
      desc: 'Landsca Template',
      build: 'Landscaping',
      create: '',
      job: '',
      client: 'Template',
      date: 'Dec 3, 2023',
      total: '$0.00',
      update: ''
    },
    {
      raf: 'Duplex',
      desc: 'Extension Template',
      build: 'extension',
      create: '',
      job: '',
      client: 'Template',
      date: 'Dec 8, 2023',
      total: '$0.00',
      update: ''
    },
    {
      raf: 'Default',
      desc: 'Single story house',
      build: 'Single story',
      create: '',
      job: '',
      client: 'Template',
      date: 'Dec 2, 2023',
      total: '$0.00',
      update: 'jul 14 2023'
    }
  ];

  const Buttons = (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button style={{ backgroundColor: 'white', color: 'black' }}>
        <RiPushpin2Fill />
      </Button>
      <Button style={{ backgroundColor: 'green', color: 'white' }}>
        <IoMdAdd />
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
export default TemplateList;

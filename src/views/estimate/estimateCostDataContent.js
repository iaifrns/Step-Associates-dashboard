import React, { useState, useEffect } from 'react';
import { Container, Dropdown, Form } from 'react-bootstrap';
import { FaCog, FaEdit, FaPrint, FaEnvelope, FaFlag, FaCopy, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import FeedBackModal from '../../components/modal/feedbackModal';
import { EstimateDataContainer } from '../../components/estimate cost datacontainer';

const Header = ({ handleMultipleSelect, onClick }) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'}>
      <div style={{ display: 'flex', gap: 24 }}>
        <h6>Costings</h6>
        <Form.Check type="checkbox" label="Select All" className="mr-3" onChange={handleMultipleSelect} />
        <Dropdown>
          <Dropdown.Toggle variant="success">Add</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Add New Category</Dropdown.Item>
            <Dropdown.Item>Add Categories from Templates</Dropdown.Item>
            <Dropdown.Item>Import Items from Excel</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Box onClick={onClick}>
          <span style={{ color: 'lightgreen', cursor: 'pointer' }}>Leave Feedback</span>
        </Box>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="secondary">
            <FaCog />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <FaEdit className="mr-2" />
              Update Linked Items
            </Dropdown.Item>
            <Dropdown.Item>
              <FaPrint className="mr-2" />
              Print Categories
            </Dropdown.Item>
            <Dropdown.Item>
              <FaEnvelope className="mr-2" />
              Email Categories
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Box>
  );
};

const DataItem = ({ count, isChecked, handleChecked, data, onClick }) => {
  return (
    <Box onClick={onClick} className="mb-3 p-2 border " style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        {count}
        <Form.Check type="checkbox" className="mr-3" checked={isChecked} onChange={(event) => handleChecked(event, data.id)} />
        <FaFlag size={30} style={{ backgroundColor: 'orange', borderRadius: '40%', padding: '5px 10px' }} />
        <h6>{data.name}</h6>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        {data.cost}
        <FaCopy />
        <FaTrash color="red" />
      </div>
    </Box>
  );
};

const CustomContainer = ({ setEllementChecked }) => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      id: 1,
      name: 'Preliminaries',
      checked: false,
      cost: '$0.00'
    },
    {
      id: 2,
      name: 'Hire Items',
      checked: false,
      cost: '$0.00'
    },
    {
      id: 3,
      name: 'Temporary Services',
      checked: false,
      cost: '$0.00'
    },
    {
      id: 4,
      name: 'Surveyors',
      checked: false,
      cost: '$0.00'
    },
    {
      id: 5,
      name: 'Site Preparation',
      checked: false,
      cost: '$0.00'
    }
  ];

  const [dataSet, setDataSet] = useState(data);

  const handleSingleSelect = (event, id) => {
    const newDataSet = dataSet.map((items) => {
      return {
        id: items.id,
        name: items.name,
        checked: id == items.id ? event.target.checked : items.checked,
        cost: items.cost
      };
    });

    console.log(newDataSet);
    console.log(event.target.checked);

    setDataSet(newDataSet);
  };

  const handleMultipleSelect = (event) => {
    const newDataSet = dataSet.map((items) => {
      return {
        id: items.id,
        name: items.name,
        checked: event.target.checked,
        cost: items.cost
      };
    });

    setDataSet(newDataSet);
  };

  useEffect(() => {
    let count = 0;
    dataSet.map((items) => {
      if (items.checked == true) {
        count++;
      }
    });
    if (count != 0) {
      setEllementChecked(true);
    } else {
      setEllementChecked(false);
    }
  }, [dataSet]);

  const [drop, setDrop] = useState('');

  const handleDropDown = (id) => {
    setDrop(drop == id ? '' : id);
  };

  return (
    <Container style={{ overflow: 'auto', border: '1px solid lightgray', padding: '16px', borderRadius: '8px' }}>
      <Header handleMultipleSelect={handleMultipleSelect} onClick={() => setOpen(true)} />
      {dataSet.map((item, index) => (
        <>
          <DataItem
            key={index}
            count={index}
            data={item}
            isChecked={item.checked}
            handleChecked={handleSingleSelect}
            onClick={()=>handleDropDown(item.id)}
          />
          {drop == item.id && <EstimateDataContainer title={item.name} />}
        </>
      ))}
      <FeedBackModal open={open} setOpen={setOpen} />
    </Container>
  );
};

export default CustomContainer;

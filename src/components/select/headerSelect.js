import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderSelect = ({title, status}) => {
  const options = [
    { value: title, status: status },
    { value: 'Set status to', status: 'Draft' },
    { value: 'Set status to', status: 'In Progress' }
  ];

  const getStatusStyle = (status) => {
    const colors = {
      'Not Send': '#af6817',
      Draft: 'rgba(0,0,0,0.3)',
      'In Progress': 'lightblue'
    };
    return {
      backgroundColor: colors[status] || 'gray',
      borderRadius: '12px',
      padding: '2px 8px',
      fontSize: '12px',
      color: 'white'
    };
  };

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container" >
      <Dropdown onSelect={(key) => handleSelect(options[key])}>
        <Dropdown.Toggle
          variant="light"
          id="dropdown-basic"
          style={{
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '300px'
          }}
        >
          <h5>{selectedOption.value}</h5>

          <span style={getStatusStyle(selectedOption.status)}>{selectedOption.status}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((option, index) => (
            <Dropdown.Item
              key={index}
              eventKey={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              {option.value}
              <span style={getStatusStyle(option.status)}>{option.status}</span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default HeaderSelect;

import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import { FiCopy } from 'react-icons/fi'; 

const data = [
  {
    Description: "Item 1",
    Type: "Type 1",
    Qty: 10,
    UOM: "Ea",
    "Unit Cost": 15.99,
    "Total (Ex)": 159.90,
    Markup: "",
    GST: 10.00,
    "Quote Total": 169.90
  },
  {
    Description: "Item 2",
    Type: "Type 2",
    Qty: 5,
    UOM: "West",
    "Unit Cost": 25.50,
    "Total (Ex)": 127.50,
    Markup: "",
    GST: 5.00,
    "Quote Total": 132.50
  },
  // Add more data as needed
];

const MyTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.entries(item).map(([key, value], i) => (
              <td key={i}>
                {typeof value === "number" && (key.includes("Cost") || key.includes("Total")) ?
                  `$${value.toFixed(2)}`
                  :
                  value
                }
              </td>
            ))}
            <td>
              <Button variant="light" size="sm" className="border-dark">
                P
              </Button>
              <Button variant="light" size="sm" className="border-dark">
                N
              </Button>
              <Button variant="light" size="sm" className="border-dark">
                S
              </Button>
              <Button variant="light" size="sm" className="border-dark">
                T
              </Button>
              <Button variant="light" size="sm" className="border-dark">
                <FiCopy />
              </Button>
              <Button variant="danger" size="sm" className="border-dark">
                <BsTrash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MyTable;

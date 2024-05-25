import React from 'react';
import { Card, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const CustomCollapse = ({ title, isDone, dropdownMessage = "", accordionKey, setAccordionKey, keyValue }) => {

  const color = isDone ? "green" : "black";
  const message = isDone ? "Complite" : dropdownMessage
  const border = isDone ? '1px solid green' : 'none';

  return (
    <Card className="mt-2" style={{border : border}}>
      <Card.Header>
        <Card.Title as="h5" style={{ display: 'flex', justifyContent: 'space-between', cursor:'pointer', color: color }} onClick={() => setAccordionKey(accordionKey !== keyValue ? keyValue : 0)}>
          <Link
            to="#"
            aria-controls="accordion1"
            aria-expanded={accordionKey === keyValue}
          >
            {title}
          </Link>
          <div style={{display: 'flex', gap: 4, alignItems: 'center'}}>
            <span style={{fontSize: 14}}>{message}</span>
            <div>{accordionKey == keyValue ? <FaAngleDown /> : <FaAngleUp />}</div>
          </div>
        </Card.Title>
      </Card.Header>
      <Collapse in={accordionKey === keyValue}>
        <div id="accordion1">
          <Card.Body>
            <Card.Text>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
              bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
              anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
              raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
            </Card.Text>
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export { CustomCollapse };

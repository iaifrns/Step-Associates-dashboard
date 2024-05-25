import React from 'react';
import { Card, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FirstCollapseContainer, SecondCollapseContainer } from './collapseContainer';
import { useMediaQuery, useTheme } from '@mui/material';

const CustomCollapse = ({
  title,
  isDone,
  dropdownMessage = '',
  accordionKey,
  setAccordionKey,
  keyValue,
  collapseData,
  isSecondContainer = false
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const color = isDone ? 'green' : 'black';
  const message = isDone ? 'Complite' : dropdownMessage;
  const border = isDone ? '1px solid green' : 'none';

  return (
    <Card className="mt-2" style={{ border: border }}>
      <Card.Header>
        <Card.Title
          as="h5"
          style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', color: color }}
          onClick={() => setAccordionKey(accordionKey !== keyValue ? keyValue : 0)}
        >
          <Link to="#" aria-controls="accordion1" aria-expanded={accordionKey === keyValue}>
            {title}
          </Link>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {!isSmallScreen && <span style={{ fontSize: 14 }}>{message}</span>}

            <div>{accordionKey == keyValue ? <FaAngleDown /> : <FaAngleUp />}</div>
          </div>
        </Card.Title>
      </Card.Header>
      <Collapse in={accordionKey === keyValue}>
        <div id="accordion1">
          {collapseData.map((data, index) => (
            <>
              {isSecondContainer ? (
                <SecondCollapseContainer isSmallScreen={isSmallScreen} collapseData={data} key={index} />
              ) : (
                <FirstCollapseContainer isSmallScreen={isSmallScreen} collapseData={data} key={index} />
              )}
            </>
          ))}
        </div>
      </Collapse>
    </Card>
  );
};

export { CustomCollapse };

import React from 'react';
import { Row } from 'react-bootstrap';

import {EnhancedTable} from '../../../components/table/table';

const Estimates = () => {
  return (
    <React.Fragment>
      <Row>
        <EnhancedTable/>
      </Row>
    </React.Fragment>
  );
};

export default Estimates;

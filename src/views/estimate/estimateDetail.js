import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { EstimateHeader } from '../../components/estimate header';
import { ClientDetail, Document, EstimateVersion, FormGrid, FormWorkLocation, LeadDetail, Notes } from '../../components/form/formGrid';
import { ConfigContext } from '../../contexts/ConfigContext';
import { DataContext } from '../../contexts/DataContext';
const EstimateDetail = () => {
  const { isSmallScreen } = useContext(ConfigContext);
  const { selectedEstimate } = useContext(DataContext);
  return (
    <React.Fragment>
      <Row>
        <EstimateHeader active={'Estimate Details'} estimate={selectedEstimate} />
        <div style={{ display: isSmallScreen ? 'block' : 'flex', gap: 8 }}>
          <FormGrid estimate={selectedEstimate} />
          <FormWorkLocation />
        </div>
        <ClientDetail estimate={selectedEstimate} />
        <div style={{ display: isSmallScreen ? 'block' : 'flex', gap: 8 }}>
          <LeadDetail />
          <Notes />
        </div>

        <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
          <Document />
          <EstimateVersion />
        </div>
      </Row>
      <div style={{ fontWeight: 'bold', padding: '8px' }}>
        {' '}
        <span
          style={{
            backgroundColor: 'lightskyblue',
            padding: '2px',
            paddingLeft: '10px',
            paddingRight: '10px',
            borderRadius: '100%',
            color: 'white'
          }}
        >
          i
        </span>{' '}
        Manage Estimate
      </div>
    </React.Fragment>
  );
};

export default EstimateDetail;

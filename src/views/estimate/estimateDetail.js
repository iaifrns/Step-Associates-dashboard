import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { EstimateHeader } from '../../components/estimate header';
import { ClientDetail, Document, EstimateVersion, FormGrid, FormWorkLocation, LeadDetail, Notes } from '../../components/form/formGrid';
import { ConfigContext } from '../../contexts/ConfigContext';
const EstimateDetail = () => {
  const { isSmallScreen } = useContext(ConfigContext);
  return (
    <React.Fragment>
      <Row>
        <EstimateHeader active={'Estimate Details'} />
        <div style={{ display: isSmallScreen ? 'block' : 'flex', gap: 8 }}>
          <FormGrid />
          <FormWorkLocation />
        </div>
        <ClientDetail/>
        <div style={{ display: isSmallScreen ? 'block' : 'flex', gap: 8 }}>
          <LeadDetail />
          <Notes />
        </div>
        
        <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
          <Document />
          <EstimateVersion/>
        </div>
      </Row>
    </React.Fragment>
  );
};

export default EstimateDetail;

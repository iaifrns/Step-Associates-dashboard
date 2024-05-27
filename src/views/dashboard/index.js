import React, { useContext, useState } from 'react';
import { Row } from 'react-bootstrap';
import { CustomCollapse } from '../../components/collapse';
import { exploreTakeoffsData, setUpData, startManagingData } from '../../data/collapseContainerData';
import { Reminders } from '../../components/dashbordDisplay/reminders';
import { RecentITems } from '../../components/dashbordDisplay/recentITems';
import { Schedule } from '../../components/dashbordDisplay/schedule';
import BasicModal from '../../components/modal/dashboardModal';
import { ConfigContext } from '../../contexts/ConfigContext';

const DashDefault = () => {
  const [accordionKey, setAccordionKey] = useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const {isSmallScreen} = useContext(ConfigContext)

  return (
    <React.Fragment>
      <Row>
        <h3 style={{ fontWeight: 'bold' }}>Welcom to Step Association Ltd</h3>
        <CustomCollapse
          title={'Explore Takeoffs and Estimating'}
          isDone={true}
          accordionKey={accordionKey}
          setAccordionKey={setAccordionKey}
          keyValue={1}
          collapseData={exploreTakeoffsData}
          isSecondContainer={true}
        />
        <CustomCollapse
          title={'Start managing your job'}
          isDone={false}
          dropdownMessage="About 9 mins"
          accordionKey={accordionKey}
          setAccordionKey={setAccordionKey}
          keyValue={2}
          collapseData={startManagingData}
        />
        <CustomCollapse
          title={'Set up your accounting integration'}
          isDone={false}
          dropdownMessage="About 12 mins"
          accordionKey={accordionKey}
          setAccordionKey={setAccordionKey}
          keyValue={3}
          collapseData={setUpData}
        />
        <div
          style={{
            display: isSmallScreen ? 'block' : 'flex',
            gap: 4
          }}
        >
          <Reminders handleOpen={handleOpen} />
          <RecentITems />
        </div>
        <Schedule />
        <BasicModal open={open} setOpen={setOpen} />
      </Row>
    </React.Fragment>
  );
};

export default DashDefault;

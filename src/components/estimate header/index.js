import { Button, Card } from 'react-bootstrap';
import HeaderSelect from '../select/headerSelect';
import { FaArrowLeft } from 'react-icons/fa';

const ContentHeader = ({ title, desc }) => {
  return (
    <div>
      <p>{title}</p>
      <h6>{desc}</h6>
    </div>
  );
};

const Divider = () => {
  return <div style={{ height: '30px', width: '1px', backgroundColor: 'lightgray' }}></div>;
};

const MenuContent = ({ text, isActive }) => {
  const color = isActive ? 'green' : 'black';
  const borderBottom = isActive ? '3px solid green' : 'none';
  return (
    <div style={{ padding: '16px', cursor: 'pointer', color: color, borderBottom: borderBottom }}>
      <h6>{text}</h6>
    </div>
  );
};

const EstimateHeader = ({ active }) => {
  return (
    <>
      <Card>
        <div
          style={{
            display: 'flex',
            gap: 4,
            alignItems: 'center'
          }}
        >
          <FaArrowLeft style={{ marginRight: '8px' }} />
          <HeaderSelect />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid lightgray',
            borderBottom: '1px solid lightgray',
            padding: '16px', overflow: 'auto'
          }}
        >
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <ContentHeader title={'Client'} desc={'Unassigned 1'} />
            <Divider />
            <ContentHeader title={'Lead'} desc={'Unassigned'} />
            <Divider />
            <ContentHeader title={'Ref No'} desc={'Q1003'} />
          </div>

          <ContentHeader title={'Quote Total'} desc={'$0.00'} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 16, overflow:'auto' }}>
            <MenuContent text={'Estimate Details'} isActive={active == 'Estimate Details'} />
            <MenuContent text={'Plans & Takeoffs'} isActive={active == 'Plans & Takeoffs'} />
            <MenuContent text={'Estimate Costings'} isActive={active == 'Estimate Costings'} />
            <MenuContent text={'Request for Quotes'} isActive={active == 'Request for Quotes'} />
            <MenuContent text={'Specifications'} isActive={active == 'Specifications'} />
          </div>
          <Button style={{ margin: '8px' }}>Prepare Quote</Button>
        </div>
      </Card>
    </>
  );
};

export { EstimateHeader };

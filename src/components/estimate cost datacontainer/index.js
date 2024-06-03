import { Button } from 'react-bootstrap';
import { FaPencilAlt, FaPlus } from 'react-icons/fa';
import MyTable from './table';

const EstimateDataContainer = ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: '8px'
      }}
    >
      <div
        style={{
          display: 'flex'
        }}
      >
        <p style={{ padding: '8px', border: '1px solid lightgreen', color: 'lightgreen' }}>Complite</p>
        <p style={{ padding: '8px', border: '1px solid red', color: 'mediumvioletred' }}>Not Complited</p>
        <p style={{ padding: '8px', border: '1px solid gray', color: 'gray' }}>Not Required</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }}
        >
          <h4>{title}</h4>
          <p style={{ color: 'blue' }}>Add internal notes</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }}
        >
          <h4>
            Total (EX) <span style={{ fontWeight: 'bold' }}>$0.00</span>
          </h4>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <h5>Quoto Total</h5>
            <span
              style={{ backgroundColor: 'blue', color: 'white', fontWeight: 'bold', padding: '8px', borderRadius: '8px', fontSize: '12px' }}
            >
              $0.00
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Button variant="success">
              <FaPlus />
            </Button>
            <Button>
              <FaPencilAlt />
            </Button>
          </div>
        </div>
      </div>
      <MyTable/>
    </div>
  );
};

export { EstimateDataContainer };

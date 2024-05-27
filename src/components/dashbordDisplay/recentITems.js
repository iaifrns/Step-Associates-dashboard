import { Card } from 'react-bootstrap';
import { useState } from 'react';

const RecentITems = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleOnMouseEnter = () => {
    setMouseEnter(!mouseEnter);
  };
  const color = mouseEnter ? 'brown' : 'gray';
  return (
    <Card
      style={{
        flex: 1,
        boxShadow: 4,
        borderRadius: '8px',
        border: '1px solid lightgray'
      }}
    >
      <div
        style={{
          padding: '16px',
          backgroundColor: 'white'
        }}
      >
        <h5 style={{ fontWeight: 'bold' }}>RECENT ITEMS</h5>
      </div>
      <div
        style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          height: '300px',
          backgroundColor: 'rgba(0,0,0,0.05)'
        }}
      >
        <p
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseEnter}
          style={{ textDecoration: 'underline', cursor: 'pointer', color: color }}
        >
          #Q1003-Untitled Estimate
        </p>
      </div>
    </Card>
  );
};

export { RecentITems };

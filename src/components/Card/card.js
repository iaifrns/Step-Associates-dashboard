import { useState } from 'react';

const CustomCard = ({ icon, title, body }) => {
  const [isHover, setIsHover] = useState(false);

  const customStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    width: '250px',
    cursor: 'pointer',
    backgroundColor: isHover ? 'rgba(0,0,0,0.1)' : 'white'
  };

  const handleMouseOn = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div style={customStyle} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseOn}>
      <div style={{ marginBottom: '10px' }}>{icon}</div>
      <h5 style={{ fontWeight: 'bold' }}>{title}</h5>
      <p style={{ color: 'gray' }}>{body}</p>
    </div>
  );
};

export { CustomCard };

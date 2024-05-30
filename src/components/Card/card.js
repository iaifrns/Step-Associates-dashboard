import { useState } from 'react';

const CustomCard = ({ icon, title, body, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const customStyle = {
    display: 'flex',
    padding: '16px',
    width: '100%',
    cursor: 'pointer',
    backgroundColor: isHover ? 'rgba(0,0,0,0.1)' : 'white',
    borderRadius: '4px',
    border: '1px solid lightgray',
    justifyContent: 'space-between'
  };

  const handleMouseOn = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  return (
    <div
      style={customStyle}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseOn}
      onClick={() => {
        onClick();
      }}
      onKeyDown={handleKeyDown}
      onTouchStart={() => onClick()}
      role="button"
      tabIndex={'0'}
    >
      <div>
        <h5 style={{ fontWeight: 'bold' }}>{title}</h5>
        <p style={{ color: 'gray' }}>{body}</p>
      </div>
      <div style={{ marginBottom: '10px', color:'rgba(0,0,0,0.3)' }}>{icon}</div>
    </div>
  );
};

export { CustomCard };

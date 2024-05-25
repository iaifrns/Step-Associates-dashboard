import { Button } from '@mui/material';

const FirstCollapseContainer = ({ isSmallScreen, collapseData }) => {
  return (
    <div
      style={{
        width: '100%',
        padding: '16px',
        marginRight: '8px',
        marginTop: '8px',
        marginBottom: '8px',
        backgroundColor: 'rgba(0,0,0,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '8px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 8
        }}
      >
        <h4 style={{ fontWeight: 'bold' }}>{collapseData.title}</h4>
        <p style={{ color: 'black' }}>{collapseData.desc}</p>
        <div style={{ display: 'flex', gap: 8 }}>
          {collapseData.buttons.map((text) => (
            <Button key={text} variant="contained">
              {text}
            </Button>
          ))}
        </div>
      </div>

      {!isSmallScreen && (
        <div>
          <img src={collapseData.image} alt={collapseData.image} />
        </div>
      )}
    </div>
  );
};

const SecondCollapseContainer = ({ isSmallScreen, collapseData }) => {
  return (
    <div
      style={{
        width: '100%',
        padding: '16px',
        marginRight: '8px',
        marginTop: '8px',
        marginBottom: '8px',
        backgroundColor: 'rgba(0,0,0,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '8px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 8
        }}
      >
        <h4 style={{ fontWeight: 'bold' }}>{collapseData.title}</h4>
        <ul style={{ color: 'black' }}>{collapseData.descs.map((desc, index) => (
            <li key={index}>{desc}</li>
        ))}</ul>
        <div style={{ display: 'flex', gap: 8, alignItems:'center' }}>
          <Button variant="contained">
            {collapseData.button1}
          </Button>
          <span style={{fontWeight:'bold', color:'black'}}>or</span>
          <Button variant="outlined">
            {collapseData.button2}
          </Button>
        </div>
      </div>

      {!isSmallScreen && (
        <div>
          <img src={collapseData.image} alt={collapseData.image} />
        </div>
      )}
    </div>
  );
};

export { FirstCollapseContainer, SecondCollapseContainer };

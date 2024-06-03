import { Box } from "@mui/material";

const VerticalText = ({ text }) => {
  return <p style={{ writingMode: 'vertical-lr', margin: '8px', fontWeight: 'bold', cursor:'pointer' }}>{text}</p>;
};

const VerticalTextClickable = ({ text, active, onClick }) => {
  return (
    <Box onClick={onClick}>
        <p
      style={{
        padding: '8px',
        margin: '4px',
        text: active ? 'green' : 'black',
        backgroundColor: active ? 'rgba(0,255,0,0.4)' : 'rgba(0,0,0,0)',
        cursor: 'pointer',
        fontWeight: 'bold',
        writingMode: 'vertical-lr'
      }}
    >
      {text}
    </p>
    </Box>
  );
};

export { VerticalText, VerticalTextClickable };

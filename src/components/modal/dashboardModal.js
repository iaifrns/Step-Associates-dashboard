import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomForm from '../form/customForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  bordRaduis:'16px'
};

export default function BasicModal({open, setOpen}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div style={{ backgroundColor: 'white', padding: '16px' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              REMINDER DETAILS
            </Typography>
          </div>
          <div style={{backgroundColor:'lightgray', display:'flex', flexDirection:'column', gap:4, padding:'16px'}}>
            <CustomForm handleClose={handleClose}/>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

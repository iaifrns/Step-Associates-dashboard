import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from 'react-bootstrap';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  bgcolor: 'lightgray',
  boxShadow: 24,
  bordRaduis: '16px'
};

export default function FeedBackModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div style={{ backgroundColor: 'white', padding: '16px' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              How can we improve this ?
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '16px' }}>
            <textarea style={{ height: '200px' }} placeholder="Tell us how we can make this feature better for you ..." />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="success">Submit</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

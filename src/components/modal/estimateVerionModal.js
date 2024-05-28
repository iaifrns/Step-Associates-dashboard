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

export default function EstimateVersioningModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div style={{ backgroundColor: 'white', padding: '16px' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ESTIMATE VERSIONING
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
            <h6>Purpose of version</h6>
            <p>Add a description to help your team identify this version</p>
            <textarea />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Button variant="outline-dark" onClick={handleClose}>Cancel</Button>
            <Button variant="success">Save</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

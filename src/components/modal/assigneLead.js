import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from 'react-bootstrap';
import SelectLeadModal from './selectLead';

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

export default function AssignedLeadModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleCloseModal = () => {
    setOpen(true);
    setOpenModal(false);
  }

  const handleOpenModal = () => {
    setOpen(false);
    setOpenModal(true);
  }

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div style={{ backgroundColor: 'white', padding: '16px' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              SELECT A LEAD TO LINK
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px', gap:6 }}>
            <h6 style={{color:'gray'}}>UNASSIGNED 1 HAS NO LEADS. CREATE A NEW LEAD</h6>
            <div style={{display:'flex', justifyContent:'end'}}><Button variant='dark' onClick={handleOpenModal}>Add Lead</Button></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Button variant="outline-dark" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success">Link</Button>
          </div>
        </Box>
      </Modal>
      <SelectLeadModal open={openModal} closeModal={handleCloseModal} />
    </div>
  );
}

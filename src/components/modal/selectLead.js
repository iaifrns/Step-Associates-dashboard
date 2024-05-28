import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SimpleForm from '../form/simpleForm';

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

export default function SelectLeadModal({ open, closeModal }) {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <div>
      <Modal open={open} onClose={closeModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div style={{ backgroundColor: 'white', padding: '16px' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              SELECT A LEAD TO LINK
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
            <h6>Type of Client</h6>
            <Form.Check type="radio" label="Individual/Family" name="radioGroup" value="option1" />
            <Form.Check type="radio" label="Business" name="radioGroup" value="option1" />
            <p>Family name</p>
            <input placeholder="Unassigned 1" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px', border: '1px solid gray' }}>
            <h6>Primary Contact Person</h6>
            {showForm ? (
              <SimpleForm cancel={()=>setShowForm(false)} />
            ) : (
              <>
                <Button variant="outline-dark" onClick={()=> setShowForm(true)}>Add Contact Person</Button>
                <p>SHOWING ALL CONTACTS ASSIGNED TO THIS CLIENT (0)</p>
              </>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Button variant="outline-dark" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="success">Save & Link</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

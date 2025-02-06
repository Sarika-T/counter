import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const {open, handleStay, handleLeave} = props;
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleStay}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Unsaved Changes
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You have unsaved changes. Are you sure you want to leave?
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="primary" onClick={handleLeave}>
              Leave
            </Button>
            <Button variant="contained" color="secondary" onClick={handleStay}>
              Stay
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

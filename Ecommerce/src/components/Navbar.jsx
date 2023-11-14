import React from 'react' 

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

function Navbar() {

  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <>
      <div className='flex flex-row px-8 py-8'>
      <h1 className='text-3xl text-bold ml-4' >Ecommerce</h1>
      <button className='ml-auto bg-blue-500 text-white rounded px-2' onClick={handleClick}>Added 0 items</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            All Products
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <hr />
          <h1 className='mt-2'>Total: $100</h1>
        </Box>
      </Modal>
    </div>
    </>
  )
}

export default Navbar

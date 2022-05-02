import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';


export default function BasicButtons() {
  return (
    <>
      <Button color='secondary' variant="contained">KAYDET</Button>
      <Button color='success' variant="contained">KAYDET</Button>
        <br /><br /><br />
          
      <Button size='large' color='success' variant="contained">KAYDET</Button>
      <Button size='medium' color='success' variant="contained">KAYDET</Button>
      <Button size='small' color='success' variant="contained">KAYDET</Button>
      
          <br /><br /><br />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
          </Button>
        <br /><br />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
          </Button>
          <br /><br />
      <Button variant="contained" endIcon={<SaveIcon />}>
        Send
      </Button>
          
      
    </>
  );
}

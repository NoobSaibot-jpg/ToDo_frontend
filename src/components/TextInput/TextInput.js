import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Box } from '@mui/material';

export default function TextInput(props) {
  return (
    <Box style={{marginTop:'1em', display:'flex', justifyContent:'center', marginBottom:'2em'}}>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          onChange={props.handleChange}
        />
        <Button variant="outlined" color="success" onClick={props.click}>Add todo</Button>
    </Box>
  )
}

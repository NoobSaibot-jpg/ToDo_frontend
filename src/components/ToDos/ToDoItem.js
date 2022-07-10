import { Box, Button, Switch } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


export default function ToDoItem(props) {

    const deleteClick = (id)=>{
        axios.delete('https://noobsaibot-todo.herokuapp.com/api/del', {id: id})
        .then(console.log(id))
      }
    
    return (
      <Box style={{display:'flex', flexDiraction:'row', alignContent:'center', alignItems:'center', widht:'100%', justifyContent:'space-evenly'}}>
          <Switch
            checked={props.checked}
            onChange={props.handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
        <h1>{props.title}</h1>
        <Button
         variant="text" 
         color='error'
         onClick={()=>deleteClick(props.delId)}>
             <DeleteIcon/>
        </Button>
      </Box>
    );
}

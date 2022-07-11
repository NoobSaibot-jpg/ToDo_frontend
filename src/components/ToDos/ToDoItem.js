import { Box, Button, Switch } from '@mui/material'
import React, {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import './todoStyle.scss'


export default function ToDoItem(props) {

  const [checked, setChecked] = useState(props.checked)
  

    const deleteClick = ()=>{
        axios.delete('https://noobsaibot-todo.herokuapp.com/api/del', {id: props.delId})
        .then(console.log(props.delId))
      }

      const complitedClick =()=>{
        setChecked(!checked)
        axios.put('https://noobsaibot-todo.herokuapp.com/api/put', {id: props.delId, complited: !checked})
        .then(console.log(props.delId))
      }
    
    return (
      <Box className='todo'>
          <Switch
            checked={checked}
            onChange={complitedClick}
            inputProps={{ 'aria-label': 'controlled' }}
        />
        <h1 className={checked?"todo_title":null}>{props.title}</h1>
        <Button
         variant="text" 
         color='error'
         onClick={deleteClick}>
             <DeleteIcon/>
        </Button>
      </Box>
    );
}

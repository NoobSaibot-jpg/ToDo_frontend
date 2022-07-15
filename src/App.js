import {useState, useEffect} from 'react'
import axios from 'axios'
import TextInput from './components/TextInput/TextInput'
import ToDoItem from './components/ToDos/ToDoItem'
import { Container } from '@mui/system'

function App() {

  const [ToDoS, setToDoS] = useState([])
  const [newTodo, setnewTodo] = useState('')
  const [loading, setLoading] = useState(true)


  const handleChange = (e)=>{
    setnewTodo(e.target.value)
  }
  const click = ()=>{
    axios.post('https://noobsaibot-todo.herokuapp.com/api/post',{title: newTodo})
    .then(setLoading(true))
  }

  const deleteClick = (id)=>{
    axios.post('https://noobsaibot-todo.herokuapp.com/api/del', {id: id})
    .then(setLoading(true))
  }

  useEffect(() => {
    axios.get('https://noobsaibot-todo.herokuapp.com/api/get')
    .then(res=>setToDoS(res.data))
    .then(setLoading(false))
  }, [loading])
  

  return (
    <div className="App">
      <Container>
        <TextInput handleChange={handleChange} click={click} style={{margin: '0 auto'}}/>
        {loading?<h1>Loading...</h1>:
        ToDoS.map(i=><ToDoItem
         title={i.title} 
         checked={i.complited} 
         key={i._id} 
         deleteClick={()=>deleteClick(i._id)}/>)}
      </Container>
    </div>
  );
}

export default App;

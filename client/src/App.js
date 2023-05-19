import { useState, useEffect } from 'react'
import { ItemForm } from './components/ItemForm'
import { TodoList } from './components/TodoList'

const API_BASE = "http://localhost:3001"

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    GetTodos()
  }, [])

  const addTodo = async () => {
    console.log(newTodo)
    const data = await fetch(API_BASE + "/todo/new", {
      method: "POST",
      headers: {
            "Content-Type": "application/json"
      },
      body: JSON.stringify({text: newTodo})
    }).then(res => res.json())

    setTodos([...todos, data])
    setNewTodo("")
  }

  const deleteTodo = async id => {
    return
  }

  const GetTodos = () => {
    fetch(API_BASE + "/todos")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Error: ", err))
  }

  const toggleTodo = async id => {
    const data = fetch(API_BASE + "/todo/complete/" + id)
      .then(res => res.json())

    setTodos(todos => todos.map(todo => {
      if (todo._id === data._id) {
        todo.complete = data.complete
      }
      return todo
    }))
  }

  return ( 
    <>
    <div className="App flex flex-col items-center gap-6">
      <ItemForm onSubmit={addTodo}/>
      <h4 className='text-5xl'>Your Tasks</h4>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
    </>
  )
}

export default App

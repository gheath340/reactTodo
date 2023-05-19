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

  const addTodo = async newText => {
    const data = await fetch(API_BASE + "/todo/new", {
      method: "POST",
      headers: {
            "Content-Type": "application/json"
      },
      body: JSON.stringify({text: newText})
    }).then(res => res.json())

    setTodos([...todos, data])
    setNewTodo("")
  }

  const deleteTodo = async id => {
    const data = await fetch(API_BASE + "/todo/delete/" + id, {
      method: "DELETE"})
      .then(res => res.json())

    setTodos(todos => todos.filter(todo => todo._id !== data._id))
  }

  const GetTodos = () => {
    fetch(API_BASE + "/todos")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Error: ", err))
  }

  const toggleTodo = async id => {
    const data = await fetch(API_BASE + "/todo/complete/" + id)
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
      <h1 className='text-6xl'>To Do</h1>
      <ItemForm onSubmit={addTodo}/>
      <h4 className='text-4xl'>Your Tasks</h4>
      <div className='bg-white w-1/2 border md:w-1/3 lg:w-1/4'></div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
    </>
  )
}

export default App

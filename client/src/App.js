import { useState, useEffect } from 'react'
import { ItemForm } from './components/ItemForm'

const API_BASE = "http://localhost:3001"

function App() {
  const [todos, setTodos] = useState([])
  const [popupActive, setPopupActive] = useState(false)
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    GetTodos()
  }, [])

  const GetTodos = () => {
    fetch(API_BASE + "/todos")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Error: ", err))
  }

  const completeTodo = async id => {
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
    <ItemForm />
    <div className="App flex flex-col items-center gap-6">
      <h4 className='text-5xl'>Your Tasks</h4>
      <div className="flex flex-col gap-3 text-xl">
        {todos.map(todo => (
          //instead just do if checkbox is checked call complete todo
          <div className={"todo" + (todo.complete ? "-is-complete" : "")} key={todo._id} onClick={() => completeTodo(todo._id)}>
          <div className="checkBox">x</div>

          <div className="text">{ todo.text }</div>

          <div className="delete-todo">Delete</div>

        </div>
        ))}   
      </div>

    </div>
    </>
  )
}

export default App

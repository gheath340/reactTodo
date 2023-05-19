import { TodoItem } from "./ToDoItem"

export function TodoList ({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                   <TodoItem {...todo} key={todo._id}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}/>
                )
            })}
        </ul>
    )
}
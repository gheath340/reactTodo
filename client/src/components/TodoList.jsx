import { TodoItem } from "./ToDoItem"

export function TodoList ({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="flex flex-col gap-3 md:w-1/6 items-center">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                   <TodoItem id={todo._id} complete={todo.complete} text={todo.text} key={todo._id}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}/>
                )
            })}
        </ul>
    )
}
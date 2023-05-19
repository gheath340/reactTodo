export function TodoItem({ complete, id, text, toggleTodo, deleteTodo }) {
    return (
        <li className="flex gap-3">
            <input
                    type="checkbox"
                    checked={complete}
                    onChange={e => toggleTodo(id)}
                />
            <label>{text}</label>
            <button onClick={() => deleteTodo(id)} className="border rounded-md hover:bg-white hover:text-sky-950 hover:duration-200 px-2">
            Delete
            </button>
        </li>
    )
}
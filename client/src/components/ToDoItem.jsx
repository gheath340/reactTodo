export function TodoItem({ complete, id, text, toggleTodo, deleteTodo }) {
    return (
        <li className="flex gap-3">
            <label>
                <input
                    type="checkbox"
                    checked={complete}
                    onChange={e => toggleTodo(id)}
                />
                {text}
            </label>
            <button onClick={() => deleteTodo(id)} className="border">
            Delete
            </button>
        </li>
    )
}
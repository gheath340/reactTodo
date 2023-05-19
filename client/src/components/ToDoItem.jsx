export function TodoItem({ completed, id, text, toggleTodo, deleteTodo }) {
    return (
        <li className="flex gap-3">
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {text}
            </label>
            <button onClick={() => deleteTodo(id)} className="border">
            Delete
            </button>
        </li>
    )
}
export function TodoItem({ complete, id, text, toggleTodo, deleteTodo }) {
    return (
        <li className="flex justify-evenly gap-3 bg-sky-900 w-full py-1 px-4 rounded-xl">
            <input id="toggle" type="checkbox" checked={complete} onChange={e => toggleTodo(id)} className="accent-sky-950 hover:accent-white"/>
            <label htmlFor="toggle" className="flex cursor-pointer select-none items-center">{text}</label>
            <button onClick={() => deleteTodo(id)} className="border rounded-md hover:bg-white hover:text-sky-950 hover:duration-200 px-2">
            Delete
            </button>
        </li>
    )
}
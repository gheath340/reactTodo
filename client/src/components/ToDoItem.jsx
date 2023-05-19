export function TodoItem({ complete, id, text, toggleTodo, deleteTodo }) {
    return (
        <li className="flex justify-evenly gap-3 bg-sky-900 w-full py-1 px-4 rounded-xl">
            <label htmlFor="toggle" className="flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input id="toggle" type="checkbox" checked={complete} onChange={e => toggleTodo(id)} className="sr-only"/>
                    <div className="h-5 w-14 rounded-full bg-[#E5E7EB] shadow-inner"></div>
                    <div className="dot shadow-switch-1 absolute left-0 -top-1 h-7 w-7 rounded-full bg-white transition"></div>
                </div>
            {text}</label>
            <button onClick={() => deleteTodo(id)} className="border rounded-md hover:bg-white hover:text-sky-950 hover:duration-200 px-2">
            Delete
            </button>
        </li>
    )
}
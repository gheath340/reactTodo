import { useState } from "react"

export function ItemForm({ onSubmit }) {
    const [newTodo, setNewTodo] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(newTodo === "") return

        onSubmit(newTodo)
        
        setNewTodo("")
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    return (
        <div className="flex flex-col items-center gap-3">
                <p className="text-xl">New Item</p>
                <input
                    placeholder="Item"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    type="text"
                    id="item"
                    className="text-sky-950 outline-sky-950 rounded-sm"
                    onKeyDown={handleEnterKey}
                />
            <button className="border w-1/2 rounded-md hover:bg-white hover:text-sky-950 hover:duration-200" onClick={handleSubmit}>Add</button>
        </div>
    )
}
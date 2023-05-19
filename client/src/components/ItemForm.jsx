import { useState } from "react"

export function ItemForm({ onSubmit }) {
    const [newTodo, setNewTodo] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(newTodo === "") return

        onSubmit(newTodo)
        
        setNewTodo("")
    }
    return (
        <div className="">
            <div className="">
                <label htmlFor="item">New Item</label>
                <input
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    type="text"
                    id="item"
                    className="text-black"
                />
            </div>
            <button className="" onClick={handleSubmit}>Add</button>
        </div>
    )
}
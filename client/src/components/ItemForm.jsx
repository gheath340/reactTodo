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
        <form onSubmit={handleSubmit} className="">
            <div className="">
                <label htmlFor="item">New Item</label>
                <input 
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>
            <button className="">Add</button>
        </form>
    )
}
import { useState } from "react"

export function ItemForm() {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        // setTodos(currentTodos => {
        //     return [...currentTodos, 
        //     {id: crypto.randomUUID(), title: newItem, completed: false}]
        // })
        
        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit} className="">
            <div className="">
                <label htmlFor="item">New Item</label>
                <input 
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>
            <button className="">Add</button>
        </form>
    )
}
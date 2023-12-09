import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
const Additem = ({ newItem, setNewItems, handleSubmit }) => {
    const use = useRef()
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                ref={use}
                id='addItem'
                type='text'
                placeholder='Add Item'
                requiredf
                value={newItem}
                onChange={(e) => setNewItems(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => use.current.focus()}
            > <FaPlus /></button>

        </form>
    )
}

export default Additem

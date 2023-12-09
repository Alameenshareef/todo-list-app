import React from 'react'
import Items_list from './items_list'
const Content3 = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {(items.length) ? (
                <Items_list
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : <h1>the list is emphty</h1>}
        </main>
    )
}

export default Content3

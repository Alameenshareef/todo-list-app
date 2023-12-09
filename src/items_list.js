import React from 'react'
import Lineitem from './Lineitem'

const items_list = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.map((item) => (

        <Lineitem
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </>
  )

}

export default items_list

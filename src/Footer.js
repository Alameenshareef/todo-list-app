import React from 'react'

const Footer = ({ lists }) => {

  return (
    <footer>{lists} List{lists === 1 ? "item" : "items"}</footer>
  )
}

export default Footer

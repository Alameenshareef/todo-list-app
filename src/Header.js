import React from 'react'

const Header = ({ title }) => {

  return (
    <div>
      <header>
        <h1> {title}</h1>
      </header>
    </div>
  )


}
Header.defaultProps = {
  title: "to do list of lists"
}
export default Header

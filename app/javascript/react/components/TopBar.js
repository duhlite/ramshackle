import React from 'react'
import { Link } from 'react-router-dom'

// Child components
import Dropdown from './Dropdown'

// Component to display the Topbar of the website
export const TopBar = (props) => {
  const handleDropdownChange = (event) => {
    if ((event.target.textContent !== 'Menu') || (props.dropdownVisible === "visible")) {
      props.setDropdownVisible("hidden")
    } else {
      props.setDropdownVisible("visible")
    }
  }

  return (
    <div id="topbar" onClick={handleDropdownChange}>
      <Link className="logo" to="/">RS Farm</Link>
      <p id="menu">Menu</p>
      <Dropdown 
        visible={props.dropdownVisible}
        handleChange={handleDropdownChange}
      />
    </div>
  )
}

export default TopBar
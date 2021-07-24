import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Child components
import Dropdown from './Dropdown'

// Component to display the Topbar of the website
export const TopBar = (props) => {
  const [dropdownVisible, setDropdownVisible] = useState("hidden")

  const handleDropdownChange = () => {
    if (dropdownVisible === "visible") {
      setDropdownVisible("hidden")
    } else {
      setDropdownVisible("visible")
    }
  }

  return (
    <div id="topbar">
      <Link className="logo" to="/">RS Farm</Link>
      <p id="menu" onClick={handleDropdownChange}>Menu</p>
      <Dropdown 
        visible={dropdownVisible}
        handleChange={handleDropdownChange}
      />
    </div>
  )
}

export default TopBar
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Dropdown from './Dropdown'

export const Header = (props) => {
  const [dropdownVisible, setDropdownVisible] = useState("hidden")

  const handleDropdownChange = () => {
    if (dropdownVisible === "visible") {
      setDropdownVisible("hidden")
    } else {
      setDropdownVisible("visible")
    }
  }

  return (
    <div id="header">
      <Link className="logo" to="/">RS Farm</Link>
      <p id="menu" onClick={handleDropdownChange}>Menu</p>
      <Dropdown 
        visible={dropdownVisible}
        handleChange={handleDropdownChange}
      />
    </div>
  )
}

export default Header
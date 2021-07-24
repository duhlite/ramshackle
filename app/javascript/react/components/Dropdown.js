import React from 'react'
import { Link } from 'react-router-dom'

// This component displays the dropdown menu
// className used to determine visibility from props passed from TopBar.js
// handleChange function passed from TopBar.js makes the menu disappear once a link is clicked
export const Dropdown = (props) => {
  return (
    <div id="dropdown" className={props.visible}  onClick={props.handleChange}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/news">Farm News</Link></li>
      </ul>
    </div>
  )
}

export default Dropdown
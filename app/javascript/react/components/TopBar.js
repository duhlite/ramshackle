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

  const handleLogOut = (event) => {
    event.preventDefault()
    fetch("/users/sign_out", {
      credentials: 'same-origin',
      method: "DELETE",
      body: JSON.stringify({}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(() => {
      props.setUser(null)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  let userLinks = (
    <div className="user-links">
      <Link className="log-in" to="/log_in">Log In</Link>
      <Link className="sign-up" to="/sign_up">Create Account</Link>
    </div>
  )
  if (props.user !== null) {
    userLinks = (
      <div className="user-links">
        <p>Welcome, {props.user.firstName}</p>
        <p className="log-out" onClick={handleLogOut}>Log Out</p>
      </div>
    )
  }

  return (
    <div id="topbar" onClick={handleDropdownChange}>
      <Link className="logo" to="/">RS Farm</Link>
      <p id="menu">Menu</p>
      <Dropdown 
        visible={props.dropdownVisible}
        handleChange={handleDropdownChange}
        admin={props.user?.admin}
      />
      {userLinks}
    </div>
  )
}

export default TopBar
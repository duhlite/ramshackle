import React from 'react'
import { Link } from 'react-router-dom'
import UserIcon from 'images/user-icon.svg'

// Child components
import Dropdown from './Dropdown'

// Component to display the Topbar of the website
export const TopBar = (props) => {
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
    <div className="user-dropdown">
      <Link className="log-in" to="/log_in">Log In</Link><br/>
      <Link className="sign-up" to="/sign_up">Create Account</Link>
    </div>
  )
  if (props.user !== null) {
    userLinks = (
      <div className="user-dropdown">
        <p className="log-out" onClick={handleLogOut}>Log Out</p>
      </div>
    )
  }

  return (
    <div id="topbar">
      <Link className="logo" to="/">RS Farm</Link>
      <p id="menu">Menu</p>
      <Dropdown 
        admin={props.user?.admin}
      />
      <div className="icon-div">
        <img src={UserIcon} alt="User Actions" className="user-icon"></img>
        {userLinks}
      </div>
    </div>
  )
}

export default TopBar
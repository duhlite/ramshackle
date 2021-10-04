import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

// Component to display the Log In Page
export const LogIn = (props) => {
  const [userInfo, setUserInfo] = useState({user: {email: "", password: ""}})
  const [errors, setErrors] = useState(null)
  const [redirect, setRedirect] = useState(false)

  const handleChange = event => {
    const field = event.currentTarget.name
    setUserInfo({
      user: {
        ...userInfo.user,
        [field]: event.currentTarget.value
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (validForSubmission()) {
      fetch("/users/sign_in", {
        credentials: 'same-origin',
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          setErrors("incorrect email or password")
        }
      })
      .then(response => response.json())
      .then(body => {
        if (body.user) {
          props.setUser(body.user)
          setRedirect(true)
        } else {
          setErrors(body.errors)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  // Currently rely on Rails validations on the back end - Can add validations here if desired
  const validForSubmission = () => {
    return true
  }

  if (redirect) {
    return <Redirect to={'/'} />
  }

  return (
    <div id="log-in">
      <h1 className="title">Log In</h1>
      <div className="content">
        <form id="log-in-form" className="user-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Email<span className="error">{errors}</span>
              <input type="text" name="email" value={userInfo.email} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <label>Password<span className="error">{errors}</span>
              <input type="password" name="password" value={userInfo.password} onChange={handleChange} />
            </label>
          </div>
          <button className="button" type="submit" name="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default LogIn
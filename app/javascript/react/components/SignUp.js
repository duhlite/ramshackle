import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

// Component to display the Sign Up Page
export const SignUp = (props) => {
  const [userInfo, setUserInfo] = useState({user: {first_name: "", last_name: "", email: "", password: "", password_confirmation: ""}})
  const [redirect, setRedirect] = useState(false)
  const [errors, setErrors] = useState(null)

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
      fetch("/users", {
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
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw(error)
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
    <div id="sign-up">
      <h1 className="title">Create Account</h1>
      <div className="content">
        <form id="sign-up-form" className="user-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Email<span className="error">{errors?.email?.[0]}</span>
              <input type="text" name="email" value={userInfo.email} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <label>First Name<span className="error">{errors?.first_name?.[0]}</span>
              <input type="text" name="first_name" value={userInfo.first_name} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <label>Last Name<span className="error">{errors?.last_name?.[0]}</span>
              <input type="text" name="last_name" value={userInfo.last_name} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <label>Password<span className="error">{errors?.password?.[0]}</span>
              <input type="password" name="password" value={userInfo.password} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <label>Confirm Password<span className="error">{errors?.password_confirmation?.[0]}</span>
              <input type="password" name="password_confirmation" value={userInfo.password_confirmation} onChange={handleChange} />
            </label>
          </div>
          <button className="button" type="submit" name="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
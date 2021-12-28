import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

// Component to display the Instagram feed for the farm
export const OrderForm = (props) => {
  const [formInfo, setFormInfo] = useState({address: {line_one: "", line_two: "", city: "", state: "", zip: ""}})
  const [redirect, setRedirect] = useState(false)
  const [errors, setErrors] = useState(null)
  const [promoInfo, setPromoInfo] = useState(null)

  const stateNames = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

  const stateOptions = stateNames.map((state) => {
    return (
      <option key={state}>{state}</option>
    )
  })

  useEffect(() => {
    fetch('/promotions')
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
      setPromoInfo(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const handleChange = event => {
    const field = event.currentTarget.name
    setFormInfo({
      address: {
        ...formInfo.address,
        [field]: event.currentTarget.value
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (validForSubmission()) {
      fetch("/addresses", {
        credentials: 'same-origin',
        method: "POST",
        body: JSON.stringify(formInfo),
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
        if (body.success) {
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

  let guestFields = (
    <div className="user-fields">
      <div className="form-row">
        <label>Email<span className="error">{errors?.email?.[0]}</span>
          <input type="text" name="email" value={formInfo.email} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>First Name<span className="error">{errors?.first_name?.[0]}</span>
          <input type="text" name="first_name" value={formInfo.first_name} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>Last Name<span className="error">{errors?.last_name?.[0]}</span>
          <input type="text" name="last_name" value={formInfo.last_name} onChange={handleChange} />
        </label>
      </div>
    </div>
  )

  if (props.user !== null) {
    guestFields = ""
  }

  if (redirect) {
    return <Redirect to={'/order_confirmation'} />
  }

  return (
    <div id="order-form">
      <h1 className="title">{promoInfo?.name}</h1>
      <div className="content">
        <p>{promoInfo?.description}</p>
        <form id="order-form" className="user-form" onSubmit={handleSubmit}>
          {guestFields}
          <div className="form-row">
            <label>Address Line 1<span className="error">{errors?.line_one?.[0]}</span>
              <input type="text" name="line_one" value={formInfo.line_one} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <label>Address Line 2<span className="error">{errors?.line_two?.[0]}</span>
              <input type="text" name="line_two" value={formInfo.line_two} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <label>City<span className="error">{errors?.city?.[0]}</span>
              <input className="city-input" type="text" name="city" value={formInfo.city} onChange={handleChange} />
            </label>
          </div>
          <div className="form-row">
            <div className="form-box state-box">
              <label>State<span className="error">{errors?.state?.[0]}</span>
                <select className="state-input" name="state" value={formInfo.state} onChange={handleChange} >
                  <option></option>
                  {stateOptions}
                </select>
              </label>
            </div>
            <div className="form-box zip-box">
              <label>Zip<span className="error">{errors?.zip?.[0]}</span>
                <input className="zip-input" type="text" name="zip" value={formInfo.zip} onChange={handleChange} />
              </label>
            </div>
          </div>
          <button className="button" type="submit" name="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default OrderForm
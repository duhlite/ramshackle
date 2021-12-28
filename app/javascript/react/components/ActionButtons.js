import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const ActionButtons = () => {
  const [promoInfo, setPromoInfo] = useState(null)

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
  
  let callToAction = ""

  if(promoInfo !== null) {
    if(promoInfo.url.startsWith("/") ) {
      callToAction = <Link className="button call-to-action" to={promoInfo.url}>{promoInfo.name}</Link>
    } else {
      callToAction = <a className="button call-to-action" href={promoInfo.url}>{promoInfo.name}</a>
    }
  }

  return (
    <div className="action-buttons">
      <Link className="button" to="/about">About Us</Link>
      <a className="button" href="https://www.instagram.com/ramshackle_farm/">What's New</a>
      <div className="call-to-action">
        {callToAction}
      </div>
    </div>
  )
}

export default ActionButtons
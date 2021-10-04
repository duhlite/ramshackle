import React from 'react'
import { Link } from 'react-router-dom'

export const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <Link className="button" to="/about">About Us</Link>
      <a className="button" href="https://www.instagram.com/ramshackle_farm/">What's New</a>
      <div className="call-to-action">
        <Link className="button call-to-action" to="/order">Winter Lettuce CSA - Preorder Here</Link>
      </div>
    </div>
  )
}

export default ActionButtons
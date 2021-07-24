import React from 'react'
import { Link } from 'react-router-dom'

export const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <Link className="button" to="/about">About Us</Link>
      <Link className="button" to="/news">What's New</Link>
    </div>
  )
}

export default ActionButtons
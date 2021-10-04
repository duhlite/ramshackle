import React from 'react'
import { Link } from 'react-router-dom'

// Component to display the Instagram feed for the farm
export const OrderConfirmation = (props) => {
  return (
    <div id="order-confirmation">
      <h1 className="title">Thank You For Your Order</h1>
      <div className="actions">
        <Link className="button" to="/">Home</Link>
      </div>
    </div>
  )
}

export default OrderConfirmation
import React from 'react'

// Imported React Components
import ActionButtons from './ActionButtons'

// Component to display the homepage for the farm
export const HomePage = (props) => {
  return (
    <div  id="homepage">
      <h2 className="sub-title">Welcome to</h2>
      <h1 className="title">Ramshackle Farm</h1>
      <ActionButtons/>
    </div>
  )
}
export default HomePage
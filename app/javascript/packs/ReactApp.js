import React from 'react'
import ReactDOM from 'react-dom'
import App from '../react/components/App'

// Grabs the div with the id app and renders the top level React component
document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')
  ReactDOM.render(<App />, reactElement)
})
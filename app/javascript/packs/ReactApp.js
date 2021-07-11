import React from 'react'
import ReactDOM from 'react-dom'
import App from '../react/components/App'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')
  ReactDOM.render(<App />, reactElement)
})
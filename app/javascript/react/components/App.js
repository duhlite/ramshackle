import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Imported React Componants
import TopBar from './TopBar'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import FarmFeed from './FarmFeed'

// Main App, displays topbar regardless of the route, then changes the displayed component
export const App = (props) => {
  return (
    <BrowserRouter>
      <TopBar/>
      <div id="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/news" component={FarmFeed} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

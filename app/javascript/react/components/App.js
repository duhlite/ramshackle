import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Imported React Componants
import Header from './Header'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import FarmFeed from './FarmFeed'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/news" component={FarmFeed} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

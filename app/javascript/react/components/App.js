import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Imported React Componants
import TopBar from './TopBar'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import FarmFeed from './FarmFeed'
import BottomBar from './BottomBar'

// Main App, displays topbar regardless of the route, then changes the displayed component
export const App = (props) => {
  const [dropdownVisible, setDropdownVisible] = useState("hidden")

  const handleClick = () => {
    setDropdownVisible("hidden")
  }

  return (
    <BrowserRouter>
      <TopBar
        dropdownVisible={dropdownVisible}
        setDropdownVisible={setDropdownVisible}
      />
      <div id="main" onClick={handleClick}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/news" component={FarmFeed} />
        </Switch>
      </div>
      <div onClick={handleClick}>
        <BottomBar/>
      </div>
    </BrowserRouter>
  )
}

export default App

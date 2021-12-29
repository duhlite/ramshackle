import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Imported React Componants
import TopBar from './TopBar'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import FarmFeed from './FarmFeed'
import BottomBar from './BottomBar'
import SignUp from './SignUp'
import LogIn from './LogIn'
import OrderForm from './OrderForm'
import OrderConfirmation from './OrderConfirmation'

// Main App, displays topbar regardless of the route, then changes the displayed component
export const App = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('users')
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
      setUser(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    <BrowserRouter>
      <TopBar
        user={user}
        setUser={setUser}
      />
      <div id="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/news" component={FarmFeed} />
          <Route exact path="/order" render={(props) => (
            <OrderForm {...props} user={user} />
          )} />
          <Route exact path="/sign_up" render={(props) => (
            <SignUp {...props} setUser={setUser} user={user} />
          )} />
          <Route exact path="/log_in" render={(props) => (
            <LogIn {...props} setUser={setUser} user={user} />
          )} />
          <Route exact path="/order_confirmation" component={OrderConfirmation} />
        </Switch>
      </div>
      <div>
        <BottomBar/>
      </div>
    </BrowserRouter>
  )
}

export default App

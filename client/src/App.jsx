import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Recipes from './components/Recipes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/recipes' component={Recipes} />
        {/* <Route exact path='/' component={Home} /> */}
      </Switch>
      <Footer />
    </div>
  )
}

export default App

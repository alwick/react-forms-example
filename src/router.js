import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage'
import MaterialMainPage from './pages/MaterialMainPage'

class MainLayout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/material' component={MaterialMainPage} />
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default MainLayout
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.svg'
import MainForm from '../../components/MainForm'
import MainFormWithValidation from '../../components/MainFormWithValidation'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      simpleResults: undefined
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to Redux Forms Demo</h1>
          <div className='App-links'>
            <Link to='/'>Home</Link>
            <Link to='/material'>Material Example</Link>
          </div>
        </header>

        <div className='Container'>
          <MainForm
            onSubmit={(results) => this.setState({simpleResults: JSON.stringify(results)})}
          />
        </div>

        <div className='Container'>
          <MainFormWithValidation
            onSubmit={(results) => this.setState({simpleResults: JSON.stringify(results)})}
          />
        </div>

        <div className='Results'>
          {this.state.simpleResults}
        </div>
      </div>
    )
  }
}

export default App

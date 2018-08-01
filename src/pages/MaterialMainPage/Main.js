import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import logo from '../MainPage/logo.svg'
import MainForm from '../../components/MaterialForm'

const styles = {
  app: {
    textAlign: 'center'
  },
  appImage: {
    animation: 'App-logo-spin infinite 20s linear',
    height: 80
  },
  appHeader: {
    backgroundColor: '#222',
    height: 190,
    padding: 20,
    color: 'white'
  },
  appTitle: {
    fontSize: 1.5 + 'em',
    fontWeight: 'bold'
  },
  appLinks: {
    float: 'left',
    fontWeight: 'bold'
  }
}

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      simpleResults: undefined
    }
  }

  render() {
    const {classes} = this.props

    return (
      <div className={classes.app}>
        <div className={classes.appHeader}>
          <img src={logo} className={classes.appImage} alt="logo"/>
          <h1 className={classes.appTitle}>Welcome to Redux Forms Demo</h1>
          <div className={classes.appLinks}>
            <Link to='/'>Home</Link>
            <Link to='/material'>Material Example</Link>
          </div>
        </div>

        <div className={classes.content}>
          < MainForm
            onSubmit = {(results) => this.setState({simpleResults: JSON.stringify(results)})}
          />
        </div>
        {this.state.simpleResults}
      </div>
    )
  }
}

export default withStyles(styles)(Main)
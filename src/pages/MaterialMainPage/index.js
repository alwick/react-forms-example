import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './Main'

const theme = createMuiTheme({
  typography: {
    title: {
      color: '#989a9c',
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        textAlign: 'left',
        paddingRight: 0,
        width: 'auto'
      }
    }
  }
})


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App

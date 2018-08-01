import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppRouter from './router'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

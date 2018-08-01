import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const sampleApp = combineReducers({
  form: formReducer
})

export default sampleApp

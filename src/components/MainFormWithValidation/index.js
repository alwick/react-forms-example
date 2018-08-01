import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import InputField from '../Form/InputField'
import {email, phoneNumber, number, minValue13, tooYoung, required, alphaNumeric} from './validation'
import './index.css'

class MainForm extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <div className='Container'>
        <h1>Main Form with Validation</h1>
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            component={InputField}
            type="text"
            label="First Name"
            validate={required}
            warn={alphaNumeric}
          />
          <Field
            name="lastName"
            component={InputField}
            type="text"
            label="Last Name"
            validate={required}
            warn={alphaNumeric}
          />
          <Field
            name="age"
            component={InputField}
            type="number"
            label="Age"
            validate={[required, number, minValue13]}
            warn={tooYoung}
          />
          <Field
            name="phone"
            component={InputField}
            type="number"
            label="Phone Number"
            validate={[required, phoneNumber]}
          />
          <Field
            name="email"
            component={InputField}
            type="email"
            label="Email Address"
            validate={email}
          />

          <div className='ButtonBar'>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}


MainForm = reduxForm({
  // a unique name for the form
  form: 'mainFormWithValidation'
})(MainForm)

export default MainForm
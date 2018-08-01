import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import './index.css'

class MainForm extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <div className='Container'>
        <h1>Main Form</h1>
        <form onSubmit={handleSubmit}>
          <div className='FieldContainer'>
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
            />
          </div>
          <div className='FieldContainer'>
            <label htmlFor="lastName">Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
            />
          </div>
          <div className='FieldContainer'>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              component="input"
              type="email"
            />
          </div>

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
  form: 'mainForm'
})(MainForm)

export default MainForm
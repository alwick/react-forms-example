import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import InputField from './fields/InputField'
import {email, phoneNumber, number, minValue13, tooYoung, required, alphaNumeric} from './validation'

const styles = {
  container: {
    width: '30%',
    marginLeft: 5
  },
  buttonBar: {
    display: 'inline-block',
    width: '100%',
    paddingTop: 10
  }
}

class MainForm extends Component {
  render() {
    const { handleSubmit, classes } = this.props

    return (
      <div className={classes.container}>
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

          <div className={classes.buttonBar}>
            <Button type="submit">Submit</Button>
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

export default withStyles(styles)(MainForm)
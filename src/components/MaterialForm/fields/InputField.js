import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

const styles = theme => ({
  helperText: {
    marginTop:8
  },
  input: {
    borderColor: theme.typography.title.color,
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 10
  },
  inputError: {
    borderColor: theme.palette.error.main + ' !important'
  }
})

const FormTextField = (props) => {
  const { classes, name, input, label, meta: { touched, error }, multiline, ...other } = props

  let hasError = error !== undefined && touched && error.length > 0

  return (
    <FormControl
      fullWidth
      margin="dense"
      error={hasError}
    >
      {label &&
      <InputLabel
        shrink
        focused={false}
        {...other}
      >
        {label}
      </InputLabel>
      }
      <Input
        multiline={multiline}
        name={name}
        value={input.value}
        onChange={input.onChange}
        disableUnderline
        classes={{
          input: classnames(classes.input, {
            [classes.inputError]: hasError
          })
        }}
        {...other}
      />
      {touched && error &&
      <FormHelperText className={classes.helperText}>
        {error}
      </FormHelperText>
      }
    </FormControl>
  )
}

export default withStyles(styles)(FormTextField)

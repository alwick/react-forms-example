import React from 'react'

const InputField = ({
                       input,
                       label,
                       type,
                       meta: { touched, error, warning }
                     }) => (
  <div className='FieldContainer'>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
  </div>
)

export default InputField
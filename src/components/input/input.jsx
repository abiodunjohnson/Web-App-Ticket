import React from 'react'

const Input = ({label, required, error, ...props}) => {
    return (
        <div className="input_container">
          <label htmlFor={props.name}>
              <div>
                  {label} {required && <span>*</span>}
              </div>
                {error && <span className="input-error">{error}</span> }
          </label>
          <input {...props}  required={required}/>
        </div>
    )
}

export default Input;

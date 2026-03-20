import React from 'react'

const InputSection = ({ label, type, placeholder, name, value, onChange, error }) => {
  return (
    <div className='input-group'>
      <label className='input-label'>{label}</label>

      <div className='right-section'>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`input-field ${error ? 'input-error' : ''}`}
          placeholder={placeholder}
        />
        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  )
}

export default InputSection
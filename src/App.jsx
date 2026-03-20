import { useState } from 'react'
import './App.css'
import InputSection from './component/InputSection'

function App() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: 'india'
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const validate = () => {
    let newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Valid email required"
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.gender) {
      newErrors.gender = "Select gender"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const registerHandler = () => {
    if (!validate()) return

    alert("Registration Successful ✅")
    console.log(formData)

    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      country: 'india'
    })
  }

  return (
    <div className="app-container">
      <div className='form-card'>
        <h1 className='form-title'>Registration form</h1>

        <InputSection
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your name"
          error={errors.fullName}
        />

        <InputSection
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          error={errors.email}
        />

        <InputSection
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={errors.password}
        />

        <InputSection
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          error={errors.confirmPassword}
        />

        {/* Gender */}
        <div className="input-group">
          <label className="input-label">Gender</label>

          <div className="right-section">
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>

            {errors.gender && <p className="error-text">{errors.gender}</p>}
          </div>
        </div>

        {/* Country */}
        <div className='input-group'>
          <label className='input-label'>Country</label>

          <div className="right-section">
            <select
              className="select-field"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>

        <div className="button-container">
          <button onClick={registerHandler}>Register</button>
        </div>

      </div>
    </div>
  )
}

export default App
import React, { useState } from 'react';
import './SignUp.css'; 
import axios from 'axios'
import Blurbb from '../assets/blurbb.jpg'

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleSaveDetailsChange = () => {
    setSaveDetails(!saveDetails);
  };

  const validateContactNumber = (number) => {
    const regex = /^\d{10}$/;
    return regex.test(number);
  };

  const handleSubmit = async (e) => {
    

    e.preventDefault();
    if (!validateContactNumber(contactNumber)) {
      setErrorMessage('Contact number must be exactly 10 digits.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/v1/userroute/register', {
        name,
        email,
        password,
        contactnumber: contactNumber
      });
      setSuccessMessage(response.data.message);
      alert('Succesfully registered')
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message || 'An error occurred');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container">
    
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" id="contactNumber" name="contactNumber" value={contactNumber} onChange={handleContactNumberChange} required />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input type="checkbox" id="saveDetails" name="saveDetails" checked={saveDetails} onChange={handleSaveDetailsChange} />
          <label htmlFor="saveDetails">Remember Me</label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;


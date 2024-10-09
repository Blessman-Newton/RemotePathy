import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/SideBar';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({ username: '', email: '', password1: '', password2: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/accounts/signup/', userInfo)
      .then(response => {
        console.log("Signup successful");
        // Handle success, maybe redirect
      })
      .catch(err => {
        setError("Something went wrong during signup.");
      });
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username</label>
          <input type="text" name="username" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" name="password1" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input type="password" name="password2" className="form-control" onChange={handleChange} />
        </div>
        {error && <div className="text-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

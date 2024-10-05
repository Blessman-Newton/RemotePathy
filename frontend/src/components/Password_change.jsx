import React, { useState } from 'react';
import axios from 'axios';

const PasswordChange = () => {
  const [password, setPassword] = useState({ old_password: '', new_password1: '', new_password2: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/accounts/password/change/', password)
      .then(response => {
        setMessage("Password changed successfully.");
      })
      .catch(err => {
        setMessage("Failed to change password.");
      });
  };

  return (
    <div className="container">
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Old Password</label>
          <input type="password" className="form-control" name="old_password" onChange={(e) => setPassword({ ...password, old_password: e.target.value })} />
        </div>
        <div className="mb-3">
          <label>New Password</label>
          <input type="password" className="form-control" name="new_password1" onChange={(e) => setPassword({ ...password, new_password1: e.target.value })} />
        </div>
        <div className="mb-3">
          <label>Confirm New Password</label>
          <input type="password" className="form-control" name="new_password2" onChange={(e) => setPassword({ ...password, new_password2: e.target.value })} />
        </div>
        {message && <div>{message}</div>}
        <button type="submit" className="btn btn-primary">Change Password</button>
      </form>
    </div>
  );
};

export default PasswordChange;

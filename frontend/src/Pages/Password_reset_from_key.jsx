import React, { useState } from 'react';
import axios from 'axios';

const PasswordResetFromKey = ({ uid, token }) => {
  const [password, setPassword] = useState({ password1: '', password2: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/accounts/password/reset/key/${uid}-${token}/`, password)
      .then(response => {
        setMessage("Password reset successfully.");
      })
      .catch(err => {
        setMessage("Failed to reset password.");
      });
  };

  return (
    <div className="container">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>New Password</label>
          <input type="password" className="form-control" name="password1" onChange={(e) => setPassword({ ...password, password1: e.target.value })} />
        </div>
        <div className="mb-3">
          <label>Confirm New Password</label>
          <input type="password" className="form-control" name="password2" onChange={(e) => setPassword({ ...password, password2: e.target.value })} />
        </div>
        {message && <div>{message}</div>}
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordResetFromKey;

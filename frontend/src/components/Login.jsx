import  { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: 'new', password: '12345678' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/accounts/login/', credentials)
      .then(response => {
        console.log("Login successful");
        // Redirect or handle success
      })
      .catch(err => {
        setError("Invalid username or password.");
      });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username</label>
          <input type="text" name="username" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} />
        </div>
        {error && <div className="text-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;

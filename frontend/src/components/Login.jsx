import { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  // Function to get the CSRF token from the cookie
  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return cookieValue;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/accounts/login/', credentials, {
      headers: {
        'X-CSRFToken': getCSRFToken(),  // Add CSRF token to headers
      },
    })
    .then((response) => {
      console.log('Login successful:', response);
      setError('');  // Clear any previous error messages
      // Handle successful login (e.g., redirect to a new page)
    })
    .catch((error) => {
      console.error('Login failed:', error);
      setError('Invalid username or password');
    });
  };

  useEffect(() => {
    // Ensure the CSRF token is set by making an initial GET request
    axios.get('http://localhost:8000/accounts/login/')
      .then(response => {console.log('CSRF token set');})
      .catch(error => {
        console.error('Error setting CSRF token:', error);
      });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6 offset-md-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 offset-md-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
        {error && <div className="text-danger text-center">{error}</div>}
      </form>
    </div>
  );
};

export default Login;

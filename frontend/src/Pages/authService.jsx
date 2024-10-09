// import axios from 'axios';
// import jwt_decode from 'jwt-decode';

// const API_URL = 'http://localhost:8000';

// // Login request
// const login = (username, password) => {
//   return axios
//     .post(`${API_URL}/accounts/login/`, { username, password })
//     .then(response => {
//       if (response.data.access) {
//         localStorage.setItem('user', JSON.stringify(response.data));
//       }
//       return response.data;
//     });
// };

// // Sign up request
// const signup = (username, password) => {
//   return axios.post(`${API_URL}/accounts/signup/`, { username, password });
// };

// // Logout
// const logout = () => {
//   localStorage.removeItem('user');
// };

// // Check if token is valid
// const isAuthenticated = () => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   if (user && user.access) {
//     const decoded = jwt_decode(user.access);
//     return decoded.exp > Date.now() / 1000;
//   }
//   return false;
// };

// export default {
//   login,
//   signup,
//   logout,
//   isAuthenticated,
// };

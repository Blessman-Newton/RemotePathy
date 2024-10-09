import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import JobList from './Pages/JobList';
import JobDetail from './Pages/JobDetail';
import Profile from './Pages/Profile';
import ResumeUpload from './Pages/ResumeUpload';
import LogIn from './Pages/Login';
import SignUp from './Pages/Signup';
import PasswordReset from './Pages/Password_reset';
import PasswordResetDone from './Pages/Password_reset_done';
import PasswordResetFromKey from './Pages/Password_reset_from_key';
import PasswordChange from './Pages/Password_change';
import EmailConfirm from './Pages/Email_confirm';
import Recommendations from './Pages/main_rec';


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/joblisting" element={<JobList />} />
          <Route path="/jobdetails/" element={<JobDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload-resume" element={<ResumeUpload />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/password-reset-done" element={<PasswordResetDone />} />
          <Route path="/password-reset-from-key" element={<PasswordResetFromKey />} />
          <Route path="/password-change" element={<PasswordChange />} />
          <Route path="/email-confirm" element={<EmailConfirm />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import Profile from './components/Profile';
import ResumeUpload from './components/ResumeUpload';
import LogIn from './components/Login';
import SignUp from './components/Signup';
import PasswordReset from './components/Password_reset';
import PasswordResetDone from './components/Password_reset_done';
import PasswordResetFromKey from './components/Password_reset_from_key';
import PasswordChange from './components/Password_change';
import EmailConfirm from './components/Email_confirm';
import Recommendations from './components/main_rec';


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

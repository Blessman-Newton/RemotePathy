import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import Profile from './components/Profile';
import ResumeUpload from './components/ResumeUpload';
import LogIn from './components/Login';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload-resume" element={<ResumeUpload />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

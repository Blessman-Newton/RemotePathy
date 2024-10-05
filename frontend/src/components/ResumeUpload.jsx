import { useState } from 'react';
import axios from 'axios';

const ResumeUpload = () => {
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('resume', resume);

    axios.post('http://localhost:8000/api/jobseekers/upload-resume/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        setMessage('Resume uploaded successfully');
      })
      .catch(error => {
        console.error('Error uploading resume:', error);
        setMessage('Error uploading resume');
      });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Upload Resume</h1>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6 offset-md-3">
          <label htmlFor="resume" className="form-label">Upload your resume</label>
          <input type="file" className="form-control" id="resume" onChange={handleFileChange} />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      {message && <p className="text-center mt-3">{message}</p>}
    </div>
  );
};

export default ResumeUpload;

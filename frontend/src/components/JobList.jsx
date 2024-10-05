import { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/jobs/')
      .then(response => setJobs(response.data))
      .catch(error => console.log('Error fetching jobs:', error));
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center">Job Listings</h1>
      <div className="row">
        {jobs.map(job => (
          <div className="col-md-4 mb-4" key={job.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text"><strong>Company:</strong> {job.company}</p>
                <p className="card-text"><strong>Location:</strong> {job.location}</p>
                <p className="card-text"><strong>Salary:</strong> {job.salary_range}</p>
                <a href={`/job/${job.id}`} className="btn btn-primary">More Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;

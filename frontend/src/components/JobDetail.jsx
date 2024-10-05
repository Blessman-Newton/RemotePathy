import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/jobs/${id}/`)
      .then(response => setJob(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div className="container my-5">
      {job ? (
        <div>
          <h1 className="text-center">{job.title}</h1>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{job.company}</h5>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Salary:</strong> {job.salary_range}</p>
                  <p><strong>Description:</strong> {job.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetail;

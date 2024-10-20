import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JobPostForm = () => {
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    location: "",
    salary_range: ""
  });

  const navigate = useNavigate();

  const isAuthenticated = () => {
    return !!localStorage.getItem("access_token");
  };

  const handleChange = (e) => {
    setJobDetails({
      ...jobDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isAuthenticated()) {
      try {
        const response = await axios.post("http://localhost:8000/api/recruiter/jobs/create/", jobDetails, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        alert("Job Posted Successfully");
        navigate("/recruiter/dashboard");
      } catch (error) {
        console.error("Error creating job:", error);
        alert("There was an error posting the job. Please try again.");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Create a New Job Posting</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="title">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobDetails.title}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="description">Job Description</label>
          <textarea
            id="description"
            name="description"
            value={jobDetails.description}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={jobDetails.location}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="salary_range">Salary Range</label>
          <input
            type="text"
            id="salary_range"
            name="salary_range"
            value={jobDetails.salary_range}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Post Job</button>
      </form>
    </div>
  );
};

export default JobPostForm;

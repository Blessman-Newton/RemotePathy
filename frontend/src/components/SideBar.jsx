const Sidebar = () => {
  return (
    <div className="w-64 p-4 bg-white shadow-lg rounded-l-lg">
      <ul className="space-y-4">
        <li className="font-bold text-lg">Profile</li>
        <li>Resumes</li>
        <li>Job Preferences</li>
        <li>Saved Jobs</li>
        <li>Applications</li>
        <li className="font-semibold text-blue-500">Recommendations</li>
      </ul>
    </div>
  );
};

export default Sidebar;

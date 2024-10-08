const RecommendationCard = ({ jobTitle, company, imageUrl }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mb-4 w-500">
      <div>
        <p className="text-sm text-gray-500">Remote</p>
        <h3 className="text-lg font-bold">{jobTitle}</h3>
        <p className="text-sm text-gray-500">{company}</p>
        <button className="mt-2 px-4 py-2 text-sm text-white bg-blue-500 rounded-md">View</button>
      </div>
      <img src={imageUrl} alt={jobTitle} className="w-24 h-24 rounded-lg object-cover" />
    </div>
  );
};

const Recommendations = () => {
  const recommendations = [
    { jobTitle: 'Senior Product Designer', company: 'Dribbble', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/dc312e17-da42-40de-b748-13fa7d6b2545.png' },
    { jobTitle: 'Senior Product Designer', company: 'Dribbble', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/dc312e17-da42-40de-b748-13fa7d6b2545.png' },
    { jobTitle: 'Senior Product Designer', company: 'Dribbble', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/dc312e17-da42-40de-b748-13fa7d6b2545.png' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Recommendations</h2>
      <p className="text-sm text-gray-500 mb-8">Based on your profile, job preferences, and activity</p>
      {recommendations.map((rec, index) => (
        <RecommendationCard 
          key={index}
          jobTitle={rec.jobTitle}
          company={rec.company}
          imageUrl={rec.imageUrl}
        />
      ))}
    </div>
  );
};

export default Recommendations;

import { useState } from 'react';
import Sidebar from '../components/SideBar';

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Software Engineer passionate about AI and ML. Loves building web apps and exploring new technologies.',
    location: 'San Francisco, CA',
    profileImage: 'https://via.placeholder.com/150', // Placeholder image URL
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can implement save logic (e.g., send updated data to a server)
  };

  return (
    
    <div className="min-h-screen flex justify-ceznter itefms-center bg-gray-100 w-screen">
      <Sidebar/>
      <div className="bg-[#f00afb] shaxdow-md roundedv-lg p-20 w-screen size-fvull mjax-w-lg">
        <div className="flex items-center">
          <img
            src={userData.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-200"
          />
          <div className="ml-6">
            {!isEditing ? (
              <>
                <h1 className="text-2xl font-bold">{userData.name}</h1>
                <p className="text-gray-600">{userData.email}</p>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="block w-full text-xl font-bold p-2 mb-2 border rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="block w-full text-gray-600 p-2 border rounded-md"
                />
              </>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold">About Me</h2>
          {!isEditing ? (
            <p className="text-gray-600 mt-2">{userData.bio}</p>
          ) : (
            <textarea
              name="bio"
              value={userData.bio}
              onChange={handleChange}
              className="block w-full text-gray-600 p-2 mt-2 border rounded-md"
              rows="4"
            />
          )}
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold">Location</h2>
          {!isEditing ? (
            <p className="text-gray-600 mt-2">{userData.location}</p>
          ) : (
            <input
              type="text"
              name="location"
              value={userData.location}
              onChange={handleChange}
              className="block w-full text-gray-600 p-2 mt-2 border rounded-md"
            />
          )}
        </div>

        <div className="mt-8 flex justify-end">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={handleEditToggle}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

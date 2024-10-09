import { useState } from 'react';
import Sidebar from '../components/SideBar';

function UploadBox() {
  const [fileName, setFileName] = useState(null);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileName(files[0].name);
      console.log('File uploaded:', files[0]);
    }
  };

  return (
    <div className="min-h-screen flex justixfy-center items-cxenter bg-gray-100 w-screen">
      <Sidebar />
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-wx-2xl">
        <h1 className="text-2xl font-bold mb-4">Upload your resume</h1>
        <p className="text-gray-600 mb-8">
          We ll use this to help you fill in your profile and make it easier for employers to find you.
        </p>

        <div className="border-dashed border-2 border-gray-300 p-8 rounded-lg text-center">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <p className="text-gray-500 mb-4">
              {fileName ? `File selected: ${fileName}` : 'Drag and drop your resume here'}
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Browse files
            </button>
          </label>
        </div>

        <div className="flex justify-end mt-4">
          <button className="text-gray-600">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default UploadBox;

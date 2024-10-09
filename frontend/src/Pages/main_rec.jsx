
import Sidebar from '../components/SideBar';
import Recommendations from './Recommendations';

function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row w-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Recommendations Content */}
      <div className="flex-1 w-full md:w-4/5 p-8 bg-gray-100">
        <Recommendations />
      </div>
    </div>
  );
}

export default App;

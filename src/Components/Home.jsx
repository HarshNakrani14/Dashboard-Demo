import { FaChartLine, FaUserPlus, FaBoxOpen, FaPercentage } from 'react-icons/fa';
import SalesChart from './SalesChart';

function HomePage() {
  return (
    <main className="flex-1 transition-all duration-300 bg-gray-900 overflow-auto">
      <div className="border-b-2 border-gray-500 p-4">
        <h1 className="text-2xl font-semibold text-white">Overview</h1>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
          <div className="flex items-center">
            <FaChartLine className="text-blue-400 text-2xl mr-4" />
            <div>
              <h2 className="text-white font-bold">Total Sales</h2>
              <p className="text-2xl text-white font-bold">$12,345</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
          <div className="flex items-center">
            <FaUserPlus className="text-green-400 text-2xl mr-4" />
            <div>
              <h2 className="text-white font-bold">New Users</h2>
              <p className="text-2xl text-white font-bold">1,234</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
          <div className="flex items-center">
            <FaBoxOpen className="text-orange-400 text-2xl mr-4" />
            <div>
              <h2 className="text-white font-bold">Total Products</h2>
              <p className="text-2xl text-white font-bold">567</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
          <div className="flex items-center">
            <FaPercentage className="text-red-500 text-2xl mr-4" />
            <div>
              <h2 className="text-white font-bold">Conversion Rate</h2>
              <p className="text-2xl text-white font-bold">12.5%</p>
            </div>
          </div>
        </div>
      </div>
      {/* Adjust this container for the SalesChart */}
      <div className="text-white p-4">
        <div className="w-full h-80 md:h-full"> {/* Set a specific height */}
          <SalesChart />
        </div>
      </div>
    </main>
  );
}

export default HomePage;

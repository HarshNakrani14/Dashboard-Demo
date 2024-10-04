import { FaUsers, FaUserPlus, FaUserCheck, FaUserTimes, FaEdit, FaTrashAlt } from 'react-icons/fa';


function Users() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex-1 transition-all duration-300 bg-gray-900 overflow-auto">
        <div className="border-b-2 border-gray-500 p-4">
          <h1 className="text-2xl font-semibold text-white">Users</h1>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Summary cards */}
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
            <div className="flex items-center">
              <FaUsers className="text-white text-2xl mr-4" />
              <div>
                <h2 className="text-white text-sm font-bold">Total Users</h2>
                <p className="text-2xl text-white font-bold">152,845</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
            <div className="flex items-center">
              <FaUserPlus className="text-white text-2xl mr-4" />
              <div>
                <h2 className="text-white text-sm font-bold">New Users Today</h2>
                <p className="text-2xl text-white font-bold">243</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
            <div className="flex items-center">
              <FaUserCheck className="text-white text-2xl mr-4" />
              <div>
                <h2 className="text-white text-sm font-bold">Active Users</h2>
                <p className="text-2xl text-white font-bold">98,520</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
            <div className="flex items-center">
              <FaUserTimes className="text-white text-2xl mr-4" />
              <div>
                <h2 className="text-white text-sm font-bold">Churn Rate</h2>
                <p className="text-2xl text-white font-bold">2.4%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Table */}
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-600">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Sales</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {/* Product Rows */}
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-100">Wireless Earbuds</td>
                  <td className="px-6 py-4 text-sm text-gray-100">Electronics</td>
                  <td className="px-6 py-4 text-sm text-gray-100">$59.99</td>
                  <td className="px-6 py-4 text-sm text-gray-100">143</td>
                  <td className="px-6 py-4 text-sm text-gray-100">1200</td>
                  <td className="px-6 py-4 text-sm text-gray-100">
                    <FaEdit className="inline-block mr-2 cursor-pointer text-blue-400" />
                    <FaTrashAlt className="inline-block cursor-pointer text-red-400" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-100">Leather Wallet</td>
                  <td className="px-6 py-4 text-sm text-gray-100">Accessories</td>
                  <td className="px-6 py-4 text-sm text-gray-100">$39.99</td>
                  <td className="px-6 py-4 text-sm text-gray-100">89</td>
                  <td className="px-6 py-4 text-sm text-gray-100">800</td>
                  <td className="px-6 py-4 text-sm text-gray-100">
                    <FaEdit className="inline-block mr-2 cursor-pointer text-blue-400" />
                    <FaTrashAlt className="inline-block cursor-pointer text-red-400" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-100">Smart Watch</td>
                  <td className="px-6 py-4 text-sm text-gray-100">Electronics</td>
                  <td className="px-6 py-4 text-sm text-gray-100">$199.99</td>
                  <td className="px-6 py-4 text-sm text-gray-100">56</td>
                  <td className="px-6 py-4 text-sm text-gray-100">650</td>
                  <td className="px-6 py-4 text-sm text-gray-100">
                    <FaEdit className="inline-block mr-2 cursor-pointer text-blue-400" />
                    <FaTrashAlt className="inline-block cursor-pointer text-red-400" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-100">Yoga Mat</td>
                  <td className="px-6 py-4 text-sm text-gray-100">Fitness</td>
                  <td className="px-6 py-4 text-sm text-gray-100">$29.99</td>
                  <td className="px-6 py-4 text-sm text-gray-100">210</td>
                  <td className="px-6 py-4 text-sm text-gray-100">950</td>
                  <td className="px-6 py-4 text-sm text-gray-100">
                    <FaEdit className="inline-block mr-2 cursor-pointer text-blue-400" />
                    <FaTrashAlt className="inline-block cursor-pointer text-red-400" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-100">Coffee Maker</td>
                  <td className="px-6 py-4 text-sm text-gray-100">Home</td>
                  <td className="px-6 py-4 text-sm text-gray-100">$79.99</td>
                  <td className="px-6 py-4 text-sm text-gray-100">78</td>
                  <td className="px-6 py-4 text-sm text-gray-100">720</td>
                  <td className="px-6 py-4 text-sm text-gray-100">
                    <FaEdit className="inline-block mr-2 cursor-pointer text-blue-400" />
                    <FaTrashAlt className="inline-block cursor-pointer text-red-400" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users
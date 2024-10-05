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
              <FaUsers className="text-blue-400 text-2xl mr-4 " />
              <div>
                <h2 className="text-white text-sm font-bold">Total Users</h2>
                <p className="text-2xl text-white font-bold">152,845</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
            <div className="flex items-center">
              <FaUserPlus className="text-green-300 text-2xl mr-4" />
              <div>
                <h2 className="text-white text-sm font-bold">New Users Today</h2>
                <p className="text-2xl text-white font-bold">243</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
            <div className="flex items-center">
              <FaUserCheck className="text-orange-400 text-2xl mr-4" />
              <div>
                <h2 className="text-white text-sm font-bold">Active Users</h2>
                <p className="text-2xl text-white font-bold">98,520</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
            <div className="flex items-center">
              <FaUserTimes className="text-red-400 text-2xl mr-4" />
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {/* Product Rows */}
                <tr>
                <td className="px-6 py-4 text-md text-gray-100 font-semibold flex items-center justify-start"><span className='inline-block h-8 w-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mr-2 flex items-center justify-center flex-col text-white'>T</span>Tony Stark</td>                 
                  <td className="px-6 py-4 text-sm text-gray-100">stark@industries.com</td>
                  <td className="px-6 py-4 text-sm text-gray-100"><span className='bg-blue-900 font-semibold rounded-lg px-2 text-center'>Customer</span></td>
                  <td className="px-6 py-4 text-sm text-gray-100"><span className='bg-green-800 font-semibold rounded-lg px-2 text-center'>Active</span></td>
                  <td className="px-6 py-4 text-sm text-gray-100">
                    <p className="inline-block mr-2 cursor-pointer text-blue-400">Edit</p>
                    <p className="inline-block cursor-pointer text-red-400">Delete</p>
                  </td>
                </tr>

                <tr>
                <td className="px-6 py-4 text-md text-gray-100 font-semibold flex items-center justify-start"><span className='inline-block h-8 w-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mr-2 flex items-center justify-center flex-col text-white'>J</span>Jack Sparrow</td>                 
                  <td className="px-6 py-4 text-sm text-gray-100">parley@industries.com</td>
                  <td className="px-6 py-4 text-sm text-gray-100"><span className='bg-blue-900 font-semibold rounded-lg px-2 text-center'>Customer</span></td>
                  <td className="px-6 py-4 text-sm text-gray-100"><span className='bg-green-800 font-semibold rounded-lg px-2 text-center'>Active</span></td>
                  <td className="px-6 py-4 text-sm text-gray-100">
                    <p className="inline-block mr-2 cursor-pointer text-blue-400">Edit</p>
                    <p className="inline-block cursor-pointer text-red-400">Delete</p>
                  </td>
                </tr>

                <tr>
                <td className="px-6 py-4 text-md text-gray-100 font-semibold flex items-center justify-start"><span className='inline-block h-8 w-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mr-2 flex items-center justify-center flex-col text-white'>P</span>Paul Walker</td>                 
                  <td className="px-6 py-4 text-sm text-gray-100">fast@furious.com</td>
                  <td className="px-6 py-4 text-sm text-gray-100"><span className='bg-blue-900 font-semibold rounded-lg px-2 text-center'>Customer</span></td>
                  <td className="px-6 py-4 text-sm text-gray-100"><span className='bg-red-800 font-semibold rounded-lg px-2 text-center'>Inactive</span></td>
                  <td className="px-6 py-4 text-sm text-gray-100">
                    <p className="inline-block mr-2 cursor-pointer text-blue-400">Edit</p>
                    <p className="inline-block cursor-pointer text-red-400">Delete</p>
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
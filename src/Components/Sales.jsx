import { FaDollarSign, FaShoppingCart, FaArrowUp, FaCreditCard } from 'react-icons/fa';


function Sales() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex-1 transition-all duration-300 bg-gray-900 overflow-auto">
        <div className="border-b-2 border-gray-500 p-4">
          <h1 className="text-2xl font-semibold text-white">Sales Dashboard</h1>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Summary cards */}
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
            <div className="flex items-center">
              <FaDollarSign className="text-green-500 text-2xl mr-4 " />
              <div>
                <h2 className="text-white text-sm font-bold">Total Revenue</h2>
                <p className="text-2xl text-white font-bold">$1,234,567</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
            <div className="flex items-center">
              <FaShoppingCart className="text-blue-500 text-2xl mr-4" />
              <div>
                <h2 className="text-white text-sm font-bold">Avg. Order Value</h2>
                <p className="text-2xl text-white font-bold">$78.90</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
            <div className="flex items-center">
              <FaArrowUp className="text-orange-400 text-2xl mr-4" />
              <div>
                <h2 className="text-white text-sm font-bold">Conversion Rate</h2>
                <p className="text-2xl text-white font-bold">3.45%</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 border-2 border-gray-600">
            <div className="flex items-center">
              <FaCreditCard className="text-red-400 text-2xl mr-4" />
              <div>
                <h2 className="text-white text-sm font-bold">Sales Growth</h2>
                <p className="text-2xl text-white font-bold">12.3%</p>
              </div>
            </div>
          </div>
        </div>
    </div>

  </div>
  );
}

export default Sales
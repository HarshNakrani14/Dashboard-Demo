import { FaChartBar, FaUserAlt, FaDollarSign, FaShoppingCart, FaCog, FaBox } from 'react-icons/fa';
import { HiOutlineTrendingUp } from 'react-icons/hi';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className={`fixed h-screen bg-gray-800 transition-width duration-300 ${isOpen ? 'w-52' : 'w-16'}`}>
      <div className="p-4 flex justify-start">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col items-start pl-4 h-96 gap-4">
        <NavLink to="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <FaChartBar className="text-purple-400 text-xl" />
          {isOpen && <h2 className="text-white text-sm font-bold">Overview</h2>}
        </NavLink>
        <NavLink to="/products" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <FaBox className="text-purple-400 text-xl" />
          {isOpen && <h2 className="text-white text-sm font-bold">Products</h2>}
        </NavLink>
        <NavLink to="/users" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <FaUserAlt className="text-pink-500 text-xl" />
          {isOpen && <h2 className="text-white text-sm font-bold">Users</h2>}
        </NavLink>
        <NavLink to="/sales" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <FaDollarSign className="text-green-400 text-xl" />
          {isOpen && <h2 className="text-white text-sm font-bold">Sales</h2>}
        </NavLink>
        <NavLink to="/orders" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <FaShoppingCart className="text-yellow-400 text-xl" />
          {isOpen && <h2 className="text-white text-sm font-bold">Orders</h2>}
        </NavLink>
        <NavLink to="/analytics" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <HiOutlineTrendingUp className="text-blue-400 text-xl" />
          {isOpen && <h2 className="text-white text-sm font-bold">Analytics</h2>}
        </NavLink>
        <NavLink to="/settings" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          <FaCog className="text-teal-400 text-xl" />
          {isOpen && <h2 className="text-white text-sm font-bold">Settings</h2>}
        </NavLink>
      </div>  
    </div>
  );
}

export default Sidebar;

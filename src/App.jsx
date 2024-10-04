import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Products from './Components/Product';
import Users from './Components/Users';
import Sales from './Components/Sales';
import Orders from './Components/Orders';
import Analytics from './Components/Analytics';
import Settings from './Components/Settings';
import HomePage from './Components/Home';

function App() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar is open by default

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main content */}
        <div className={`flex-1 transition-all duration-300 ${isOpen ? 'ml-52' : 'ml-16'} overflow-hidden`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

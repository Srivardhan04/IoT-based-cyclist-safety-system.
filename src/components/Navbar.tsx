import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bike className="h-8 w-8" />
            <span className="font-bold text-xl">CycleSafe IoT</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-blue-200 px-3 py-2">Home</Link>
            <Link to="/login" className="hover:text-blue-200 px-3 py-2">Login</Link>
            <Link to="/signup" className="hover:text-blue-200 px-3 py-2">Sign Up</Link>
            <Link to="/helpline" className="hover:text-blue-200 px-3 py-2">Helpline</Link>
            <Link to="/reviews" className="hover:text-blue-200 px-3 py-2">Reviews</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 hover:bg-blue-700 rounded-md">Home</Link>
              <Link to="/login" className="block px-3 py-2 hover:bg-blue-700 rounded-md">Login</Link>
              <Link to="/signup" className="block px-3 py-2 hover:bg-blue-700 rounded-md">Sign Up</Link>
              <Link to="/helpline" className="block px-3 py-2 hover:bg-blue-700 rounded-md">Helpline</Link>
              <Link to="/reviews" className="block px-3 py-2 hover:bg-blue-700 rounded-md">Reviews</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">EcoHack</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/food-rescue" className="nav-link">Food Rescue</Link>
            <Link to="/calculator" className="nav-link">Carbon Calculator</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
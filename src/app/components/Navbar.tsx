import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-yellow-400 text-2xl font-bold">BannerBot</div>
        <div className="flex items-center space-x-6">
          <a href="#how-to-use" className="text-yellow-200 text-lg hover:text-yellow-400 transition duration-300">How to use?</a>
          <button className="bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

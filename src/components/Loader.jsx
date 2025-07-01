import React from 'react';
import { assets } from '../assets/assets';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          {/* Spinner */}
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          
          {/* Logo (optional) */}
          <img 
            src={assets.logo} 
            alt="Loading..." 
            className="absolute inset-2 w-16 h-16 object-contain animate-pulse"
          />
        </div>
        
        <p className="text-primary font-medium">Loading content...</p>
        
        {/* Progress bar (optional) */}
        <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden mt-4 mx-auto">
          <div className="h-full bg-primary rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
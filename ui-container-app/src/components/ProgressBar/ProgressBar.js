import React from 'react';
const ProgressBar = () => {
  return (
    <div className="flex justify-center px-2 py-4">
      <span className="flex items-center justify-center h-10 text-white rounded-md w-28 custom-blue-300">
        Loading...
      </span>
    </div>
  );
};

export default ProgressBar;

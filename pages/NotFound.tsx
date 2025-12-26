
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative">
          <div className="text-[150px] font-extrabold text-indigo-100 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-24 h-24 bg-indigo-600 rounded-2xl rotate-12 flex items-center justify-center shadow-xl">
               <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
               </svg>
             </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Page Not Found</h1>
          <p className="text-gray-500">
            We couldn't find the page you're looking for. The route <span className="text-indigo-600 font-mono bg-indigo-50 px-2 py-1 rounded">"{location.pathname}"</span> is invalid.
          </p>
        </div>

        <div className="pt-8">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Requirement: 404 page should not include the Header component
  // We determine this by seeing if the current route matches any known valid routes
  // For simplicity, we can also just let the router handle this by not using layout in the 404 route
  // but a wrapper layout is cleaner for consistency.
  
  const validRoutes = ['/', '/books', '/add-book', '/book/'];
  const isKnownRoute = validRoutes.some(route => location.pathname === route || (route !== '/' && location.pathname.startsWith(route)));

  return (
    <div className="min-h-screen flex flex-col">
      {isKnownRoute && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {isKnownRoute && (
        <footer className="bg-white border-t border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm">© 2024 Lumina Library. Crafted for book enthusiasts.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;

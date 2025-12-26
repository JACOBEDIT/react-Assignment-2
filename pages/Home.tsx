
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CATEGORIES } from '../constants';
import BookCard from '../components/BookCard';

const Home: React.FC = () => {
  const books = useSelector((state: RootState) => state.books.items);
  const popularBooks = books.slice(0, 4);

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden rounded-3xl bg-indigo-900 mx-auto max-w-7xl mt-8">
        <img 
          src="https://picsum.photos/seed/library/1200/600" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Discover Your Next <span className="text-indigo-400">Great Adventure</span>
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Welcome to Lumina Library. Access thousands of books across multiple genres, right at your fingertips.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/books" 
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-500 transition-all shadow-lg"
            >
              Browse Collection
            </Link>
            <Link 
              to="/add-book" 
              className="bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              Add a Book
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Book Categories</h2>
          <Link to="/books" className="text-indigo-600 font-medium hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat} 
              to={`/books/${cat}`}
              className="group bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-indigo-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-600 transition-colors">
                 <svg className="w-6 h-6 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                 </svg>
              </div>
              <span className="font-semibold text-gray-700">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Popular This Week</h2>
          <Link to="/books" className="text-indigo-600 font-medium hover:underline">See more popular titles</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

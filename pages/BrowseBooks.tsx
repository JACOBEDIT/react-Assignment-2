
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CATEGORIES } from '../constants';
import BookCard from '../components/BookCard';

const BrowseBooks: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const books = useSelector((state: RootState) => state.books.items);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesCategory = !category || book.category.toLowerCase() === category.toLowerCase();
      const matchesSearch = 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        book.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [books, category, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <div className="mb-8 md:flex md:items-end md:justify-between space-y-4 md:space-y-0">
        <div>
          <nav className="flex mb-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Browse</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">
            {category ? `${category} Books` : 'All Books'}
          </h1>
          <p className="text-gray-500 mt-1">Found {filteredBooks.length} titles in our collection</p>
        </div>

        <div className="w-full md:w-96">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by title or author..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Categories */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-xl border border-gray-100 sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Filter by Category</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/books"
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    !category 
                      ? 'bg-indigo-600 text-white font-semibold' 
                      : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  All Categories
                </Link>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/books/${cat}`}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      category?.toLowerCase() === cat.toLowerCase()
                        ? 'bg-indigo-600 text-white font-semibold'
                        : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                    }`}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Book Grid */}
        <main className="flex-grow">
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
              <div className="mb-4 text-gray-400">
                 <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                 </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">No books found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter.</p>
              <button 
                onClick={() => { setSearchQuery(''); }}
                className="mt-4 text-indigo-600 font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default BrowseBooks;

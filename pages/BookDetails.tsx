
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const books = useSelector((state: RootState) => state.books.items);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Book Not Found</h2>
        <p className="text-gray-500 mb-6">The book you're looking for doesn't exist or has been removed.</p>
        <Link to="/books" className="text-indigo-600 font-semibold hover:underline">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate('/books')}
        className="flex items-center text-gray-500 hover:text-indigo-600 mb-8 transition-colors group"
      >
        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Browse
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-gray-100">
          <img 
            src={book.coverImage} 
            alt={book.title} 
            className="w-full h-full object-cover shadow-2xl"
          />
        </div>
        
        <div className="md:w-2/3 p-8 lg:p-12">
          <div className="mb-6">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              {book.category}
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">{book.title}</h1>
            <p className="text-xl text-gray-500">by <span className="text-indigo-600 font-medium">{book.author}</span></p>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center bg-amber-50 px-4 py-2 rounded-xl border border-amber-100">
              <span className="text-amber-500 text-2xl mr-2">★</span>
              <span className="text-xl font-bold text-gray-900">{book.rating}</span>
              <span className="text-gray-400 ml-1">/ 5</span>
            </div>
            <div className="text-sm text-gray-400">
              Verified Rating
            </div>
          </div>

          <div className="prose prose-indigo max-w-none">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {book.description}
            </p>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-4">
             <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-md">
               Want to Read
             </button>
             <button className="border border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all">
               Write a Review
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

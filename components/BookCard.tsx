
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-indigo-600 shadow-sm">
          {book.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-1">{book.title}</h3>
          <span className="flex items-center text-amber-500 font-semibold text-sm">
            ★ {book.rating}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-4">by {book.author}</p>
        <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
          {book.description}
        </p>
        
        <Link 
          to={`/book/${book.id}`}
          className="inline-block w-full text-center bg-indigo-50 text-indigo-600 font-semibold py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;

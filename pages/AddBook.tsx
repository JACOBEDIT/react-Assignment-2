
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../store/store';
import { addBook } from '../store/booksSlice';
import { BookCategory } from '../types';
import { CATEGORIES } from '../constants';

interface FormState {
  title: string;
  author: string;
  category: string;
  description: string;
  rating: string;
  coverImage: string;
}

interface FormErrors {
  [key: string]: string;
}

const AddBook: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    coverImage: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.author.trim()) newErrors.author = 'Author name is required';
    if (!form.category) newErrors.category = 'Please select a category';
    if (!form.description.trim()) newErrors.description = 'Description is required';
    if (!form.rating || isNaN(Number(form.rating)) || Number(form.rating) < 0 || Number(form.rating) > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const newBook = {
        id: Date.now().toString(),
        title: form.title,
        author: form.author,
        category: form.category,
        description: form.description,
        rating: Number(form.rating),
        coverImage: form.coverImage || `https://picsum.photos/seed/${form.title.replace(/\s+/g, '')}/400/600`,
      };
      
      dispatch(addBook(newBook));
      navigate('/books');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Add New Book</h1>
        <p className="text-gray-500 mb-8">Contribution to the library is appreciated! Please fill out the book details below.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 ml-1">Book Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. The Midnight Library"
                className={`w-full px-4 py-3 rounded-xl border ${errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-200'} focus:outline-none focus:ring-4 transition-all`}
              />
              {errors.title && <p className="text-red-500 text-xs mt-1 ml-1">{errors.title}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 ml-1">Author Name</label>
              <input
                type="text"
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="e.g. Matt Haig"
                className={`w-full px-4 py-3 rounded-xl border ${errors.author ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-200'} focus:outline-none focus:ring-4 transition-all`}
              />
              {errors.author && <p className="text-red-500 text-xs mt-1 ml-1">{errors.author}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 ml-1">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.category ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-200'} focus:outline-none focus:ring-4 bg-white transition-all`}
              >
                <option value="">Select Category</option>
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              {errors.category && <p className="text-red-500 text-xs mt-1 ml-1">{errors.category}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 ml-1">Rating (0-5)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                placeholder="e.g. 4.5"
                className={`w-full px-4 py-3 rounded-xl border ${errors.rating ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-200'} focus:outline-none focus:ring-4 transition-all`}
              />
              {errors.rating && <p className="text-red-500 text-xs mt-1 ml-1">{errors.rating}</p>}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">Cover Image URL (Optional)</label>
            <input
              type="text"
              name="coverImage"
              value={form.coverImage}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition-all"
            />
            <p className="text-gray-400 text-xs mt-1 ml-1">Leave empty for a random placeholder image.</p>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="Provide a brief summary of the book..."
              className={`w-full px-4 py-3 rounded-xl border ${errors.description ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-200'} focus:outline-none focus:ring-4 transition-all`}
            ></textarea>
            {errors.description && <p className="text-red-500 text-xs mt-1 ml-1">{errors.description}</p>}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 text-lg"
            >
              Add Book to Library
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;

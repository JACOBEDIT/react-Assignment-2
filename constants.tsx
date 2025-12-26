
import { Book, BookCategory } from './types';

export const INITIAL_BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A classic novel of the Jazz Age, telling the story of the mysterious Jay Gatsby and his pursuit of the elusive Daisy Buchanan.',
    rating: 4.5,
    category: BookCategory.FICTION,
    coverImage: 'https://picsum.photos/seed/gatsby/400/600'
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    description: 'A masterpiece of science fiction, following Paul Atreides as his family accepts the stewardship of the desert planet Arrakis.',
    rating: 4.8,
    category: BookCategory.SCI_FI,
    coverImage: 'https://picsum.photos/seed/dune/400/600'
  },
  {
    id: '3',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'A deep dive into the dual systems that drive our thoughts: one fast and emotional, the other slow and logical.',
    rating: 4.7,
    category: BookCategory.NON_FICTION,
    coverImage: 'https://picsum.photos/seed/thinking/400/600'
  },
  {
    id: '4',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    description: 'A shocking psychological thriller about a woman’s act of violence against her husband—and the therapist obsessed with uncovering her motive.',
    rating: 4.3,
    category: BookCategory.MYSTERY,
    coverImage: 'https://picsum.photos/seed/patient/400/600'
  },
  {
    id: '5',
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    description: 'The exclusive biography of Apple co-founder Steve Jobs, based on more than forty interviews with Jobs conducted over two years.',
    rating: 4.6,
    category: BookCategory.BIOGRAPHY,
    coverImage: 'https://picsum.photos/seed/jobs/400/600'
  },
  {
    id: '6',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'Bilbo Baggins, a comfortable home-loving hobbit, is whisked away on an adventure by a wizard and a company of dwarves.',
    rating: 4.9,
    category: BookCategory.FANTASY,
    coverImage: 'https://picsum.photos/seed/hobbit/400/600'
  }
];

export const CATEGORIES = Object.values(BookCategory);

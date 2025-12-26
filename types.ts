
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  rating: number;
  category: string;
  coverImage: string;
}

export enum BookCategory {
  FICTION = 'Fiction',
  NON_FICTION = 'Non-Fiction',
  SCI_FI = 'Sci-Fi',
  MYSTERY = 'Mystery',
  FANTASY = 'Fantasy',
  BIOGRAPHY = 'Biography'
}

export interface BooksState {
  items: Book[];
}

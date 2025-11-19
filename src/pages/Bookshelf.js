import React from 'react';

const BookItem = ({ title, author, link, image, description }) => (
  <div className="mb-8">
    <div className="flex items-start mb-4">
      {image && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src={image} alt={title} className="w-32 h-auto" />
        </a>
      )}
      <div>
        <h3 className="text-xl font-semibold">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary">{title}</a>
        </h3>
        <p className="text-lg">By {author}</p>
      </div>
    </div>
    {description && <p className="text-gray-700">{description}</p>}
  </div>
);

const BookList = ({ title, books }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    {books.map((book, index) => (
      <BookItem key={index} {...book} />
    ))}
  </section>
);

const Bookshelf = () => {
  const topBooks = [
  ];

  const honorableMentions = [
  ];

  const allBooks = [
  ];

  // Group books by category
  const booksByCategory = allBooks.reduce((acc, book) => {
    if (!acc[book.category]) {
      acc[book.category] = [];
    }
    acc[book.category].push(book);
    return acc;
  }, {});

  return (
    <div className="max-w-3xl mx-auto">
      <BookList title="Top 3 Books" books={topBooks} />
      <BookList title="Honorable Mentions" books={honorableMentions} />
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">All Books (by subject)</h2>
        {Object.entries(booksByCategory).map(([category, books]) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            {books.map((book, index) => (
              <BookItem key={index} {...book} />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Bookshelf;
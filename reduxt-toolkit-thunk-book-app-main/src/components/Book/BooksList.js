import React from 'react';

const BooksList = ({ isLoading, books, isLoggedIn }) => {
  return (
    <div>
      <h2>Books List</h2>
      {isLoading
        ? 'loading...'
        : books.map((book) => (
            <>
              <ul className="list-group" key={book.id}>
                <li className="list-group-item d-flex  justify-content-between align-items-center">
                  <div>{book.title}</div>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary">
                      Read
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      disabled={!isLoggedIn}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </ul>
            </>
          ))}
    </div>
  );
};

export default BooksList;

/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/bookSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="border-b-4">
      <h3>{title}</h3>
      <p>
        By
        {author}
      </p>
      <button type="button" className="px-3 py-1 bg-red-400" onClick={() => handleRemove(id)}> Remove Book </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Book.defaultProps = {
  title: 'Book title',
  author: 'Unknown Author',
};

export default Book;

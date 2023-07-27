/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({ title, author }) => (
  <div className='border-b-4'>
    <h3>{title}</h3>
    <p>
      By
      {author}
    </p>
    <button className='px-3 py-1 bg-red-400'>Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: 'Book title',
  author: 'Unknown Author',
};

export default Book;

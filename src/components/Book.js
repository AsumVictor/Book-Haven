/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({ title, author }) => (
  <div>
    <h3>{title}</h3>
    <p>
      By
      {author}
    </p>
    <Button name="Remove" />
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
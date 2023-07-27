import React from 'react';
import Button from './Button';

const Form = () => (
  <form>
    <h3>ADD NEW BOOK</h3>
    <input type="text" placeholder="Book title" />
    <input type="text" placeholder="Author" />
    <Button name="Submit" />
  </form>
);

export default Form;

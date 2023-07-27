import React from "react";
import Book from "./Book";
import Form from "./Form";
import { useSelector } from "react-redux";

const Books = () => {
  const {books} = useSelector((state) => state.book);
 
  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} id={book.item_id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>
  );
};

export default Books;

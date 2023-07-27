import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import Form from "./Form";

const Books = () => {
  const { books } = useSelector((state) => state.book);
  console.log(books)
  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;

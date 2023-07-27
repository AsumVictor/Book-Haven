import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import Form from "./Form";

const Books = () => {
  const { books, isLoading, isError, error } = useSelector(
    (state) => state.book
  );

  if (isLoading) {
    return (
      <>
        <h1>LOADING BOOKS...</h1>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h1>Error occured! {error}</h1>
      </>
    );
  }


  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;

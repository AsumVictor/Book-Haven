import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import Book from './Book';
import Form from './Form';
import emptyAnim from '../assets/animation_json/empty.json';

const Books = () => {
  const {
    books, isLoading, isError, error,
  } = useSelector(
    (state) => state.book,
  );

  if (isLoading) {
    return (
      <div className="w-full  h-[80%] flex-col flex justify-center items-center">
        <div className="spinner" />
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <>
        <h1>
          Error occured!
          {error}
        </h1>
      </>
    );
  }

  return (
    <div className="px-3 md:px-10 w-full mt-10 flex flex-col gap-5">
      {books && books.length < 1 ? (
        <>
          <div className="w-full flex-col flex justify-center items-center">
            <Lottie animationData={emptyAnim} />
            <p className="text-xl font-semibold">Empty Bookstore</p>
          </div>
        </>
      ) : (
        books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            currentChapter={book.currentChapter}
            progress={book.progress}
          />
        ))
      )}
      <Form />
    </div>
  );
};

export default Books;

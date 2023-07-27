/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/book/bookSlice";
import ProgressBar from "./Progressbar";

const Book = ({ id, title, author, currentChapter, progress }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="w-full bg-white hover:border-_blue mt-10 border rouned-md grid 730px:grid-cols-2 gap-y-5 pb-3">
      <div className="px-2 md:px-6 pt-4 py-2 flex flex-col gap-3">
        <h3 className="font-bold text-gray-500">Category</h3>
        <h3 className="font-extrabold text-3xl text-black capitalize">
          {title}
        </h3>
        <p className="-mt-4 font-semibold text-_textBlue capitalize">
          {author}
        </p>
        <div className="w-10/12 py-2 850px:w-10/12 1059px:w-7/12 grid grid-cols-3 mt-5">
          <div className="h-[1cm] flex items-center justify-start col-span-1 border-r-2 border-gray-200">
            <button className="text-_blue text-[18px]">Comment</button>
          </div>
          <div className="h-[1cm] flex items-center justify-center col-span-1 border-r-2 border-gray-200">
            <button
              type="button"
              className="text-_blue text-[18px]"
              onClick={() => handleRemove(id)}
            >
              Remove
            </button>
          </div>
          <div className="h-[1cm] flex items-center justify-center col-span-1 border-r-2 border-gray-200">
            <button className="text-_blue text-[18px]">Edit</button>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2">
        <div className=" col-span-1 flex items-center justify-center">
          <div className="w-full h-[3.5cm] flex items-center justify-center 850px:gap-2  border-r-2 border-r-gray-300 pr-2 gap-0">
            <ProgressBar
              progress={Math.ceil(progress * 63)}
              classAddtion="max-730px:scale-[0.6]"
            />
            <h3 className="flex flex-col text-center max-730px:-ml-4">
              <span className="font-bold text-xl 850px:text-2xl 1060px:text-3xl">
                {Math.ceil(progress * 100)}%
              </span>
              <span className="text-gray-500 semi-semibold 850px:text-[16px] 1060px:text-xl">
                Completed
              </span>
            </h3>
          </div>
        </div>
        <div className=" col-span-1 flex px-2 850px:px-10 justify-center flex-col">
          <h3 className="text-[16px] 850px:text-[20px] text-gray-500">
            CURRENT CHAPTER
          </h3>
          <h3 className="text-[18px] font-semibold text-black">
            Chapter {currentChapter}
          </h3>
          <button
            type="button"
            className="bg-_blue text-white py-2 text-[16px] 850px:text-xl rounded-md mt-4"
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string.isRequired,
  progress: PropTypes.number,
  currentChapter: PropTypes.number,
};

Book.defaultProps = {
  title: "Book title",
  author: "Unknown Author",
  progress: 0,
  currentChapter: 1,
};

export default Book;

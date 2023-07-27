/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/book/bookSlice";
import ProgressBar from "./Progressbar";

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="w-full bg-white hover:border-_blue mt-10 border rouned-md grid grid-cols-2">
      <div className="px-2 md:px-6 pt-4 py-2 flex flex-col gap-3">
        <h3 className="font-bold text-gray-500">Category</h3>
        <h3 className="font-extrabold text-3xl text-black capitalize">
          {title}
        </h3>
        <p className="-mt-4 font-semibold text-_textBlue capitalize">
          {author}
        </p>
        <div className="py-2 w-7/12 grid grid-cols-3 mt-5">
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
          <div className="w-full h-[3.5cm] flex items-center justify-center gap-2  border-r-2 border-r-gray-300">
            <ProgressBar progress={31} />
            <h3 className="flex flex-col text-center">
              <span className="font-bold text-3xl">50%</span>
              <span className="text-gray-500 semi-semibold text-xl">
                Completed
              </span>
            </h3>
          </div>
          
        </div>
        <div className=" col-span-1 flex px-10 justify-center flex-col">
         <h3 className="text-[20px] text-gray-500">CURRENT CHAPTER</h3>
         <h3 className="text-[18px] font-semibold text-black">Chapter 17</h3>
         <button className="bg-_blue text-white py-2 text-xl rounded-md mt-4">UPDATE PROGRESS</button>         
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Book.defaultProps = {
  title: "Book title",
  author: "Unknown Author",
};

export default Book;

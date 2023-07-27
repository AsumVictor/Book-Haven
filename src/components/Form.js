import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addBook } from "../redux/book/bookSlice";
import { nanoid } from "nanoid";

const Form = () => {
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || author.trim() === "") {
      toast.error("All fileds must be completed");
      return null;
    }

    dispatch(
      addBook({
        item_id: nanoid(6),
        author,
        title,
      })
    );
    setAuthor("");
    setTitle("");

    return null;
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <h3>ADD NEW BOOK</h3>
      <input
        type="text"
        placeholder="Book title"
        className="border outline-none border-blue-300"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        className="border outline-none border-blue-300"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 bg-blue-700 text-white mx-4 rounded-md"
      >
        Add book
      </button>
    </form>
  );
};

export default Form;

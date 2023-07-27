import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { addBook } from "../redux/book/bookSlice";

const Form = () => {
  const dispatch = useDispatch();
  const { adding, addedSuccess } = useSelector((state) => state.book);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title.trim() === "" ||
      author.trim() === "" ||
      selectedCategory.trim() === ""
    ) {
      toast.error("All fileds must be completed");
      return null;
    }

    dispatch(
      addBook({
        item_id: nanoid(),
        author,
        title,
        category: selectedCategory,
      })
    );
    if (addedSuccess) {
      setAuthor("");
      setTitle("");
      setSelectedCategory("");
    }

    return null;
  };

  return (
    <form
      className="gap-2 mt-10 grid 730px:grid-cols-3 mb-[5cm]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h3 className="col-span-full font-bold text-2xl text-_blue text-center">
        ADD NEW BOOK
      </h3>
      <input
        disabled={adding}
        type="text"
        placeholder="Book title"
        className="border-2 border-_blue outline-none px-2 placeholder:font-semibold h-[1.2cm] rounded-md "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        disabled={adding}
        type="text"
        placeholder="Author"
        className="border-2 border-_blue outline-none px-2 placeholder:font-semibold h-[1.2cm] rounded-md "
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <div>
        <select
          disabled={adding}
          value={selectedCategory}
          id="bookCategory"
          className="border-2 border-_blue outline-none px-2 placeholder:font-semibold h-[1.2cm] rounded-md w-full"
          onChange={handleCategoryChange}
        >
          <option className="bg-gray-400" value="">
            Select category
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Poetry">Poetry</option>
          <option value="Graphic Novels">Graphic Novels</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Science Fiction">Others</option>
        </select>
      </div>

      <div className="col-span-full flex justify-center items-center mt-5">
        <button
          disabled={adding}
          type="submit"
          className="px-3 py-2 730px:w-8/12 w-full  bg-_blue font-semibold text-xl text-white mx-4 rounded-md disabled:bg-gray-300 flex justify-center items-center"
        >
          {adding ? <div className="spinner2"></div> : "Add book"}
        </button>
      </div>
    </form>
  );
};

export default Form;

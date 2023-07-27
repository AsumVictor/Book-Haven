import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { HiUser } from "react-icons/hi";

const Header = () => {
  return (
    <div className="w-full h-screen bg-_gray overflow-y-auto overflow-x-hidden">
      <header className="relative w-full py-2 h-[2cm] bg-white flex flex-row shadow-md gap-5 md:gap-10 items-center justify-start px-2 md:px-10">
        <Link to="/" className="text-[18px] md:text-2xl text-_blue font-bold">
          IBookHave
        </Link>
        <nav className="h-full">
          <ul className="flex font-semibold flex-row text-_lightBlack items-center list-none gap-3 h-full ">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline text-black font-bold" : ""
                }
                to="/"
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories">Categories</NavLink>
            </li>
          </ul>
        </nav>
        <div className="absolute right-[10px] h-[1.3cm] w-[1.3cm] flex items-center justify-center rounded-full border-2 text-2xl text-_blue">
          <HiUser className="account" />
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;

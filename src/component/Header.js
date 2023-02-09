import React from "react";
import { Link } from "react-router-dom";

export const Title = () => (
  <a href="/">
    <img
      alt="Logo"
      src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Food-Images-Download.jpg"
      className="h-28 p-2 pl-2"
    />
  </a>
);

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />

      <div className="nav-items">
        <ul className="flex py-10">
          <li className="m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2">
            <Link to="/about">About</Link>
          </li>
          <li className="m-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-2">cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

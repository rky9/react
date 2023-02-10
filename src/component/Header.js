import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
export const Title = () => (
  <a href="/">
    <Logo />
  </a>
);

const Header = () => {
  return (
    <div className="flex justify-between bg-white shadow-lg">
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
      <button className="bg-blue-600 p-4 text-white">Login</button>
    </div>
  );
};

export default Header;

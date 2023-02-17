import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import Logo from "./Logo";

export const Title = () => (
  <a href="/">
    <Logo />
  </a>
);

const Header = () => {
  const { user } = useContext(UserContext);

  const cartItem = useSelector((store) => store.cart.items);
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
          <li className="m-2">cart-{cartItem.length}</li>
        </ul>
      </div>
      {user.name}
      <button className="bg-blue-600 p-4 text-white">Login</button>
    </div>
  );
};

export default Header;

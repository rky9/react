import React, { useContext, useState } from "react";
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
  const { user, setUpdatedUser } = useContext(UserContext);
  const [login, setLogin] = useState(false);
  const userLoginInfo = () => {
    debugger;
    setLogin((prev) => !prev);
  };
  const cartItem = useSelector((store) => store.cart.items);
  return (
    <div className="container">
      <div className="flex justify-between bg-white items-center">
        <Title />

        <div className="nav-items">
          <ul className="flex">
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
        <div className="flex flex-col-reverse w-40">
          {!login && <p>{user.name}</p>}
          <button
            className="bg-blue-600 px-6 py-2 text-white"
            onClick={() => userLoginInfo()}
          >
            {login ? "Login" : "logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

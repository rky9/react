import React from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

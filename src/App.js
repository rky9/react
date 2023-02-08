/**
 * HMR - Hot Module Replacement
 * File watcher algorithm
 * Bundling
 * Minify
 * cleaning our code
 * dev and production build
 * super fast build algorithm
 * Image optimization
 * Caching while development
 * compatable with older version of browser
 * HTTPS on dev
 * manage port number
 * consistent Hashing Algorithm
 * Zero config bundler
 * Tree shaking - removing unwanted code
 * Transitive Dependencies
 */

// Config Driven UI
//Optional chaining "?"
//React use Reconsailation algo(diff algo) to find tree, it's find out what needs to ne update.

import React from "react";
import ReactDOM from "react-dom/client";
//Default import
import Body from "./component/Body";
//named import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Error from "./component/Error";
import Header from "./component/Header";
const AppLayout = () => {
  return (
    <div key="div">
      <Header />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

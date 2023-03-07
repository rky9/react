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

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//Default import
//named import
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Body from "./component/Body";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Slider from "./component/Slider";
import RestraurantMenu from "./component/RestraurantMenu";
import store from "./utils/store";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [updatedUser, setUpdatedUser] = useState({
    name: "Rajesh",
    email: "mail@rajeshky.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: updatedUser, setUpdatedUser }}>
        <div key="div" style={{ background: "#fefefe" }}>
          <Header />
          <Slider />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurantMenu/:id",
        element: <RestraurantMenu />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

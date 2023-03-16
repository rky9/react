//Chunking, Code Splitting, Dynamic bundling, Lazy Loading, On demand loading, Dynamic Import

import React, { useContext, useEffect, useState } from "react";
import { restaurantList, FETCH_MENU_URL1 } from "../config";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import RestrauntCard from "./RestraurantCard";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { resturantList } from "../utils/headerSliderSlice";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUpdatedUser } = useContext(UserContext);
  const dispatch = useDispatch();

  async function getRestaurants() {
    const data = await fetch(FETCH_MENU_URL1);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    dispatch(resturantList(json?.data?.cards[2]?.data?.data?.cards));
  }
  useEffect(() => {
    getRestaurants();
    return () => {};
  }, []);

  function filterData(searchText, restaurants) {
    return restaurants.filter((r) =>
      r.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <>
      <div className="p-5 bg-white my-5 text-center flex justify-center items-stretch">
        <input
          className="p-2 w-96 border-blue-900 border-2 border-r-0"
          type="search"
          value={searchText}
          placeholder="search"
          onChange={(e) => {
            setSearchText(e.target.value);
            setUpdatedUser({ name: e.target.value });
          }}
        />
        <button
          className="py-1 px-3 bg-blue-600 text-white cursor-pointer"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="border-b-2 mb-3 pb-3 container">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {allRestaurants?.length} restaurants
        </h2>
      </div>
      <div className="container">
        <div className="flex flex-wrap justify-around">
          {allRestaurants?.length === 0 ? (
            <Shimmer />
          ) : (
            filteredRestaurants?.map((restaurant) => {
              return (
                <Link
                  to={"/restaurantMenu/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <RestrauntCard {...restaurant.data} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Body;

//Chunking, Code Splitting, Dynamic bundling, Lazy Loading, On demand loading, Dynamic Import

import React, { useContext, useEffect, useState } from "react";
import { restaurantList, FETCH_MENU_URL1 } from "../config";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import RestrauntCard from "./RestraurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUpdatedUser } = useContext(UserContext);
  async function getRestaurants() {
    const data = await fetch(FETCH_MENU_URL1);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
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
      <div className="p-5 bg-white my-5 text-center">
        <input
          className="p-2 w-96 border-blue-900 border-2"
          type="search"
          value={searchText}
          placeholder="search"
          onChange={(e) => {
            setSearchText(e.target.value);
            setUpdatedUser({ name: e.target.value });
          }}
        />
        <button
          className="py-1 px-3 m-2 bg-blue-600 text-white rounded-sm"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-around">
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
    </>
  );
};

export default Body;

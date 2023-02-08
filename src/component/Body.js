//Chunking, Code Splitting, Dynamic bundling, Lazy Loading, On demand loading, Dynamic Import

import React, { useEffect, useState } from "react";
//import { restaurantList } from "../config";
import RestrauntCard from "./RestraurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
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
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          value={searchText}
          placeholder="search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-500 text-white rounded-lg"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {allRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;

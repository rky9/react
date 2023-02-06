//Chunking, Code Splitting, Dynamic bundling, Lazy Loading, On demand loading, Dynamic Import

import React, { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestraurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  function filterData(searchText, restaurants) {
    return restaurants.filter((r) => r.data.name.includes(searchText));
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
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {restaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          restaurants?.map((restaurant) => {
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

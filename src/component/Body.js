//Chunking, Code Splitting, Dynamic bundling, Lazy Loading, On demand loading, Dynamic Import

import React, { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestraurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  function filterData(searchText, restaurants) {
    return restaurants.filter((r) => r.data.name.includes(searchText));
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          placeholder="search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search{searchText}
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

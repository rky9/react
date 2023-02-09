import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
const RestraurantMenu = () => {
  //for reading dynamic url, use params
  // const params = useParams(); //we can use this also
  const { id } = useParams(); //this is dstructating from paramas
  console.log(id);

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.842851&lng=77.645726&menuId=+" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  //early return
  //   if (!restaurant) {
  //     return <Shimmer />;
  //   }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          className="h-28"
        />
        <h1>Restaurant Menu:{restaurant.name}</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default RestraurantMenu;

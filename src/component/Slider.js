import React from "react";
import { useSelector } from "react-redux";
import RestrauntCard from "./RestraurantCard";

function Slider() {
  debugger;
  const imgSlider = useSelector((store) => store.restaurantSlider.sliderData);
  return (
    <div className="bg-black">
      <div className="container overflow-y-scroll flex h-20">
        {imgSlider?.map((e) => (
          <RestrauntCard {...e.data} />
        ))}
      </div>
    </div>
  );
}

export default Slider;

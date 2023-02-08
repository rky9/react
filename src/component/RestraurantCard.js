import React from "react";
import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-gray-100">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-2xl">{name}</h2>
      <div className="mb-2 h-24">{cuisines.join(", ")}</div>
      <div>
        <span
          className={
            "p-2" +
            " rounded-md" +
            " mr-3" +
            (avgRating > 4 ? " bg-green-400" : " bg-red-400")
          }
        >
          {avgRating}
        </span>
        {lastMileTravelString} Minuts
      </div>
    </div>
  );
};

export default RestrauntCard;

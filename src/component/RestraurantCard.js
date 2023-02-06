import React from "react";
import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-2xl">{name}</h2>
      <div>{cuisines.join(", ")}</div>
      <div>{lastMileTravelString} Minuts</div>
    </div>
  );
};

export default RestrauntCard;

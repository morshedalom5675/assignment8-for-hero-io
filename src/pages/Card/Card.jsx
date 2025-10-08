import React from "react";
import downloadImg from "../../assets/icon-downloads.png"
import rattingImg from "../../assets/icon-ratings.png"

const Card = ({app}) => {
    const {image,title,downloads,ratingAvg} = app
  return (
    <div>
      <div className=" space-y-3 rounded-xl shadow-xl bg-gray-200 p-6 hover:scale-105 transition ease-in-out">
        <img className="rounded-xl h-50 w-full" src={image} alt="" />
        <p>{title}</p>
        <div className="flex justify-between items-center">
          <div className="btn flex gap-2">
            <img className="h-5 w-5" src={downloadImg} alt="" />
            <span>{downloads}</span>
          </div>
          <div className="btn flex gap-2">
            <img className="h-5 w-5" src={rattingImg} alt="" />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

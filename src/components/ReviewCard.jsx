import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="feedback"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="text-center max-w-sm mt-6 info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating star"
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">{`(${rating})`}</p>
      </div>
      <h3 className="mt-1 font-palanquin font-bold text-3xl text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;

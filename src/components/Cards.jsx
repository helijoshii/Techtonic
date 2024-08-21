import React from "react";
import Code1 from '../assets/code1.jpg';

const Cards = ({ image, title, lessons, hours, description }) => {
  return (
    <div>
      <div className="max-w-[554px] max-h-[650px] bg-white rounded-3xl border-2 shadow-md overflow-hidden hover:shadow-2xl cursor-pointer mx-auto my-8">
      <img
        className="w-full object-cover"
        src={Code1}
        alt="Card"
      />
      <div className="p-8">
        <h2 className="text-3xl font-semibold my-5">{title}</h2>
        <div className="flex gap-5">

        <p className="text-gray-600">{lessons} lessons</p>
        <p className="text-gray-600">{hours} hours</p>
        </div>
        <p className="text-gray-700 mt-6 max-w-[450px]">
        {description}
        </p>
      </div>
    </div>  
    </div>
  );
};

export default Cards;

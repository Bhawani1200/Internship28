import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden w-[12rem] mx-3 border ">
      <div className="h-[12rem] w-[10rem] ">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4 w-full min-w-0">
        <h3 className="text-lg font-medium text-gray-900 truncate">
          {product.brand}
        </h3>
        <p className="mt-2 text-sm text-gray-500 truncate">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;

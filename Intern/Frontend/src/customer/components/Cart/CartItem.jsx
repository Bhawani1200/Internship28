import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
const CartItem = ({ item }) => {
  return (
    <div className="p-5 shadow-lg border rounded-md mb-6">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-fill h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-4 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size: L,Red</p>
          <p className="opacity-70">Seller:{item.product.brand} </p>
          <div className="flex space-x-5 items-center text-gray-900 mt-6 pt-6">
            <p className="font-semibold">रू{item.price}</p>
            <p className="opacity-50 line-through">
              रू{item.product.discountedPrice}
            </p>
            <p className="text-green-600 font-semibold">
              5%{item.product.discountPersent}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3 </span>
          <IconButton sx={{ color: "" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "Red" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

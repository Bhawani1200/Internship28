import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from '@mui/material/Button';
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md mb-6">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-fill h-full object-cover object-top"
            src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/482211543_1637838093763996_3153469682517823915_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RjdQiXM01GYQ7kNvwFftyS9&_nc_oc=AdlLfshS0QJ5fakIZ651Nnjlqvy2W5iXYEPMttyR5mX8b3qNSa1W_aLOGgPjwwdAxTExrgdMG8qkJm1kXLNgaPGa&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=a7DYOdpwuNax6iyuBCfQUQ&oh=00_AfO-TTr0ucgXM1KiiPQ8A5WjQnE_j73TnB1_Fi9YG88FJw&oe=684D7F98"
            alt=""
          />
        </div>
        <div className="ml-4 space-y-1">
          <p className="font-semibold">Cultural dress for women</p>
          <p className="opacity-70">Size: L,Red</p>
          <p className="opacity-70">Seller:Chaubisedhaka </p>
          <div className="flex space-x-5 items-center text-gray-900 mt-6 pt-6">
            <p className="font-semibold">रू3000</p>
            <p className="opacity-50 line-through">रू3500</p>
            <p className="text-green-600 font-semibold">5%Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3 </span>
          <IconButton sx={{color:""}}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{color:"Red"}}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

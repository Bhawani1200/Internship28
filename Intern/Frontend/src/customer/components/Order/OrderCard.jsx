import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-md shadow-gray-300 hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object object-cover object-top"
              src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/491051226_1208718407931736_676586450931837743_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OtR5NDOmRg4Q7kNvwFInPC7&_nc_oc=AdmzK-sLSgzmkRJWL9p0amzVHnqMBylTjfNlnhHBbtnbuh7X46LEmFsJfwjdfZLPqUocmhIsTsZVevoZ7JZ3fPn7&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=Bro21JKnzt0OuSdZGfm6-w&oh=00_AfOklLMQgqp4NJQ0WCVGpOsEDNx0yz-20WeQ1-OQ69jOSw&oe=684F2B6B"
              alt=""
            />
            <div className="space-y-2 ml-5">
              <p className="">Mens Traditional Coat</p>
              <p className="opacity-50 text-xs font-semibold ">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Red</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>रू4000</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span>Delivered on Chaitra,24</span>
              </p>
              <p className="text-xs">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;

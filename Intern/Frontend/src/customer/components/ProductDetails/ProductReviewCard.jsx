import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div className="flex items-center">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={2} >
          <div className="space-y-2">
            <div>
              <p className="text-lg font-semibold">Ram</p>
              <p className="opacity-70">April,5 2023</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5}/>
          <p className="">Nice product.It was just fit and economical.</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;

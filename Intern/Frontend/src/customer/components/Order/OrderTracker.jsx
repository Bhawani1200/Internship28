import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
const steps = ["Placed ", "Order confirmed", "Shipped", "Delivered"];
const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((lebel) => (
          <Step>
            <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>

            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;

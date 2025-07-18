// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { useLocation } from "react-router-dom";
// import DeliveryAddressForm from "./DeliveryAddressForm";
// import OrderSummary from "./OrderSummary";

// const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

// export default function Checkout() {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const location = useLocation();
//   const querySearch = new URLSearchParams(location.search);
//   const step = querySearch.get("step");

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   return (
//     <div className="px-10 lg:px-20">
//       <Box sx={{ width: "100%" }}>
//         <Stepper activeStep={step}>
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};

//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               All steps completed - you&apos;re finished
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Box sx={{ flex: "1 1 auto" }} />
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: "1 1 auto" }} />

//               <Button onClick={handleNext}>
//                 {activeStep === steps.length - 1 ? "Finish" : "Next"}
//               </Button>
//             </Box>
//             <div className="mt-10">
//               {step === 2 ? <DeliveryAddressForm /> : <OrderSummary />}
//             </div>
//           </React.Fragment>
//         )}
//       </Box>
//     </div>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get("step")) || 0;

  const handleNext = () => {
    navigate(`/checkout?step=${step + 1}`);
  };

  const handleBack = () => {
    navigate(`/checkout?step=${step - 1}`);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <Typography>Please log in to continue</Typography>; 
      case 2:
        return <DeliveryAddressForm />; 
      case 3:
        return <OrderSummary />; 
      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  return (
    <div className="px-10 lg:px-20">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={step}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {step === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed — you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={step === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {step === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
            <div className="mt-10">{renderStepContent()}</div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}

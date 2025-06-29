import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";
const orderStatus = [
  { lable: "On the way", value: "On_the_way" },
  { lable: "Delivered", value: "delivered" },
  { lable: "Cancelled", value: "cancelled" },
  { lable: "Returned", value: "returned" },
];
const Order = () => {
  return (
    <div className="px:5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={3}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5 ">
            <h1>Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <lable htmlFor={option.value}>{option.lable}</lable>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-3">
            {[1, 1, 1, 1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;

// import React from "react";
// import OrderCard from "./OrderCard";

// const orderStatus = [
//   { label: "On the way", value: "On_the_way" },  // Fixed typo: 'lable' to 'label'
//   { label: "Delivered", value: "delivered" },
//   { label: "Cancelled", value: "cancelled" },
//   { label: "Returned", value: "returned" },
// ];

// const Order = () => {
//   return (
//     <div className="p-4">  {/* Added padding to parent container */}
//       <Grid container spacing={2}>  {/* Added spacing between grid items */}
//         <Grid item xs={12} md={3}>  {/* Responsive breakpoint added */}
//           <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
//             <h1>Filter</h1>
//             <div className="space-y-4 mt-10">
//               <h1 className="font-semibold">ORDER STATUS</h1>
//               {orderStatus.map((option) => (
//                 <div key={option.value} className="flex items-center">  {/* Added key prop */}
//                   <input
//                     id={option.value}
//                     defaultValue={option.value}
//                     type="checkbox"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                   />
//                   <label htmlFor={option.value} className="ml-2">{option.label}</label>  {/* Fixed typo and added margin */}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={12} md={9}>  {/* Responsive breakpoint added */}
//           <div className="pl-4 ">  {/* Added left padding for better spacing */}
//             <OrderCard />
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Order;

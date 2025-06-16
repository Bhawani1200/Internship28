import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CustomerRoutes />}></Route>        
      </Routes>
    </div>
  );
};

export default App;

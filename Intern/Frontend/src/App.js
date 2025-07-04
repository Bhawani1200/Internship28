import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes.jsx";
import AdminRouters from "./Routers/AdminRouters.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
        <Route path="/admin*" element={<AdminRouters />}></Route>
      </Routes>
    </div>
  );
};

export default App;

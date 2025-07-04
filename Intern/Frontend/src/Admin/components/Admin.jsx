import React, { useState } from "react";
import { useTheme } from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const menu = [
  { name: "Dashboard", path: "/admin" },
  { name: "Products", path: "/admin/products" },
  { name: "Customers", path: "/admin/users" },
  { name: "Orders", path: "/admin/orders" },
  { name: "AddProduct", path: "/admin/product/create" },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoint.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = <Box></Box>;

  return <div>I am the admin.</div>;
};

export default Admin;
